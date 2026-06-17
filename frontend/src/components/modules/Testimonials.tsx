import { memo } from 'react';
import { motion } from 'framer-motion';
import { VARIANTS } from '@/lib/variants';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Un service d'une précision remarquable. Nos clients sont toujours épatés par la présentation des véhicules à la livraison. AutoShine Pro est devenu un partenaire incontournable.",
    name: "Marc Lefèvre",
    role: "Directeur Général · BMW Toulon"
  },
  {
    quote: "Réactivité, professionnalisme et résultats impeccables. Depuis notre partenariat, notre taux de satisfaction à la livraison a considérablement augmenté. Je recommande sans hésiter.",
    name: "Sophie Martin",
    role: "Responsable Qualité · Mercedes-Benz Var"
  },
  {
    quote: "L'équipe s'adapte parfaitement à nos contraintes et livre toujours un travail irréprochable. Nos véhicules d'exposition brillent en permanence. Rapport qualité-service imbattable.",
    name: "Thomas Dupont",
    role: "Chef de Vente · Audi La Seyne-sur-Mer"
  }
];

export const Testimonials = memo(() => {
  return (
    <section id="testimonials" className="bg-primary">
      <div className="section-padding">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.container}
          className="mb-14"
        >
          <motion.div variants={VARIANTS.item} className="inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.32em] uppercase text-gold-500 mb-4">
            <span className="w-7 h-[1px] bg-gold-500" />
            Ils Nous Font Confiance
          </motion.div>
          <motion.h2 variants={VARIANTS.item} className="font-display text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold leading-tight gold-gradient-text">
            Ce Que Disent<br/>Nos Partenaires
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.container}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              variants={VARIANTS.item}
              className="bg-primary p-10 xl:p-12 group hover:bg-surface transition-colors duration-500"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>

              <p className="text-[0.9rem] font-light text-text-muted leading-[1.82] italic relative pl-6 mb-10 group-hover:text-text-primary transition-colors duration-300">
                <span className="absolute left-0 -top-1 font-display text-[2.4rem] leading-none text-gold-500 opacity-60 font-serif">"</span>
                {t.quote}
              </p>

              <div className="pt-6 border-t border-border-subtle">
                <div className="font-display text-[0.9rem] font-semibold text-text-primary mb-1.5">
                  {t.name}
                </div>
                <div className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-gold-500">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
