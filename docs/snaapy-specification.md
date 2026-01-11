# Snaapy — Feature Specification Document
## Virtual Photobooth/Videobooth Web Application

**Version:** 2.0  
**Date:** January 11, 2026  
**Project Type:** Personal Portfolio Project  
**Platforms:** Desktop & Mobile (Web-based, Mobile-first)  
**Budget:** 100% Free  
**Repository:** GitHub  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design System](#2-design-system)
3. [User Flow](#3-user-flow)
4. [Feature Specifications](#4-feature-specifications)
5. [Page Breakdown](#5-page-breakdown)
6. [Technical Stack](#6-technical-stack)
7. [Filter & Effect Presets](#7-filter--effect-presets)
8. [Frame Templates](#8-frame-templates)
9. [Settings & Preferences](#9-settings--preferences)
10. [Error Handling](#10-error-handling)
11. [File Structure](#11-file-structure)
12. [Development Phases](#12-development-phases)
13. [Future Considerations (PWA)](#13-future-considerations-pwa)

---

## 1. Project Overview

### 1.1 What is Snaapy?

Snaapy is a free, web-based virtual photobooth and videobooth application that allows users to capture photos and videos with customizable layouts, filters, effects, and themed frames. It works on both desktop and mobile browsers without requiring any installation.

### 1.2 Core Value Proposition

- **Free** — No cost to use, no subscriptions
- **Cross-platform** — Works on any modern browser (desktop & mobile)
- **Privacy-focused** — All processing done locally, no server uploads required
- **Fun & Easy** — Intuitive UI with playful frame templates and filters
- **Polished & Dynamic** — Smooth, spring-based animations that feel premium and alive

### 1.3 Target Audience

- Casual users wanting quick, fun photos
- Event attendees (parties, weddings, gatherings)
- Social media users wanting styled photo strips
- Anyone wanting a virtual photobooth experience

---

## 2. Design System

### 2.1 Design Philosophy

**Aesthetic:** Warm, minimal, elegant  
**Vibe:** Professional (VSCO) + Premium (Lando Norris) + Friendly (Snappy)  
**Approach:** Grayscale only — no accent colors — ultra-refined simplicity  
**Motion:** Dynamic, interactive, alive — physics-based animations that respond naturally

### 2.2 Color Palette

#### Light Mode
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | #F5F3F0 | Page background (warm cream) |
| `--bg-secondary` | #FFFFFF | Cards, surfaces |
| `--bg-tertiary` | #EBE8E5 | Subtle containers, dividers |
| `--text-primary` | #1A1818 | Headings, primary text |
| `--text-secondary` | #5C5856 | Body text, descriptions |
| `--text-muted` | #9C9895 | Placeholders, hints |
| `--border` | #D9D6D3 | Borders, separators |
| `--border-strong` | #B5B1AD | Active borders, outlines |

#### Dark Mode
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | #1A1818 | Page background (warm black) |
| `--bg-secondary` | #2D2A2A | Cards, surfaces |
| `--bg-tertiary` | #3D3939 | Subtle containers, dividers |
| `--text-primary` | #F5F3F0 | Headings, primary text |
| `--text-secondary` | #B5B1AD | Body text, descriptions |
| `--text-muted` | #7C7875 | Placeholders, hints |
| `--border` | #3D3939 | Borders, separators |
| `--border-strong` | #5C5856 | Active borders, outlines |

### 2.3 Typography

| Element | Font | Weight | Size (Mobile) | Size (Desktop) |
|---------|------|--------|---------------|----------------|
| H1 (Hero) | Inter / SF Pro | 700 | 32px | 48px |
| H2 (Section) | Inter / SF Pro | 600 | 24px | 32px |
| H3 (Card Title) | Inter / SF Pro | 600 | 18px | 20px |
| Body | Inter / SF Pro | 400 | 16px | 16px |
| Caption | Inter / SF Pro | 400 | 14px | 14px |
| Button | Inter / SF Pro | 600 | 16px | 16px |

**Font Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### 2.4 Spacing Scale

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |

### 2.5 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small buttons, tags |
| `--radius-md` | 12px | Cards, inputs |
| `--radius-lg` | 16px | Large cards, modals |
| `--radius-xl` | 24px | Pill buttons, containers |
| `--radius-full` | 9999px | Circular elements |

### 2.6 Component Styles

#### Buttons

**Primary Button (Filled)**
```css
.button-primary {
  background: var(--text-primary);
  color: var(--bg-primary);
  border: none;
  padding: 14px 28px;
  border-radius: var(--radius-xl);
  font-weight: 600;
  cursor: pointer;
}
```

**Secondary Button (Outlined)**
```css
.button-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-strong);
  padding: 12px 26px;
  border-radius: var(--radius-xl);
}
```

**Ghost Button (Text only)**
```css
.button-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: none;
  padding: 8px 16px;
}
```

#### Cards
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 16px;
  /* No shadow - flat design, shadow added on hover via Framer Motion */
}
```

#### Active/Selected State
```css
.selected {
  border: 2px solid var(--text-primary);
  background: var(--bg-tertiary);
}
```

### 2.7 Background Pattern

**Flowing Organic Lines (Lando-style)**
- SVG-based vector paths
- Subtle gray color: Light mode `#E5E2DF`, Dark mode `#2D2A2A`
- Very slow, subtle drift animation (30s loop)
- Positioned as fixed background layer
- Low opacity for subtlety

### 2.8 Icons

- Style: Outlined, 1.5px stroke
- Size: 24px default, 20px small, 32px large
- Library: Lucide React (free, consistent)

---

### 2.9 Animation System (Framer Motion)

**Philosophy:** Dynamic, interactive, alive — physics-based animations that feel natural and respond to user input. Every element should feel tangible and responsive.

#### 2.9.1 Animation Library

**Primary:** Framer Motion  
**Secondary:** CSS Modules (for styling only, no animations)

Framer Motion handles ALL animations. CSS Modules handle ALL visual styling (colors, sizes, typography, borders). They work together — not in competition.

#### 2.9.2 Motion Configuration File

Create `src/lib/motion.ts` with all animation presets:

```typescript
// src/lib/motion.ts

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

export const pageVariants = {
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

export const staggerContainer = {
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

export const staggerItem = {
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

export const cardVariants = {
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
    transition: { duration: 0.1 },
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

export const buttonVariants = {
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
    transition: { duration: 0.1 },
  },
};

// ============================================
// MODAL VARIANTS
// ============================================

export const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

export const modalContentVariants = {
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

export const countdownVariants = {
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
    transition: { duration: 0.2 },
  },
};

// ============================================
// CAPTURE FLASH VARIANTS
// ============================================

export const flashVariants = {
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

export const galleryItemVariants = {
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
    transition: { duration: 0.1 },
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

export const toastVariants = {
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

export const scrollRevealVariants = {
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

export const thumbnailVariants = {
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
    transition: { duration: 0.1 },
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

export const recordingPulseVariants = {
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

export const errorShakeVariants = {
  shake: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 },
  },
};

// ============================================
// SUCCESS CHECKMARK VARIANTS
// ============================================

export const checkmarkVariants = {
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

export const getReducedMotionVariants = (variants: any) => ({
  ...variants,
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.01 } },
  exit: { opacity: 0, transition: { duration: 0.01 } },
});
```

#### 2.9.3 Animation Timing Reference

| Animation | Type | Config | When |
|-----------|------|--------|------|
| **Page enter** | Spring | stiffness: 200, damping: 25 | Route change |
| **Page exit** | Tween | duration: 0.2 | Route change |
| **Step forward** | Spring | stiffness: 400, damping: 30 | Wizard navigation |
| **Step backward** | Spring | stiffness: 400, damping: 30 | Wizard navigation |
| **Button hover** | Tween | duration: 0.15 | Hover |
| **Button press** | Tween | duration: 0.1 | Active |
| **Card hover** | Tween | duration: 0.15 | Hover |
| **Modal open** | Spring | stiffness: 300, damping: 20 | Open |
| **Modal close** | Tween | duration: 0.15 | Close |
| **Countdown** | Spring | stiffness: 300, damping: 20 | Each second |
| **Capture flash** | Tween | duration: 0.2 | On capture |
| **Scroll reveal** | Tween | duration: 0.5 | On scroll into view |
| **Toast** | Spring | stiffness: 300, damping: 20 | Show/hide |
| **Stagger children** | - | delay: 0.1 | List items |
| **Background drift** | Tween | duration: 30s, loop | Continuous |

#### 2.9.4 Component Implementation Examples

**Page Transitions:**
```tsx
// src/components/common/PageTransition.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { pageVariants } from '@/lib/motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

**Wizard Step Transitions (Direction-aware):**
```tsx
// src/components/booth/BoothWizard.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stepVariants } from '@/lib/motion';

export function BoothWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = () => {
    setDirection(1);
    setStep(prev => prev + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setStep(prev => prev - 1);
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={step}
        custom={direction}
        variants={stepVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        {renderStep(step)}
      </motion.div>
    </AnimatePresence>
  );
}
```

**Button with Micro-interactions:**
```tsx
// src/components/common/Button.tsx
import { motion } from 'framer-motion';
import { buttonVariants } from '@/lib/motion';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <motion.button
      className={styles[variant]}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
```

**Card with Hover Effects:**
```tsx
// src/components/common/Card.tsx
import { motion } from 'framer-motion';
import { cardVariants } from '@/lib/motion';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export function Card({ children, selected, onClick }: CardProps) {
  return (
    <motion.div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      variants={cardVariants}
      initial="initial"
      animate={selected ? "selected" : "animate"}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
```

**Staggered List (Gallery, Features):**
```tsx
// src/components/gallery/GalleryGrid.tsx
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motion';

export function GalleryGrid({ items }) {
  return (
    <motion.div
      className={styles.grid}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={staggerItem}
          whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
          whileTap={{ scale: 0.98 }}
        >
          <GalleryItem item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

**Countdown Timer:**
```tsx
// src/components/booth/Countdown.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { countdownVariants } from '@/lib/motion';

export function Countdown({ count }: { count: number }) {
  return (
    <div className={styles.countdownContainer}>
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          className={styles.countdownNumber}
          variants={countdownVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
```

**Capture Flash:**
```tsx
// src/components/booth/CaptureFlash.tsx
import { motion } from 'framer-motion';
import { flashVariants } from '@/lib/motion';

export function CaptureFlash({ trigger }: { trigger: boolean }) {
  return (
    <motion.div
      className={styles.flash}
      variants={flashVariants}
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
    />
  );
}
```

**Modal with Backdrop:**
```tsx
// src/components/common/Modal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { modalOverlayVariants, modalContentVariants } from '@/lib/motion';

export function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          variants={modalOverlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.content}
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Scroll-Triggered Animations:**
```tsx
// src/components/landing/Features.tsx
import { motion } from 'framer-motion';
import { scrollRevealVariants, staggerContainer, staggerItem } from '@/lib/motion';

export function Features() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={staggerItem}
          className={styles.featureCard}
        >
          {/* Card content */}
        </motion.div>
      ))}
    </motion.section>
  );
}
```

**Draggable Carousel:**
```tsx
// src/components/landing/FrameShowcase.tsx
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { carouselDragConfig } from '@/lib/motion';

export function FrameShowcase({ frames }) {
  const x = useMotionValue(0);
  const containerWidth = frames.length * 280; // item width + gap

  return (
    <div className={styles.carouselContainer}>
      <motion.div
        className={styles.carousel}
        drag="x"
        dragConstraints={{ left: -containerWidth + 300, right: 0 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        style={{ x }}
      >
        {frames.map((frame) => (
          <motion.div
            key={frame.id}
            className={styles.carouselItem}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={frame.thumbnail} alt={frame.name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
```

#### 2.9.5 Reduced Motion Support

Always respect user preferences:

```tsx
// src/hooks/useReducedMotion.ts
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

export function useReducedMotion() {
  return useFramerReducedMotion();
}

// Usage in components:
import { useReducedMotion } from '@/hooks/useReducedMotion';

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ 
        y: shouldReduceMotion ? 0 : [0, -10, 0],
      }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

#### 2.9.6 What NOT to Do

- ❌ Animations longer than 600ms (feels sluggish)
- ❌ Bouncy/elastic easing everywhere (use selectively)
- ❌ Animations that block user interaction
- ❌ Motion that causes layout shifts
- ❌ Too many simultaneous animations
- ❌ Animations without purpose
- ❌ Ignoring `prefers-reduced-motion`
- ❌ Using CSS transitions when Framer Motion is available
- ❌ Mixing animation libraries (stick to Framer Motion)

---

## 3. User Flow

### 3.1 Main Application Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        LANDING PAGE                              │
│  (Hero, Features, Tutorial, Privacy Policy, Social Links)        │
│                            ↓                                     │
│                     [START Button]                               │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 1: GRID SELECTION                        │
│                                                                  │
│  Choose layout:                                                  │
│  • Single (1×1)                                                  │
│  • Vertical Strip (1×4)                                          │
│  • Horizontal Strip (4×1)                                        │
│  • Grid (2×2)                                                    │
│                                                                  │
│  [BACK]                                      [NEXT]              │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 2: MODE SELECTION                        │
│                                                                  │
│  Choose mode:                                                    │
│  • Photo Mode                                                    │
│  • Video Mode                                                    │
│                                                                  │
│  Timer selection: [3s] [5s] [10s]                               │
│  (For multi-shot) Delay between shots: [2s] [3s] [10s]          │
│                                                                  │
│  [BACK]                                      [NEXT]              │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 3: CAPTURE (SNAP)                        │
│                                                                  │
│  ┌─────────────────────────────────────┐                        │
│  │                                     │                        │
│  │         CAMERA PREVIEW              │                        │
│  │         (Mirrored)                  │                        │
│  │                                     │                        │
│  │            [ 3 ]  ← Countdown       │                        │
│  │                                     │                        │
│  └─────────────────────────────────────┘                        │
│                                                                  │
│                    [◉ CAPTURE]                                   │
│                                                                  │
│  [BACK]                                                          │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 4: PREVIEW & RETAKE                      │
│                                                                  │
│  For Single Shot:                                                │
│  ┌───────────┐                                                  │
│  │  Photo 1  │  [Retake]                                        │
│  └───────────┘                                                  │
│                                                                  │
│  For Multi-shot (e.g., 2×2):                                    │
│  ┌─────┬─────┐                                                  │
│  │  1  │  2  │  ← Tap to retake individual                      │
│  ├─────┼─────┤                                                  │
│  │  3  │  4  │                                                  │
│  └─────┴─────┘                                                  │
│                                                                  │
│  [Retake All]                            [Continue]              │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 5: FRAME SELECTION                       │
│                                                                  │
│  View mode: [Grid] [Carousel]                                   │
│                                                                  │
│  Categories: [All] [Classic] [Vintage] [Minimal] [Fun] ...      │
│                                                                  │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                               │
│  │Frame│ │Frame│ │Frame│ │Frame│  ...                           │
│  │  1  │ │  2  │ │  3  │ │  4  │                                │
│  └─────┘ └─────┘ └─────┘ └─────┘                               │
│                                                                  │
│  [BACK]                                      [NEXT]              │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 6: FILTERS & EFFECTS                     │
│                                                                  │
│  FILTERS (Thumbnail Grid or Carousel):                          │
│  [None] [Warm] [Cool] [B&W] [Vintage] [Fade] ...               │
│                                                                  │
│  EFFECTS:                                                        │
│  [Mirror] [Fisheye] [Pixelate] [Glitch] [Vignette]             │
│                                                                  │
│  Live preview updates in real-time                               │
│                                                                  │
│  [BACK]                                      [NEXT]              │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                 STEP 7: DATE/TIME STAMP (Optional)               │
│                                                                  │
│  [Toggle: ON/OFF]                                               │
│                                                                  │
│  If ON:                                                          │
│  Position: [TL] [TC] [TR] [BL] [BC] [BR]                        │
│  Format:   [Jan 7, 2026] [07/01/2026] [2026-01-07] [7 Jan 2026] │
│                                                                  │
│  [BACK]                                      [NEXT]              │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 8: FINAL PREVIEW                         │
│                                                                  │
│  ┌─────────────────────────────────────┐                        │
│  │                                     │                        │
│  │      FINAL COMPOSED IMAGE           │                        │
│  │      (Frame + Filter + Stamp)       │                        │
│  │                                     │                        │
│  └─────────────────────────────────────┘                        │
│                                                                  │
│  [Edit]                              [Save to Gallery]           │
└─────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 9: SAVE COMPLETE                         │
│                                                                  │
│  ✓ Saved to Gallery!                                            │
│                                                                  │
│  [Download] [Show QR Code] [Take Another] [View Gallery]        │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Video-Specific Flow

For video mode, the flow is similar with these differences:

- **Step 3 (Capture):** Shows recording indicator, duration timer
- **Step 4 (Preview):** Video playback with play/pause controls
- **Step 5 (Frame):** Frame selection (same as photo)
- **Step 6 (Filters):** Filters applied post-recording
- **Additional option:** Export as GIF toggle

### 3.3 Navigation Patterns

- **Progress indicator** at top showing current step (animated fill)
- **Back/Next buttons** at bottom (with hover lift effect)
- **Settings icon** accessible from all screens (top-right)
- **Gallery icon** accessible from all screens (top-right or bottom nav)
- **Step transitions** slide left/right based on direction (Framer Motion AnimatePresence)

---

## 4. Feature Specifications

### 4.1 Photo Features

| Feature | Details |
|---------|---------|
| **Single Shot** | Standard single photo capture |
| **Multi-shot** | 4 photos with configurable layouts |
| **Layouts** | 1×1 (single), 1×4 (vertical), 4×1 (horizontal), 2×2 (grid) |
| **Countdown Timer** | 3s, 5s, 10s (user selectable) — animated numbers with spring physics |
| **Multi-shot Delay** | 2s, 3s, 10s between shots |
| **Mirror Mode** | On by default for front camera |
| **Resolution** | 1080p cap (or device max if lower) |
| **Export Format** | PNG |
| **Retake Options** | Retake all or individual photos |
| **Capture Feedback** | Flash effect + shutter sound |

### 4.2 Video Features

| Feature | Details |
|---------|---------|
| **Recording Duration** | 3s, 5s, 10s (user selectable) |
| **Resolution** | 1080p |
| **Audio** | Toggle on/off (user choice) |
| **Filters** | Applied post-recording |
| **GIF Export** | Generate GIF from recorded video |
| **Export Format** | MP4 |
| **Countdown Timer** | 3s, 5s, 10s before recording starts |
| **Recording Indicator** | Pulsing red dot (Framer Motion infinite animation) + timer |

### 4.3 Filters

12 preset filters with real-time preview:

| # | Name | Effect Description |
|---|------|---------------------|
| 1 | **None** | Original, no filter |
| 2 | **Warm** | Slightly warm tones, golden hour feel |
| 3 | **Cool** | Blue-ish cool tones |
| 4 | **B&W** | Classic black and white |
| 5 | **Vintage** | Faded, slightly desaturated, warm |
| 6 | **Fade** | Lifted blacks, muted colors |
| 7 | **Vivid** | Boosted saturation and contrast |
| 8 | **Muted** | Desaturated, soft |
| 9 | **Sepia** | Brown-tinted classic |
| 10 | **High Contrast** | Strong blacks and whites |
| 11 | **Soft** | Slight blur, dreamy |
| 12 | **Film** | Grain + slight color shift |

### 4.4 Fun Effects

| Effect | Description |
|--------|-------------|
| **Mirror** | Horizontal flip |
| **Fisheye** | Barrel distortion, bulge effect |
| **Pixelate** | 8-bit retro blocky look |
| **Glitch** | RGB split, digital distortion |
| **Vignette** | Darkened edges |

### 4.5 Frames

6 themes × 3 templates = 18 frame designs (universal, adapt to all grids)

| Theme | Description | Template Ideas |
|-------|-------------|----------------|
| **Classic** | Timeless, clean | Polaroid, simple black border, white border with shadow |
| **Vintage** | Retro/nostalgic | Film strip perforations, faded edges, sepia-toned border |
| **Minimalist** | Modern, subtle | Thin line, rounded corners, no border (padding only) |
| **Fun/Party** | Playful, colorful | Confetti pattern, bold shapes, playful doodles |
| **Seasonal** | Holiday vibes | Winter/snowflakes, summer/tropical, autumn leaves |
| **Elegant** | Sophisticated | Gold trim, marble texture, floral accents |

### 4.6 Date/Time Stamp

| Option | Values |
|--------|--------|
| **Toggle** | On / Off |
| **Position** | Top-left, Top-center, Top-right, Bottom-left, Bottom-center, Bottom-right |
| **Format** | Jan 7, 2026 / 07/01/2026 / 2026-01-07 / 7 January 2026 |

### 4.7 Gallery

| Feature | Details |
|---------|---------|
| **Capacity** | 10 captures maximum |
| **Storage** | Local browser storage (localStorage) |
| **Management** | Delete individual or clear all |
| **Full Gallery Behavior** | Block new captures until deleted |
| **Auto-delete Option** | Toggle to auto-delete oldest when full |
| **Content** | Photos and videos |
| **Animations** | Staggered load (Framer Motion), fade out on delete |

### 4.8 Export & Sharing

| Feature | Details |
|---------|---------|
| **Download** | Direct download to device |
| **File Naming** | `snaapy_YYYY-MM-DD_001.png` / `.mp4` |
| **QR Code** | Generates QR that links to downloadable file |
| **QR Hosting** | Firebase Storage or Cloudflare R2 (free tier) |

### 4.9 Audio

| Feature | Details |
|---------|---------|
| **Shutter Sound** | Click sound on photo capture |
| **Mute Option** | Toggle in settings |
| **Video Audio** | User toggle for recording with/without audio |

---

## 5. Page Breakdown

### 5.1 Landing Page

**Sections:**
1. **Hero**
   - App name: "Snaapy" (staggered fade in + slide up with Framer Motion)
   - Tagline: "Your personal photobooth." (100ms delay)
   - Primary CTA: [Start] (200ms delay, spring hover animation)
   - Dark/light mode toggle (top-right)
   - Scroll indicator (gentle bounce animation - infinite)

2. **Features Section**
   - Photo & video capture
   - Filters & effects
   - Themed frames
   - Download & share
   - Cards animate in on scroll (whileInView with stagger)

3. **How It Works (Tutorial)**
   - Step-by-step visual guide
   - Simple 4-5 step explanation
   - Icons animate on scroll

4. **Frame Showcase**
   - Draggable carousel (Framer Motion drag)
   - Different frame themes displayed
   - Momentum and snap behavior

5. **About/Developer Section**
   - Personal promotion
   - Links: GitHub, LinkedIn, Portfolio, etc.

6. **Footer**
   - Privacy Policy link
   - Copyright
   - Social links

### 5.2 Main Application (Booth)

- Step-based wizard UI with direction-aware animated transitions
- Progress indicator at top (animated fill with layoutId)
- Full-screen camera view during capture
- Bottom navigation (Back/Next with spring hover effects)

### 5.3 Gallery Page

- Grid view of saved captures (staggered fade in)
- Tap to view full size (modal with spring scale animation)
- Options: Download, QR Code, Delete
- Clear all button
- Empty state with friendly message

### 5.4 Settings Page/Modal

- Dark/Light mode toggle
- Shutter sound toggle
- Auto-delete oldest toggle
- View mode preference (Grid/Carousel)
- Reset all settings
- Modal slides in with spring physics

---

## 6. Technical Stack

### 6.1 Framework & Libraries

| Category | Choice | Reason |
|----------|--------|--------|
| **Framework** | React 18+ | Portfolio appeal, component-based |
| **Build Tool** | Vite | Fast, modern |
| **Language** | TypeScript | Type safety, better DX |
| **Styling** | CSS Modules | Scoped styles for visual appearance |
| **Animation** | Framer Motion | Physics-based animations, gestures, layout animations |
| **Icons** | Lucide React | Free, consistent, outlined style |
| **State** | React Context + useReducer | Simple, no extra dependencies |
| **Storage** | localStorage | Persist preferences & gallery |
| **Routing** | React Router v6 | Landing page vs App vs Gallery |

### 6.2 Core Web APIs

| API | Purpose |
|-----|---------|
| `navigator.mediaDevices.getUserMedia()` | Camera access |
| `MediaRecorder` | Video recording |
| `Canvas API` | Photo capture, filter application, compositing |
| `CSS Filters` | Real-time filter preview |
| `localStorage` | Persist settings & gallery |
| `URL.createObjectURL()` | Blob handling for downloads |
| `Web Share API` (optional) | Native sharing (if supported) |

### 6.3 External Services (Free Tier)

| Service | Purpose |
|---------|---------|
| **GitHub Pages** | Hosting |
| **Firebase Storage** OR **Cloudflare R2** | QR code file hosting |

### 6.4 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 14+
- Edge 80+
- Mobile: iOS Safari 14+, Chrome for Android

---

## 7. Filter & Effect Presets

### 7.1 CSS Filter Values

```css
/* Filter Presets - Applied via CSS Modules */
.filter-none { filter: none; }
.filter-warm { filter: sepia(20%) saturate(1.2) brightness(1.05); }
.filter-cool { filter: saturate(0.9) hue-rotate(15deg) brightness(1.05); }
.filter-bw { filter: grayscale(100%); }
.filter-vintage { filter: sepia(30%) contrast(0.9) brightness(1.1) saturate(0.8); }
.filter-fade { filter: contrast(0.9) brightness(1.1) saturate(0.8); }
.filter-vivid { filter: saturate(1.5) contrast(1.1); }
.filter-muted { filter: saturate(0.6) brightness(1.05); }
.filter-sepia { filter: sepia(80%); }
.filter-highcontrast { filter: contrast(1.4) brightness(1.05); }
.filter-soft { filter: brightness(1.05) blur(0.5px); }
.filter-film { filter: sepia(10%) contrast(1.05) saturate(0.95); }
```

### 7.2 Effect Implementation Notes

| Effect | Implementation |
|--------|----------------|
| **Mirror** | `transform: scaleX(-1)` on canvas |
| **Fisheye** | Canvas pixel manipulation or WebGL shader |
| **Pixelate** | Canvas downscale + upscale with `imageSmoothingEnabled: false` |
| **Glitch** | Canvas RGB channel offset |
| **Vignette** | Radial gradient overlay on canvas |

---

## 8. Frame Templates

### 8.1 Frame Structure

Frames are PNG/SVG overlays or CSS-generated borders that adapt to:
- Single photo (1×1)
- Vertical strip (1×4)
- Horizontal strip (4×1)
- Grid (2×2)

### 8.2 Frame Themes

| Theme | Template 1 | Template 2 | Template 3 |
|-------|------------|------------|------------|
| **Classic** | Polaroid (white border, shadow) | Simple Black | Simple White |
| **Vintage** | Film Strip (perforations) | Faded Cream Border | Rounded Sepia |
| **Minimalist** | Thin Gray Line | Rounded Corners Only | No Border (padding) |
| **Fun/Party** | Confetti Pattern | Bold Color Blocks | Doodle Border |
| **Seasonal** | Snowflakes | Tropical Leaves | Autumn Leaves |
| **Elegant** | Gold Trim | Marble Texture | Floral Corners |

### 8.3 Frame Assets

Frames will be stored as:
- SVG files (scalable, small file size)
- PNG with transparency (for complex textures)
- CSS-only (for simple borders)

---

## 9. Settings & Preferences

### 9.1 User Preferences (Persisted)

| Setting | Options | Default |
|---------|---------|---------|
| Theme | Light / Dark | System preference |
| Shutter Sound | On / Off | On |
| Auto-delete Oldest | On / Off | Off |
| Default Timer | 3s / 5s / 10s | 3s |
| Default Multi-shot Delay | 2s / 3s / 10s | 3s |
| Filter/Frame View Mode | Grid / Carousel | Grid |
| Last Used Filter | (stored) | None |
| Last Used Frame | (stored) | None |
| Reduced Motion | On / Off | System preference |

### 9.2 Storage Key

```javascript
localStorage.key = 'snaapy_preferences'
localStorage.key = 'snaapy_gallery'
```

---

## 10. Error Handling

### 10.1 Camera Access Denied

**Display:**
```
┌─────────────────────────────────────────┐
│                                         │
│    📷  Camera Access Required           │
│                                         │
│    Snaapy needs camera access to        │
│    take photos and videos.              │
│                                         │
│    How to enable:                       │
│    1. Click the camera icon in your     │
│       browser's address bar             │
│    2. Select "Allow"                    │
│    3. Refresh this page                 │
│                                         │
│              [Try Again]                │
│                                         │
└─────────────────────────────────────────┘
```

**Animation:** Error shake with Framer Motion (`errorShakeVariants`)

### 10.2 Browser Not Supported

**Display:**
```
┌─────────────────────────────────────────┐
│                                         │
│    ⚠️  Browser Not Supported            │
│                                         │
│    Snaapy requires a modern browser     │
│    with camera support.                 │
│                                         │
│    Recommended browsers:                │
│    • Chrome 80+                         │
│    • Firefox 75+                        │
│    • Safari 14+                         │
│    • Edge 80+                           │
│                                         │
└─────────────────────────────────────────┘
```

### 10.3 Gallery Full

**Display:**
```
┌─────────────────────────────────────────┐
│                                         │
│    📁 Gallery Full                     │
│                                         │
│    You've reached the maximum of        │
│    10 saved captures.                   │
│                                         │
│    Delete some items to continue.       │
│                                         │
│    [Go to Gallery]  [Enable Auto-delete]│
│                                         │
└─────────────────────────────────────────┘
```

---

## 11. File Structure

```
snaapy/
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── sounds/
│       └── shutter.mp3
│
├── src/
│   ├── assets/
│   │   ├── frames/
│   │   │   ├── classic/
│   │   │   ├── vintage/
│   │   │   ├── minimalist/
│   │   │   ├── fun/
│   │   │   ├── seasonal/
│   │   │   └── elegant/
│   │   ├── icons/
│   │   └── patterns/
│   │       └── flowing-lines.svg
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Card.tsx
│   │   │   ├── Card.module.css
│   │   │   ├── Modal.tsx
│   │   │   ├── Modal.module.css
│   │   │   ├── Toggle.tsx
│   │   │   ├── Toggle.module.css
│   │   │   ├── ProgressIndicator.tsx
│   │   │   ├── ProgressIndicator.module.css
│   │   │   ├── PageTransition.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Toast.module.css
│   │   │   └── index.ts
│   │   │
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.module.css
│   │   │   ├── Features.tsx
│   │   │   ├── Features.module.css
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── HowItWorks.module.css
│   │   │   ├── FrameShowcase.tsx
│   │   │   ├── FrameShowcase.module.css
│   │   │   ├── About.tsx
│   │   │   ├── About.module.css
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.ts
│   │   │
│   │   ├── booth/
│   │   │   ├── GridSelector.tsx
│   │   │   ├── GridSelector.module.css
│   │   │   ├── ModeSelector.tsx
│   │   │   ├── ModeSelector.module.css
│   │   │   ├── CameraView.tsx
│   │   │   ├── CameraView.module.css
│   │   │   ├── Countdown.tsx
│   │   │   ├── Countdown.module.css
│   │   │   ├── CaptureFlash.tsx
│   │   │   ├── CaptureFlash.module.css
│   │   │   ├── CapturePreview.tsx
│   │   │   ├── CapturePreview.module.css
│   │   │   ├── FrameSelector.tsx
│   │   │   ├── FrameSelector.module.css
│   │   │   ├── FilterSelector.tsx
│   │   │   ├── FilterSelector.module.css
│   │   │   ├── EffectSelector.tsx
│   │   │   ├── EffectSelector.module.css
│   │   │   ├── TimestampConfig.tsx
│   │   │   ├── TimestampConfig.module.css
│   │   │   ├── FinalPreview.tsx
│   │   │   ├── FinalPreview.module.css
│   │   │   ├── BoothWizard.tsx
│   │   │   ├── BoothWizard.module.css
│   │   │   └── index.ts
│   │   │
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.tsx
│   │   │   ├── GalleryGrid.module.css
│   │   │   ├── GalleryItem.tsx
│   │   │   ├── GalleryItem.module.css
│   │   │   ├── QRCodeModal.tsx
│   │   │   ├── QRCodeModal.module.css
│   │   │   └── index.ts
│   │   │
│   │   └── settings/
│   │       ├── SettingsModal.tsx
│   │       ├── SettingsModal.module.css
│   │       └── index.ts
│   │
│   ├── context/
│   │   ├── AppContext.tsx
│   │   ├── BoothContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── hooks/
│   │   ├── useCamera.ts
│   │   ├── useRecorder.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useSound.ts
│   │   └── index.ts
│   │
│   ├── lib/
│   │   └── motion.ts           # Framer Motion variants & config
│   │
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── BoothPage.tsx
│   │   ├── GalleryPage.tsx
│   │   └── index.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── filters.css
│   │
│   ├── utils/
│   │   ├── canvas.ts
│   │   ├── download.ts
│   │   ├── qrcode.ts
│   │   ├── storage.ts
│   │   ├── constants.ts
│   │   └── index.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── LICENSE
```

---

## 12. Development Phases

### Phase 1: Foundation (Week 1)

- [ ] Project setup (Vite + React + TypeScript)
- [ ] Install dependencies (framer-motion, react-router-dom, lucide-react)
- [ ] Design system implementation (CSS variables)
- [ ] Motion configuration (`src/lib/motion.ts`)
- [ ] Landing page (Hero with Framer Motion entrance animations)
- [ ] Dark/light mode toggle (smooth transition)
- [ ] Routing setup with AnimatePresence page transitions

### Phase 2: Core Capture (Week 2)

- [ ] Camera access (getUserMedia)
- [ ] Live preview with mirror mode
- [ ] Single photo capture
- [ ] Animated countdown timer (Framer Motion AnimatePresence)
- [ ] Capture flash effect (Framer Motion keyframes)
- [ ] Basic canvas capture

### Phase 3: Multi-shot & Layouts (Week 3)

- [ ] Grid selector UI (with Framer Motion hover/tap)
- [ ] Multi-shot capture logic
- [ ] Delay between shots
- [ ] Preview with retake (staggered animations)
- [ ] Layout composition on canvas
- [ ] Wizard with direction-aware step transitions

### Phase 4: Filters & Effects (Week 4)

- [ ] CSS filter presets
- [ ] Real-time filter preview
- [ ] Fun effects (mirror, fisheye, etc.)
- [ ] Filter selector UI (thumbnail hover scale, selection animation)

### Phase 5: Frames & Composition (Week 5)

- [ ] Frame template assets
- [ ] Frame selector UI (draggable carousel with Framer Motion)
- [ ] Canvas composition (photo + frame)
- [ ] Universal frame adaptation

### Phase 6: Polish & Extras (Week 6)

- [ ] Date/time stamp feature
- [ ] Gallery (staggered animations with layoutId)
- [ ] Download functionality
- [ ] QR code generation (modal with spring animation)
- [ ] Settings persistence
- [ ] Error handling (shake animation)
- [ ] Shutter sound

### Phase 7: Video Mode (Week 7)

- [ ] MediaRecorder implementation
- [ ] Video capture UI (pulsing record indicator - infinite animation)
- [ ] Post-recording filter application
- [ ] GIF export
- [ ] Video gallery support

### Phase 8: Final Polish (Week 8)

- [ ] Landing page scroll animations (whileInView)
- [ ] Responsive testing
- [ ] Performance optimization
- [ ] Reduced motion support (useReducedMotion hook)
- [ ] Cross-browser testing
- [ ] Documentation (README)
- [ ] Deploy to GitHub Pages

---

## 13. Future Considerations (PWA)

For future implementation (not in initial scope):

- `manifest.json` for installability
- Service worker for offline support
- App icons for home screen
- Splash screen

---

## Appendix A: File Naming Convention

```
snaapy_YYYY-MM-DD_XXX.png   (photos)
snaapy_YYYY-MM-DD_XXX.mp4   (videos)
snaapy_YYYY-MM-DD_XXX.gif   (GIFs)

Example:
snaapy_2026-01-07_001.png
snaapy_2026-01-07_002.mp4
```

---

## Appendix B: QR Code Flow

1. User taps "Show QR Code"
2. Image/video is uploaded to Firebase Storage / Cloudflare R2
3. Unique URL is generated
4. QR code is generated encoding that URL
5. Another user scans QR → opens URL → downloads file
6. Files auto-expire after 24-48 hours (to save storage)

---

## Appendix C: Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile S | 320px | Small phones |
| Mobile M | 375px | Standard phones |
| Mobile L | 425px | Large phones |
| Tablet | 768px | Tablets |
| Laptop | 1024px | Small laptops |
| Desktop | 1440px | Standard desktops |

---

## Appendix D: Animation Quick Reference

| Animation | Type | Config | When |
|-----------|------|--------|------|
| **Page enter** | Spring | stiffness: 200, damping: 25 | Route change |
| **Page exit** | Tween | duration: 0.2 | Route change |
| **Step forward** | Spring | stiffness: 400, damping: 30 | Wizard navigation |
| **Step backward** | Spring | stiffness: 400, damping: 30 | Wizard navigation |
| **Button hover** | Tween | duration: 0.15 | Hover |
| **Button press** | Tween | duration: 0.1 | Active |
| **Card hover** | Tween | duration: 0.15 | Hover |
| **Modal open** | Spring | stiffness: 300, damping: 20 | Open |
| **Modal close** | Tween | duration: 0.15 | Close |
| **Countdown** | Spring | stiffness: 300, damping: 20 | Each second |
| **Capture flash** | Keyframes | duration: 0.2, times: [0, 0.3, 1] | On capture |
| **Scroll reveal** | Tween | duration: 0.5 | On scroll into view |
| **Toast** | Spring | stiffness: 300, damping: 20 | Show/hide |
| **Stagger children** | - | delay: 0.1 | List items |
| **Gallery delete** | Tween | duration: 0.2 | On delete |
| **Error shake** | Keyframes | duration: 0.4 | On error |

---

*End of Specification Document*

**Ready to build Snaapy!** 🎉
