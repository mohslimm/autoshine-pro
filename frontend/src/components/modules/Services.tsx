import { memo } from 'react';
import { motion } from 'framer-motion';
import { VARIANTS } from '@/lib/variants';
import { Diamond, Layers, Hexagon, RefreshCcw } from 'lucide-react';

const SERVICES_DATA = [
  {
    num: '01',
    icon: <Diamond strokeWidth={1} className="w-10 h-10" />,
    title: "Préparation\nà la Livraison",
    desc: "Finition irréprochable avant chaque remise au client. Votre réputation reflétée dans chaque véhicule.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
    points: [
      "Nettoyage intérieur complet",
      "Polissage & lustrage carrosserie",
      "Vitres & optiques traités",
      "Désodorisation & présentation finale"
    ]
  },
  {
    num: '02',
    icon: <Layers strokeWidth={1} className="w-10 h-10" />,
    title: "Entretien du\nParc Exposition",
    desc: "Vos véhicules en vitrine maintenus dans un état showroom permanent. Programmes réguliers sur mesure.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800",
    points: [
      "Programme mensuel personnalisé",
      "Nettoyage jantes & pneus",
      "Entretien plastiques & cuirs",
      "Rapport d'état détaillé fourni"
    ]
  },
  {
    num: '03',
    icon: <Hexagon strokeWidth={1} className="w-10 h-10" />,
    title: "Protection\nCéramique Premium",
    desc: "Revêtements céramique professionnels pour une protection 2 ans+ et un éclat permanent de vos véhicules.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800",
    points: [
      "Traitement céramique longue durée",
      "Protection UV & contaminants",
      "Hydrophobicité maximale",
      "Certificat de traitement remis"
    ]
  },
  {
    num: '04',
    icon: <RefreshCcw strokeWidth={1} className="w-10 h-10" />,
    title: "Reconditionnement\nVéhicules d'Occasion",
    desc: "Remise en état complète des reprises pour maximiser leur valeur à la revente et réduire le délai de vente.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
    points: [
      "Correction défauts carrosserie",
      "Décontamination ferreux",
      "Rénovation sellerie",
      "Audit visuel complet inclus"
    ]
  }
];

export const Services = memo(() => {
  return (
    <section id="services" className="relative py-32 overflow-hidden bg-void">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-padding relative z-10">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.container}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={VARIANTS.item} className="inline-flex items-center gap-3 font-mono text-[0.65rem] font-bold tracking-[0.4em] uppercase text-gold-500 mb-6">
            <span className="w-8 h-[1px] bg-gold-500/50" />
            Nos Prestations
            <span className="w-8 h-[1px] bg-gold-500/50" />
          </motion.div>
          <motion.h2 variants={VARIANTS.item} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] text-text-primary mb-6 tracking-tight">
            Des Services Conçus <br/>
            <span className="font-light italic text-gold-400">Pour les Professionnels</span>
          </motion.h2>
          <motion.p variants={VARIANTS.item} className="text-[1rem] font-light text-text-muted leading-[1.8] max-w-xl mx-auto">
            Nous intervenons directement dans vos locaux, sans aucune interruption de votre activité commerciale, pour un résultat irréprochable.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.container}
        >
          {SERVICES_DATA.map((svc) => (
            <motion.div 
              key={svc.num}
              variants={VARIANTS.item}
              className="relative p-10 md:p-14 rounded-[2rem] bg-surface/20 border border-white/[0.04] backdrop-blur-md group hover:-translate-y-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_40px_80px_-20px_rgba(5,248,254,0.12)] hover:border-gold-500/30 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] filter blur-[2px]"
                  style={{ backgroundImage: `url(${svc.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-[#07090F]/80 to-transparent" />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
              </div>
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold-gradient scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-70 z-20" />
              <div className="absolute top-10 left-10 w-32 h-32 bg-gold-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-10" />

              <div className="relative z-20 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-text-muted group-hover:text-gold-500 group-hover:scale-110 group-hover:bg-gold-500/10 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-lg">
                    {svc.icon}
                  </div>
                  <div className="font-display text-[1rem] font-medium tracking-[0.2em] text-text-muted/40 group-hover:text-gold-500/60 transition-colors duration-500">
                    {svc.num}
                  </div>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-medium text-text-primary mb-4 leading-tight whitespace-pre-line group-hover:text-gold-400 transition-colors duration-500 drop-shadow-sm">
                  {svc.title}
                </h3>

                <p className="text-[0.95rem] font-light text-text-muted leading-[1.8] mb-10 flex-1 drop-shadow-sm">
                  {svc.desc}
                </p>

                <ul className="flex flex-col gap-5 mt-auto border-t border-white/[0.05] pt-8">
                  {svc.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted/30 mt-2 shrink-0 group-hover:bg-gold-500 group-hover:shadow-[0_0_10px_var(--gold-glow)] transition-all duration-500" />
                      <span className="font-body text-[0.85rem] font-light tracking-wide text-text-muted leading-relaxed group-hover:text-text-primary transition-colors duration-500">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
