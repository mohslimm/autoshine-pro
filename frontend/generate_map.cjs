const https = require('https');
const fs = require('fs');

https.get('https://france-geojson.gregoiredavid.fr/repo/arrondissements-paris.geojson', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const geojson = JSON.parse(data);
      console.log('GeoJSON loaded, features:', geojson.features.length);
      
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      geojson.features.forEach(f => {
        const coords = f.geometry.coordinates[0];
        coords.forEach(c => {
          if (c[0] < minX) minX = c[0];
          if (c[0] > maxX) maxX = c[0];
          if (c[1] < minY) minY = c[1];
          if (c[1] > maxY) maxY = c[1];
        });
      });
      
      const width = 800;
      const height = 600;
      const mapX = (x) => ((x - minX) / (maxX - minX)) * width;
      const mapY = (y) => height - (((y - minY) / (maxY - minY)) * height);
      
      let svgPaths = '';
      geojson.features.forEach(f => {
        const coords = f.geometry.coordinates[0];
        let d = 'M ' + coords.map(c => mapX(c[0]).toFixed(2) + ' ' + mapY(c[1]).toFixed(2)).join(' L ') + ' Z';
        let num = f.properties.c_ar;
        let name = f.properties.l_ar || `Paris ${num}e`;
        
        svgPaths += `
        <motion.path 
          d="${d}" 
          fill="rgba(255,255,255,0.03)" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="2"
          whileHover={{ fill: 'rgba(5, 248, 254, 0.4)', stroke: 'rgba(5, 248, 254, 1)', strokeWidth: 3 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredDistrict('${name.replace(/'/g, "\\'")}')}
          onMouseLeave={() => setHoveredDistrict(null)}
          className="cursor-pointer"
        />`;
      });
      fs.writeFileSync('src/components/modules/ParisMapPaths.tsx', svgPaths);
      console.log('Wrote src/components/modules/ParisMapPaths.tsx');
    } catch(e) { console.error('Error:', e); }
  });
}).on('error', (e) => console.error(e));
