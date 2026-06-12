const fs = require('fs');

try {
  const data = fs.readFileSync('paris_open.json', 'utf8');
  const geojson = JSON.parse(data);
  
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  
  geojson.features.forEach(f => {
    let geom = f.geometry;
    if (!geom) return;
    let coordsList = geom.type === 'MultiPolygon' ? geom.coordinates[0] : geom.coordinates;
    coordsList.forEach(ring => {
      ring.forEach(c => {
        if (c[0] < minX) minX = c[0];
        if (c[0] > maxX) maxX = c[0];
        if (c[1] < minY) minY = c[1];
        if (c[1] > maxY) maxY = c[1];
      });
    });
  });
  
  const width = 800;
  const height = 600;
  const ratioX = width / (maxX - minX);
  const ratioY = height / (maxY - minY);
  const scale = Math.min(ratioX, ratioY) * 0.9;
  
  const offsetX = (width - (maxX - minX) * scale) / 2;
  const offsetY = (height - (maxY - minY) * scale) / 2;

  const mapX = (x) => offsetX + (x - minX) * scale;
  const mapY = (y) => offsetY + (maxY - y) * scale; // invert Y correctly
  
  let svgPaths = '';
  geojson.features.forEach(f => {
    let geom = f.geometry;
    if (!geom) return;
    let rings = geom.type === 'MultiPolygon' ? geom.coordinates[0] : geom.coordinates;
    let d = '';
    rings.forEach(ring => {
      d += 'M ' + ring.map(c => mapX(c[0]).toFixed(2) + ' ' + mapY(c[1]).toFixed(2)).join(' L ') + ' Z ';
    });
    
    let num = f.properties.c_ar; // 1, 2, ...
    let name = f.properties.l_ar || ('Paris ' + num + 'e'); // e.g. "Louvre"
    
    svgPaths += `
        <motion.path 
          key="${num}"
          d="${d}" 
          fill="var(--bg-elevated)" 
          stroke="var(--border-subtle)" 
          strokeWidth="1.5"
          initial={{ fill: "var(--bg-elevated)", opacity: 0.8 }}
          whileHover={{ fill: "rgba(5, 248, 254, 0.25)", stroke: "rgba(5, 248, 254, 0.8)", opacity: 1, zIndex: 10 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredDistrict('${num}e - ${name.replace(/'/g, "\\'")}')}
          onMouseLeave={() => setHoveredDistrict(null)}
          className="cursor-pointer outline-none"
        />`;
  });

  const componentCode = `
import { memo, useState } from 'react';
import { motion } from 'framer-motion';

export const RealParisMap = memo(() => {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[500px]">
        ${svgPaths}
      </svg>
      
      {/* Dynamic Hover Box */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hoveredDistrict ? 1 : 0, y: hoveredDistrict ? 0 : 10 }}
          className="bg-surface/90 backdrop-blur-md border border-gold-500/30 px-6 py-3 rounded-xl shadow-[0_10px_40px_rgba(5,248,254,0.15)] flex flex-col items-center"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.2em] text-gold-500 mb-1 uppercase">Arrondissement</span>
          <span className="font-display text-lg text-text-primary whitespace-nowrap">
            {hoveredDistrict || 'Paris'}
          </span>
        </motion.div>
      </div>
    </div>
  );
});

RealParisMap.displayName = 'RealParisMap';
`;

  fs.writeFileSync('src/components/modules/RealParisMap.tsx', componentCode.trim());
  console.log('Wrote src/components/modules/RealParisMap.tsx');
} catch(e) { 
  console.error('Error:', e); 
}
