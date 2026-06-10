import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ANTIGRAVITY_VARIANTS = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 40, filter: 'blur(10px)' },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

export const Hero = memo(() => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void selection:bg-gold-500/20">
      
      {/* Background: Rich Black with subtle radial depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(39,39,42,0.4)_0%,rgba(10,10,10,1)_60%)] pointer-events-none" />
      
      {/* Very subtle grain overlay for editorial feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <motion.div 
        className="relative z-10 w-full max-w-4xl px-6 mx-auto text-center flex flex-col items-center mt-12"
        variants={ANTIGRAVITY_VARIANTS.container}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={ANTIGRAVITY_VARIANTS.item} className="mb-8">
          <div className="inline-flex items-center gap-3 font-body text-[0.65rem] font-medium tracking-[0.3em] uppercase text-text-muted/60">
            <span className="w-8 h-[1px] bg-gold-500/30" />
            Detailing Automobile Premium
            <span className="w-8 h-[1px] bg-gold-500/30" />
          </div>
        </motion.div>

        <motion.h1 variants={ANTIGRAVITY_VARIANTS.item} className="font-display flex flex-col items-center justify-center mb-8">
          {/* Majestic Serif with perfect kerning */}
          <span className="text-[clamp(3.5rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-text-primary">
            Qualité Showroom,
          </span>
          {/* Natural integration of italicized text */}
          <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light italic text-gold-400 mt-2 tracking-normal opacity-90">
            Où Que Vous Soyez
          </span>
        </motion.h1>

        <motion.p 
          variants={ANTIGRAVITY_VARIANTS.item} 
          className="font-body text-[1rem] md:text-[1.1rem] font-light text-text-muted max-w-[600px] leading-[1.6] mb-12"
        >
          L'excellence du détailing directement dans vos locaux en Île-de-France. 
          Une finition irréprochable pensée exclusivement pour les concessionnaires exigeants.
        </motion.p>

        {/* Action Buttons: CSS Grid or Flex with gap-6, no overlapping */}
        <motion.div variants={ANTIGRAVITY_VARIANTS.item} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          
          {/* Primary CTA */}
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-[#0A0A0A] rounded-full font-body text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ease-in-out hover:bg-gold-400 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Demander un devis
          </a>

          {/* Secondary CTA (Text Link with arrow) */}
          <a 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 font-body text-[0.75rem] font-medium tracking-[0.2em] uppercase text-text-muted hover:text-gold-500 transition-colors duration-300 group"
          >
            <span>Découvrir nos services</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
        </motion.div>
      </motion.div>

    </section>
  );
});

Hero.displayName = 'Hero';
