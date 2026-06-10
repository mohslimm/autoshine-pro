import { DURATION, EASE } from './constants';

export const VARIANTS = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASE.smooth },
    },
  },
  fade: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: DURATION.slow, ease: EASE.smooth },
    },
  },
};

export const getReducedMotionVariants = (prefersReduced: boolean, baseVariants: any) => {
  if (!prefersReduced) return baseVariants;
  
  return {
    ...baseVariants,
    item: {
      ...baseVariants.item,
      animate: {
        ...baseVariants.item.animate,
        transition: { duration: 0 },
      }
    },
    fade: {
      ...baseVariants.fade,
      animate: {
        ...baseVariants.fade.animate,
        transition: { duration: 0 },
      }
    }
  };
};
