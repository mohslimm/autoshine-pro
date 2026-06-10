import { memo } from 'react';
import { motion } from 'framer-motion';
import { VARIANTS } from '@/lib/variants';
import { ShieldCheck, Sparkles, Clock, MapPin } from 'lucide-react';

const WHY_POINTS = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Produits Professionnels Certifiés",
    desc: "Utilisation exclusive de produits homologués, sans aucun risque pour vos peintures, revêtements et matériaux."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Interventions Sans Interruption",
    desc: "Nous travaillons selon vos horaires — tôt le matin, en soirée ou le week-end. Aucune perturbation de votre activité."
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Déplacement à Domicile · Paris & IDF",
    desc: "Notre équipe se déplace directement dans vos locaux. Zéro transport de véhicule, zéro risque de transit."
  }
];

export const WhyUs = memo(() => {
  return (
    <section id="why" className="bg-primary">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.item}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-surface border border-border-subtle p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient" />
              
              <ShieldCheck className="w-14 h-14 text-gold-500 mb-6" />
              
              <div className="font-display text-2xl font-bold text-text-primary mb-2 leading-snug">
                Partenaire Officiel<br/>des Concessionnaires
              </div>
              <div className="font-mono text-[0.68rem] font-semibold tracking-[0.26em] uppercase text-gold-500">
                Certifié · Assuré · Professionnel
              </div>
            </div>

            {/* Chips */}
            <div className="absolute -top-5 -right-5 bg-primary border border-border-subtle p-5 min-w-[120px] shadow-xl">
              <div className="font-display text-3xl font-bold gold-gradient-text leading-none mb-1">+98%</div>
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-text-muted">Satisfaction</div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-primary border border-border-subtle p-5 min-w-[120px] shadow-xl">
              <div className="font-display text-3xl font-bold gold-gradient-text leading-none mb-1">24h</div>
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-text-muted">Délai Réponse</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.container}
            className="order-1 lg:order-2"
          >
            <motion.div variants={VARIANTS.item} className="inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.32em] uppercase text-gold-500 mb-4">
              <span className="w-7 h-[1px] bg-gold-500" />
              Pourquoi Nous Choisir
            </motion.div>
            
            <motion.h2 variants={VARIANTS.item} className="font-display text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold leading-tight gold-gradient-text mb-6">
              L'Excellence au<br/>Service de Votre Marque
            </motion.h2>
            
            <motion.p variants={VARIANTS.item} className="text-[0.95rem] font-light text-text-muted max-w-[500px] leading-[1.82] mb-10">
              Nous comprenons les exigences du secteur premium. Chaque intervention s'adapte à vos contraintes opérationnelles.
            </motion.p>

            <div className="flex flex-col gap-8">
              {WHY_POINTS.map((pt, i) => (
                <motion.div key={i} variants={VARIANTS.item} className="flex gap-5 items-start group">
                  <div className="w-11 h-11 shrink-0 border border-border-subtle bg-surface flex items-center justify-center text-gold-500 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300">
                    {pt.icon}
                  </div>
                  <div>
                    <div className="font-display text-[0.97rem] font-semibold text-text-primary mb-1.5 group-hover:text-gold-400 transition-colors duration-300">
                      {pt.title}
                    </div>
                    <div className="text-[0.86rem] font-light text-text-muted leading-[1.75]">
                      {pt.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
});

WhyUs.displayName = 'WhyUs';
