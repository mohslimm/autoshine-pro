import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Expertise', href: '/#why' },
    { name: 'Processus', href: '/#process' },
    { name: 'Références', href: '/#testimonials' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-void/80 backdrop-blur-xl border-b border-white/[0.02]' 
            : 'py-8 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center group shrink-0">
            <motion.img 
              src="/images/logo-notxt.png" 
              alt="AutoShine Pro Logo" 
              className="h-12 md:h-16 w-auto" 
              initial={{ opacity: 0.9 }}
              whileHover={{ 
                opacity: 1, 
                scale: 1.05, 
                rotate: [0, -5, 5, 0],
                filter: "drop-shadow(0 0 10px var(--gold-glow))"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </Link>
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-body text-[0.7rem] uppercase tracking-[0.2em] font-medium text-text-muted/60 hover:text-text-primary transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-px h-4 bg-border-subtle hidden xl:block" />

            <div className="hidden xl:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-[0_0_8px_var(--gold-500)] animate-pulse" />
              <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-gold-500/80">Partenaire Officiel</span>
            </div>
          </div>
          <div className="hidden md:flex shrink-0">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-[#0A0A0A] font-body text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300 ease-in-out font-medium"
            >
              Demander un devis
            </a>
          </div>
          <button 
            className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-void/95 pt-32 pb-8 px-8 flex flex-col md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 mt-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-display text-2xl tracking-wide text-text-muted hover:text-gold-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-8">
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-full border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-[#0A0A0A] font-body text-[0.75rem] uppercase tracking-[0.2em] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demander un devis
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';
