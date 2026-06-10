import { memo, useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = memo(({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1).replace('.0', '')}k`;
    return num.toString();
  };

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold gold-gradient-text leading-none mb-2">
      {formatNumber(count)}{suffix}
    </div>
  );
});

Counter.displayName = 'Counter';

export const StatsBand = memo(() => {
  return (
    <div className="bg-primary border-y border-border-subtle relative z-20">
      <div className="section-padding py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center pt-4 md:pt-0"
          >
            <Counter value={200} suffix="+" />
            <div className="font-mono text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-text-muted">
              Concessions Partenaires
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center pt-8 md:pt-0"
          >
            <Counter value={5000} suffix="+" />
            <div className="font-mono text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-text-muted">
              Véhicules Traités
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center pt-8 md:pt-0 border-none md:border-l"
          >
            <Counter value={98} suffix="%" />
            <div className="font-mono text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-text-muted">
              Satisfaction Client
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center pt-8 md:pt-0"
          >
            <div className="font-display text-4xl md:text-5xl font-bold gold-gradient-text leading-none mb-2">
              Paris&nbsp;IDF
            </div>
            <div className="font-mono text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-text-muted">
              Zone d'Intervention
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

StatsBand.displayName = 'StatsBand';
