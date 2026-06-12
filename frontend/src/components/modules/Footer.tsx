import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/lib/constants';

export const Footer = memo(() => {
  return (
    <footer className="bg-[#01060f] border-t border-border-subtle pt-16 pb-8">
      <div className="section-padding py-0 md:py-0 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16 mb-12">
        <div>
          <Link to="/" className="inline-block mb-6">
            <motion.img 
              src="/images/logo-notxt.png" 
              alt="AutoShine Pro Logo" 
              className="h-16 md:h-20 w-auto" 
              initial={{ opacity: 0.9 }}
              whileHover={{ 
                opacity: 1, 
                scale: 1.05, 
                rotate: [0, 5, -5, 0],
                filter: "drop-shadow(0 0 10px var(--gold-glow))"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </Link>
          <div className="font-mono text-[0.65rem] font-semibold tracking-[0.26em] uppercase text-gold-500 mb-5">Detailing Premium · Paris</div>
          <p className="text-[0.84rem] font-light text-text-muted leading-[1.8] max-w-[400px]">
            Partenaire officiel des concessionnaires automobiles en Île-de-France. Qualité showroom, où que vous soyez.
          </p>
        </div>
        <div>
          <div className="font-mono text-[0.68rem] font-bold tracking-[0.26em] uppercase text-text-primary mb-6">Services</div>
          <ul className="flex flex-col gap-3">
            <li><a href="/#services" className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">Préparation Livraison</a></li>
            <li><a href="/#services" className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">Entretien Parc</a></li>
            <li><a href="/#services" className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">Protection Céramique</a></li>
            <li><a href="/#services" className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">Reconditionnement VO</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[0.68rem] font-bold tracking-[0.26em] uppercase text-text-primary mb-6">Contact & Légal</div>
          <ul className="flex flex-col gap-3">
            <li><a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">{CONTACT_INFO.phone}</a></li>
            <li><a href={`mailto:${CONTACT_INFO.email}`} className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">{CONTACT_INFO.email}</a></li>
            <li><a href="/politique-de-confidentialite" className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">Politique de Confidentialité</a></li>
            <li><a href="/mentions-legales" className="text-[0.86rem] font-light text-text-muted hover:text-gold-400 transition-colors">Mentions Légales & CGV</a></li>
            <li><a href="/#contact" className="text-[0.86rem] font-semibold text-gold-500 hover:text-gold-400 transition-colors mt-2 block">Demander un Devis</a></li>
          </ul>
        </div>
      </div>

      <div className="section-padding py-0 md:py-0">
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[0.76rem] text-text-muted/60">
            © {new Date().getFullYear()} AutoShine Pro · Paris, France
          </div>
          <div className="text-[0.76rem] text-text-muted/60">
            Detailing Premium Pour Concessionnaires
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
