import { memo, useState } from 'react';
import { motion } from 'framer-motion';

const ARRONDISSEMENTS = [
  { id: 1, name: "1er - Louvre" },
  { id: 2, name: "2e - Bourse" },
  { id: 3, name: "3e - Temple" },
  { id: 4, name: "4e - Hôtel-de-Ville" },
  { id: 5, name: "5e - Panthéon" },
  { id: 6, name: "6e - Luxembourg" },
  { id: 7, name: "7e - Palais-Bourbon" },
  { id: 8, name: "8e - Élysée" },
  { id: 9, name: "9e - Opéra" },
  { id: 10, name: "10e - Entrepôt" },
  { id: 11, name: "11e - Popincourt" },
  { id: 12, name: "12e - Reuilly" },
  { id: 13, name: "13e - Gobelins" },
  { id: 14, name: "14e - Observatoire" },
  { id: 15, name: "15e - Vaugirard" },
  { id: 16, name: "16e - Passy" },
  { id: 17, name: "17e - Batignolles-Monceau" },
  { id: 18, name: "18e - Buttes-Montmartre" },
  { id: 19, name: "19e - Buttes-Chaumont" },
  { id: 20, name: "20e - Ménilmontant" },
];

export const ParisMap = memo(() => {
  const [hovered, setHovered] = useState<number | null>(null);

  // Generate a procedural 'snail' (escargot) layout using SVG paths
  // We use 4 rings: center (1-4), inner (5-11), mid (12-16), outer (17-20)
  const rings = [
    { start: 1, end: 4, rIn: 0, rOut: 60 },
    { start: 5, end: 11, rIn: 65, rOut: 130 },
    { start: 12, end: 16, rIn: 135, rOut: 200 },
    { start: 17, end: 20, rIn: 205, rOut: 270 }
  ];

  const getPath = (id: number) => {
    const ring = rings.find(r => id >= r.start && id <= r.end)!;
    const count = ring.end - ring.start + 1;
    const index = id - ring.start;
    
    // Calculate angles
    const angleStep = (Math.PI * 2) / count;
    // Rotate to make it look like a spiral starting from top right
    const offset = -Math.PI / 2 + (ring.rIn > 0 ? (index * angleStep * 0.5) : 0);
    
    const a1 = offset + index * angleStep;
    const a2 = offset + (index + 1) * angleStep;
    
    // Small gap
    const gap = 0.04;
    const startAngle = a1 + gap;
    const endAngle = a2 - gap;

    const cx = 300;
    const cy = 300;

    if (ring.rIn === 0) {
      // Center pieces (pie slices)
      const x1 = cx + Math.cos(startAngle) * ring.rOut;
      const y1 = cy + Math.sin(startAngle) * ring.rOut;
      const x2 = cx + Math.cos(endAngle) * ring.rOut;
      const y2 = cy + Math.sin(endAngle) * ring.rOut;
      const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
      
      return `M ${cx} ${cy} L ${x1} ${y1} A ${ring.rOut} ${ring.rOut} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    } else {
      const x1 = cx + Math.cos(startAngle) * ring.rIn;
      const y1 = cy + Math.sin(startAngle) * ring.rIn;
      const x2 = cx + Math.cos(startAngle) * ring.rOut;
      const y2 = cy + Math.sin(startAngle) * ring.rOut;
      
      const x3 = cx + Math.cos(endAngle) * ring.rOut;
      const y3 = cy + Math.sin(endAngle) * ring.rOut;
      const x4 = cx + Math.cos(endAngle) * ring.rIn;
      const y4 = cy + Math.sin(endAngle) * ring.rIn;
      
      const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
      
      return `M ${x1} ${y1} L ${x2} ${y2} A ${ring.rOut} ${ring.rOut} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${ring.rIn} ${ring.rIn} 0 ${largeArc} 0 ${x1} ${y1} Z`;
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <svg viewBox="0 0 600 600" className="w-full h-full max-w-[450px]">
        {ARRONDISSEMENTS.map(arr => {
          const isHovered = hovered === arr.id;
          return (
            <motion.path
              key={arr.id}
              d={getPath(arr.id)}
              fill="var(--bg-elevated)"
              stroke="var(--border-subtle)"
              strokeWidth="2"
              animate={{
                fill: isHovered ? "rgba(5, 248, 254, 0.2)" : "rgba(255, 255, 255, 0.02)",
                stroke: isHovered ? "rgba(5, 248, 254, 0.8)" : "rgba(255, 255, 255, 0.05)",
                scale: isHovered ? 1.02 : 1,
              }}
              style={{ originX: '300px', originY: '300px', transformBox: 'fill-box' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseEnter={() => setHovered(arr.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer outline-none"
            />
          );
        })}
      </svg>
      
      {/* Dynamic Hover Box */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          className="bg-surface/80 backdrop-blur-md border border-gold-500/30 px-6 py-3 rounded-xl shadow-[0_10px_40px_rgba(5,248,254,0.15)] flex flex-col items-center"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.2em] text-gold-500 mb-1 uppercase">Arrondissement</span>
          <span className="font-display text-lg text-text-primary whitespace-nowrap">
            {hovered ? ARRONDISSEMENTS.find(a => a.id === hovered)?.name : 'Paris'}
          </span>
        </motion.div>
      </div>
    </div>
  );
});

ParisMap.displayName = 'ParisMap';
