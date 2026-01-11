import type { Variants, Transition } from 'framer-motion';

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions = {
  // Fast micro-interactions (hover, press)
  fast: { 
    duration: 0.15, 
    ease: [0.25, 0.46, 0.45, 0.94] 
  },
  
  // Standard transitions
  normal: { 
    duration: 0.25, 
    ease: [0.25, 0.46, 0.45, 0.94] 
  },
  
  // Slower, more deliberate (modals, pages)
  slow: { 
    duration: 0.4, 
    ease: [0.25, 0.46, 0.45, 0.94] 
  },
  
  // Spring physics - snappy and responsive
  spring: { 
    type: "spring", 
    stiffness: 400, 
    damping: 30 
  },
  
  // Spring physics - bouncy and playful
  springBouncy: { 
    type: "spring", 
    stiffness: 300, 
    damping: 20 
  },
  
  // Spring physics - gentle and smooth
  springGentle: { 
    type: "spring", 
    stiffness: 200, 
    damping: 25 
  },
  
  // For exit animations
  exit: { 
    duration: 0.2, 
    ease: [0.25, 0.46, 0.45, 0.94] 
  },
} as const;

// ============================================
// PAGE TRANSITION VARIANTS
// ============================================

export const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.slow
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: transitions.exit
  },
};

// ============================================
// WIZARD STEP VARIANTS (Direction-aware)
// ============================================

export const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: transitions.spring,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: transitions.exit,
  }),
};

// ============================================
// STAGGER CONTAINER VARIANTS
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: transitions.spring,
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: transitions.exit,
  },
};

// ============================================
// CARD VARIANTS
// ============================================

export const cardVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: transitions.spring,
  },
  hover: { 
    y: -4, 
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
    transition: transitions.fast,
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 } as Transition,
  },
  selected: {
    scale: 1.02,
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
    transition: transitions.spring,
  },
};

// ============================================
// BUTTON VARIANTS
// ============================================

export const buttonVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 10 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.spring,
  },
  hover: { 
    y: -2, 
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: transitions.fast,
  },
  tap: { 
    scale: 0.97,
    transition: { duration: 0.1 } as Transition,
  },
};

// ============================================
// MODAL VARIANTS
// ============================================

export const modalOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 } as Transition,
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.15 } as Transition,
  },
};

export const modalContentVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: transitions.springBouncy,
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 10,
    transition: transitions.exit,
  },
};

// ============================================
// COUNTDOWN VARIANTS
// ============================================

export const countdownVariants: Variants = {
  initial: { 
    scale: 1.5, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: transitions.springBouncy,
  },
  exit: { 
    scale: 0.8, 
    opacity: 0,
    transition: { duration: 0.2 } as Transition,
  },
};

// ============================================
// CAPTURE FLASH VARIANTS
// ============================================

export const flashVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: [0, 0.8, 0],
    transition: { 
      duration: 0.2, 
      times: [0, 0.3, 1],
      ease: "easeOut",
    },
  },
};

// ============================================
// GALLERY ITEM VARIANTS
// ============================================

export const galleryItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.spring,
  },
  hover: {
    y: -4,
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
    transition: transitions.fast,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 } as Transition,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: transitions.exit,
  },
};

// ============================================
// TOAST / NOTIFICATION VARIANTS
// ============================================

export const toastVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: transitions.springBouncy,
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95,
    transition: transitions.exit,
  },
};

// ============================================
// SCROLL REVEAL VARIANTS
// ============================================

export const scrollRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ============================================
// SELECTOR THUMBNAIL VARIANTS
// ============================================

export const thumbnailVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.spring,
  },
  hover: { 
    scale: 1.05,
    transition: transitions.fast,
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 } as Transition,
  },
  selected: {
    scale: 1.05,
    boxShadow: "0 0 0 2px var(--text-primary)",
    transition: transitions.spring,
  },
};

// ============================================
// RECORDING PULSE VARIANTS
// ============================================

export const recordingPulseVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================
// ERROR SHAKE VARIANTS
// ============================================

export const errorShakeVariants: Variants = {
  shake: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 },
  },
};

// ============================================
// SUCCESS CHECKMARK VARIANTS
// ============================================

export const checkmarkVariants: Variants = {
  hidden: { 
    pathLength: 0, 
    opacity: 0 
  },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      pathLength: { duration: 0.3, ease: "easeOut" },
      opacity: { duration: 0.1 },
    },
  },
};

// ============================================
// DRAG CAROUSEL CONFIG
// ============================================

export const carouselDragConfig = {
  drag: "x" as const,
  dragElastic: 0.2,
  dragTransition: { 
    bounceStiffness: 300, 
    bounceDamping: 30 
  },
};

// ============================================
// REDUCED MOTION HELPER
// ============================================

export const getReducedMotionVariants = (variants: Variants) => ({
  ...variants,
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.01 } },
  exit: { opacity: 0, transition: { duration: 0.01 } },
});
