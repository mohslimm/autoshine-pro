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
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.item}
            className="bg-surface border border-border-subtle h-[420px] flex items-center justify-center relative overflow-hidden group rounded-[2rem]"
          >
            <img
              src="/paris-map.gif"
              alt="Carte des arrondissements de Paris"
              className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
            />
          </motion.div>
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
