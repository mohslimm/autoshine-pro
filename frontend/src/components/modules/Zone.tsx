import { memo } from 'react';
import { motion } from 'framer-motion';
import { VARIANTS } from '@/lib/variants';

const ZONES = [
  { name: "Paris (75) — Tous arrondissements", special: false },
  { name: "Hauts-de-Seine (92) — Neuilly, La Défense, Boulogne", special: false },
  { name: "Val-de-Marne (94) — Vincennes, Créteil, Vitry", special: false },
  { name: "Seine-Saint-Denis (93) — Saint-Denis, Montreuil", special: false },
  { name: "Yvelines (78) — Versailles, Saint-Germain-en-Laye", special: false },
  { name: "Essonne (91) — Évry, Massy, Palaiseau", special: false },
  { name: "Val-d'Oise (95) — Cergy, Pontoise, Sarcelles", special: false },
  { name: "Autres départements — Sur devis", special: true }
];

export const Zone = memo(() => {
  return (
    <section id="zone" className="bg-void">
      <div className="section-padding">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.container}
        >
          <motion.div variants={VARIANTS.item} className="inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.32em] uppercase text-gold-500 mb-4">
            <span className="w-7 h-[1px] bg-gold-500" />
            Zone d'Intervention
          </motion.div>
          <motion.h2 variants={VARIANTS.item} className="font-display text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold leading-tight gold-gradient-text mb-6">
            Paris & Île-de-France
          </motion.h2>
          <motion.p variants={VARIANTS.item} className="text-[0.95rem] font-light text-text-muted max-w-[500px] leading-[1.82]">
            Nous couvrons l'ensemble de la région parisienne. Déplacement inclus dans nos tarifs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
          
          {/* Map Visual */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.item}
            className="bg-surface border border-border-subtle h-[380px] flex items-center justify-center relative overflow-hidden group"
          >
            {/* SVG Background Map Rings */}
            <svg viewBox="0 0 400 400" fill="none" className="absolute inset-0 w-full h-full opacity-20 text-gold-500 transition-opacity duration-700 group-hover:opacity-40">
              <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth=".8" strokeDasharray="6 4" />
              <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
              <circle cx="200" cy="200" r="36" stroke="currentColor" strokeWidth="1.8" fill="rgba(197,160,89,.07)" />
              <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth=".6" />
              <line x1="200" y1="40" x2="200" y2="360" stroke="currentColor" strokeWidth=".6" />
              <line x1="87" y1="87" x2="313" y2="313" stroke="currentColor" strokeWidth=".4" opacity=".4" />
              <line x1="313" y1="87" x2="87" y2="313" stroke="currentColor" strokeWidth=".4" opacity=".4" />
              
              <circle cx="200" cy="200" r="5" fill="currentColor" />
              <circle cx="200" cy="200" r="12" stroke="currentColor" strokeWidth="1" fill="none" opacity=".5">
                <animate attributeName="r" values="12;24;12" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".5;0;.5" dur="3s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="148" cy="158" r="3" fill="currentColor" opacity=".6" />
              <circle cx="265" cy="230" r="3" fill="currentColor" opacity=".6" />
              <circle cx="175" cy="275" r="3" fill="currentColor" opacity=".6" />
              <circle cx="252" cy="148" r="3" fill="currentColor" opacity=".6" />
              <circle cx="130" cy="250" r="2.5" fill="currentColor" opacity=".4" />
              <circle cx="290" cy="170" r="2.5" fill="currentColor" opacity=".4" />
            </svg>

            <div className="text-center relative z-10">
              <span className="text-[2.6rem] block mb-3 drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]">📍</span>
              <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-text-primary font-semibold bg-surface/50 backdrop-blur-sm px-4 py-1.5 border border-border-subtle inline-block">
                Paris · Île-de-France
              </div>
            </div>
          </motion.div>

          {/* Zones List */}
          <motion.div 
            className="flex flex-col gap-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.container}
          >
            {ZONES.map((zone, i) => (
              <motion.div 
                key={i}
                variants={VARIANTS.item}
                className={`flex items-center gap-4 px-6 py-4 border font-mono text-[0.85rem] tracking-[0.06em] transition-colors duration-300 ${
                  zone.special 
                    ? 'border-gold-500/50 bg-gold-500/5 font-semibold text-gold-400 hover:border-gold-500' 
                    : 'border-border-subtle bg-surface font-medium text-text-primary hover:border-gold-500/50'
                }`}
              >
                <div className={`w-[7px] h-[7px] rounded-full shrink-0 ${zone.special ? 'bg-text-muted' : 'bg-gold-500'}`} />
                {zone.name}
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
});

Zone.displayName = 'Zone';
