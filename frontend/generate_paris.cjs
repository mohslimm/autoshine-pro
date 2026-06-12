const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/arrondissements-municipaux.geojson', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      if (res.statusCode !== 200) {
         console.error('Failed to download:', res.statusCode);
         return;
      }
      const geojson = JSON.parse(data);
      console.log('GeoJSON loaded, features:', geojson.features.length);
      
      const parisFeatures = geojson.features.filter(f => f.properties.code.startsWith('751'));
      console.log('Filtered Paris features:', parisFeatures.length);
      
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      parisFeatures.forEach(f => {
        let geom = f.geometry;
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
      const mapY = (y) => offsetY + height - ((y - minY) * scale); // invert Y
      
      let svgPaths = '';
      parisFeatures.forEach(f => {
        let geom = f.geometry;
        let rings = geom.type === 'MultiPolygon' ? geom.coordinates[0] : geom.coordinates;
        let d = '';
        rings.forEach(ring => {
          d += 'M ' + ring.map(c => mapX(c[0]).toFixed(2) + ' ' + mapY(c[1]).toFixed(2)).join(' L ') + ' Z ';
        });
        
        let num = f.properties.code.replace('751', '');
        if (num.startsWith('0')) num = num.substring(1);
        let name = f.properties.nom || ('Paris ' + num + 'e');
        
        svgPaths += `
        <motion.path 
          d="${d}" 
          fill="var(--bg-elevated)" 
          stroke="var(--border-subtle)" 
          strokeWidth="1.5"
          initial={{ fill: "var(--bg-elevated)", opacity: 0.8 }}
          whileHover={{ fill: "rgba(5, 248, 254, 0.15)", stroke: "rgba(5, 248, 254, 0.5)", opacity: 1, zIndex: 10 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredDistrict('${name.replace(/'/g, "\\'")}')}
          onMouseLeave={() => setHoveredDistrict(null)}
          className="cursor-pointer outline-none"
        />`;
      });
      fs.writeFileSync('src/components/modules/ParisMapPaths.tsx', svgPaths);
      console.log('Wrote src/components/modules/ParisMapPaths.tsx');
    } catch(e) { console.error('Error:', e); }
  });
}).on('error', (e) => console.error(e));
