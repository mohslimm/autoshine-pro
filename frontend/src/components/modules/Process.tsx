import { memo } from 'react';
import { motion } from 'framer-motion';
import { VARIANTS } from '@/lib/variants';
import { ClipboardList, CalendarClock, Shield, CheckSquare } from 'lucide-react';

const STEPS = [
  {
    num: '1',
    icon: <ClipboardList className="w-[22px] h-[22px]" />,
    title: "Évaluation & Devis",
    desc: "Analyse de vos besoins et de votre parc. Devis personnalisé sous 24h, sans engagement."
  },
  {
    num: '2',
    icon: <CalendarClock className="w-[22px] h-[22px]" />,
    title: "Planification",
    desc: "Coordination avec vos équipes pour des créneaux aux moments les moins impactants pour votre activité."
  },
  {
    num: '3',
    icon: <Shield className="w-[22px] h-[22px]" />,
    title: "Traitement Premium",
    desc: "Application de nos protocoles exclusifs avec soin et minutie. Chaque détail compte."
  },
  {
    num: '4',
    icon: <CheckSquare className="w-[22px] h-[22px]" />,
    title: "Contrôle Qualité",
    desc: "Inspection finale, photos de réception et compte-rendu détaillé de chaque intervention."
  }
];

export const Process = memo(() => {
  return (
    <section id="process" className="bg-void relative overflow-hidden">
      <div className="section-padding">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.container}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={VARIANTS.item} className="inline-flex items-center justify-center gap-3 font-mono text-xs font-semibold tracking-[0.32em] uppercase text-gold-500 mb-4">
            <span className="w-7 h-[1px] bg-gold-500" />
            Notre Méthode
            <span className="w-7 h-[1px] bg-gold-500" />
          </motion.div>
          <motion.h2 variants={VARIANTS.item} className="font-display text-[clamp(1.9rem,3.5vw,2.9rem)] font-bold leading-tight gold-gradient-text">
            Un Protocole Rigoureux<br/>en 4 Étapes
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.container}
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent pointer-events-none" />

          {STEPS.map((step) => (
            <motion.div 
              key={step.num} 
              variants={VARIANTS.item}
              className="px-4 md:px-6 text-center group"
            >
              <div className="w-[72px] h-[72px] rounded-full border border-border-subtle bg-primary mx-auto mb-6 flex items-center justify-center text-gold-500 relative z-10 transition-all duration-400 group-hover:border-gold-500 group-hover:bg-surface group-hover:shadow-[0_0_32px_var(--gold-glow)]">
                {step.icon}
                
                <div className="absolute -top-2 -right-2 w-[22px] h-[22px] rounded-full bg-gold-gradient text-[#1A1200] font-mono text-[0.62rem] font-bold flex items-center justify-center shadow-md">
                  {step.num}
                </div>
              </div>
              
              <div className="font-display text-[0.97rem] font-semibold text-text-primary mb-2.5 group-hover:text-gold-400 transition-colors duration-300">
                {step.title}
              </div>
              
              <div className="text-[0.84rem] font-light text-text-muted leading-[1.75]">
                {step.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Process.displayName = 'Process';
