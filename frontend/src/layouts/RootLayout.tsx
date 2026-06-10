import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from '../components/modules/Navbar';
import { Footer } from '../components/modules/Footer';
import { WhatsAppButton } from '../components/modules/WhatsAppButton';
import { ScrollToTopButton } from '../components/modules/ScrollToTopButton';

export const RootLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on route change, unless there's a hash
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // If there's a hash in the URL on load, scroll to it using Lenis
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        // slight delay to ensure render
        setTimeout(() => {
          lenis.scrollTo(target);
        }, 100);
      }
    }

    return () => {
      lenis.destroy();
    };
  }, [hash]);

  return (
    <div className="min-h-screen bg-void text-text-primary selection:bg-gold-500/30 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};
