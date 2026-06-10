import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { VARIANTS } from '@/lib/variants';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial="initial"
        animate="animate"
        variants={VARIANTS.container}
      >
        <motion.h1 
          variants={VARIANTS.item} 
          className="font-display text-[clamp(6rem,15vw,12rem)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-text-primary to-bg-void leading-none mb-4 opacity-20 select-none"
        >
          404
        </motion.h1>
        
        <motion.div variants={VARIANTS.item} className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-gold-400 mb-4">
            Page Introuvable
          </h2>
          <p className="font-body text-text-muted font-light max-w-md mx-auto leading-relaxed">
            Il semble que vous vous soyez égaré. La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </motion.div>

        <motion.div variants={VARIANTS.item}>
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface border border-border-subtle rounded-full text-text-primary font-mono text-[0.75rem] uppercase tracking-[0.2em] hover:bg-gold-500/10 hover:border-gold-500 hover:text-gold-400 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l'accueil</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
