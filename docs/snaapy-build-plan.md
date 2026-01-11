# Snaapy — Build Plan
## Development Workflow & Task Breakdown

**Version:** 2.0  
**Date:** January 11, 2026  
**Estimated Duration:** 8 Weeks  
**Repository:** https://github.com/0SUJ0SU/snaapy

---

## Overview

This document outlines the step-by-step development plan for building Snaapy. Each phase includes specific tasks, files to create, and git milestones. Use this alongside the Feature Specification Document.

**Animation Library:** Framer Motion (primary)  
**Styling:** CSS Modules (visual appearance only)

---

## Phase 1: Foundation (Week 1)

### Goals
- Project structure setup
- Design system implementation
- Framer Motion configuration
- Landing page (basic)
- Dark/light mode
- Routing with animated page transitions

### Tasks

#### 1.1 Project Setup & Dependencies
**Commands:**
```bash
# Create project
npm create vite@latest snaapy -- --template react-ts
cd snaapy

# Install dependencies
npm install react-router-dom framer-motion lucide-react

# Install dev dependencies (if needed)
npm install -D @types/react @types/react-dom
```

**Task checklist:**
- [ ] Initialize Vite + React + TypeScript project
- [ ] Install react-router-dom
- [ ] Install framer-motion
- [ ] Install lucide-react
- [ ] Clean up default Vite files
- [ ] Set up folder structure

**Git checkpoint:**
```bash
git init
git add .
git commit -m "chore: initialize project with Vite, React, TypeScript"
git branch -M main
git remote add origin https://github.com/0SUJ0SU/snaapy.git
git push -u origin main
```

---

#### 1.2 Design System Setup
**Files to create:**
```
src/styles/
├── variables.css       # CSS custom properties (colors, spacing, typography)
├── globals.css         # Reset, base styles, body styles
├── filters.css         # CSS filter presets
└── index.css           # Import aggregator

src/types/
└── index.ts            # Shared TypeScript interfaces and types
```

**Task checklist:**
- [ ] Define color tokens (light & dark mode)
- [ ] Define typography scale
- [ ] Define spacing scale
- [ ] Define border radius tokens
- [ ] Create CSS reset/normalize
- [ ] Set up dark mode CSS variables with `[data-theme="dark"]`
- [ ] Add filter preset classes

**variables.css structure:**
```css
:root {
  /* Colors - Light Mode */
  --bg-primary: #F5F3F0;
  --bg-secondary: #FFFFFF;
  --bg-tertiary: #EBE8E5;
  --text-primary: #1A1818;
  --text-secondary: #5C5856;
  --text-muted: #9C9895;
  --border: #D9D6D3;
  --border-strong: #B5B1AD;
  
  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}

[data-theme="dark"] {
  --bg-primary: #1A1818;
  --bg-secondary: #2D2A2A;
  --bg-tertiary: #3D3939;
  --text-primary: #F5F3F0;
  --text-secondary: #B5B1AD;
  --text-muted: #7C7875;
  --border: #3D3939;
  --border-strong: #5C5856;
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: implement design system with CSS variables"
git push origin main
```

---

#### 1.3 Framer Motion Configuration
**Files to create:**
```
src/lib/
└── motion.ts           # All Framer Motion variants and presets
```

**Task checklist:**
- [ ] Create transitions object (fast, normal, slow, spring, springBouncy)
- [ ] Create pageVariants (page transitions)
- [ ] Create stepVariants (wizard direction-aware)
- [ ] Create staggerContainer and staggerItem variants
- [ ] Create cardVariants with hover/tap states
- [ ] Create buttonVariants with hover/tap states
- [ ] Create modalOverlayVariants and modalContentVariants
- [ ] Create countdownVariants (scale + fade)
- [ ] Create flashVariants (keyframes for capture)
- [ ] Create galleryItemVariants
- [ ] Create toastVariants
- [ ] Create scrollRevealVariants
- [ ] Create thumbnailVariants (for selectors)
- [ ] Create recordingPulseVariants
- [ ] Create errorShakeVariants
- [ ] Create checkmarkVariants (success animation)
- [ ] Create carouselDragConfig
- [ ] Create getReducedMotionVariants helper

**Full motion.ts file:** (See specification document section 2.9.2 for complete code)

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add Framer Motion configuration with all animation variants"
git push origin main
```

---

#### 1.4 Common Components
**Files to create:**
```
src/components/common/
├── Button.tsx          # Primary, Secondary, Ghost variants with Framer Motion
├── Button.module.css
├── Card.tsx            # Container component with hover lift
├── Card.module.css
├── Toggle.tsx          # For settings switches
├── Toggle.module.css
├── ProgressIndicator.tsx  # Step progress bar with animated fill
├── ProgressIndicator.module.css
└── index.ts            # Export aggregator
```

**Task checklist:**
- [ ] Button component with Framer Motion `whileHover` and `whileTap`
- [ ] Button variants: primary, secondary, ghost
- [ ] Card component with Framer Motion hover lift
- [ ] Toggle/Switch component with Framer Motion layout animation
- [ ] Progress indicator with Framer Motion animated width

**Button.tsx example:**
```tsx
import { motion } from 'framer-motion';
import { buttonVariants } from '@/lib/motion';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  disabled 
}: ButtonProps) {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]}`}
      variants={buttonVariants}
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add common UI components with Framer Motion animations"
git push origin main
```

---

#### 1.5 Theme Provider & Dark Mode
**Files to create:**
```
src/context/
└── ThemeContext.tsx    # Theme state, toggle function, localStorage persist

src/components/common/
├── ThemeToggle.tsx     # Sun/moon icon button with rotation
└── ThemeToggle.module.css
```

**Task checklist:**
- [ ] Create ThemeContext with React Context
- [ ] Implement localStorage persistence
- [ ] Detect system preference on first load
- [ ] Create ThemeToggle component with Lucide icons
- [ ] Add Framer Motion rotation animation on toggle
- [ ] Apply `data-theme` attribute to document

**ThemeToggle.tsx with Framer Motion:**
```tsx
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      className={styles.toggle}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add dark/light mode with animated theme toggle"
git push origin main
```

---

#### 1.6 Routing Setup with Animated Page Transitions
**Files to create:**
```
src/pages/
├── LandingPage.tsx     # Home/marketing page (placeholder)
├── BoothPage.tsx       # Main app (placeholder)
├── GalleryPage.tsx     # Saved captures (placeholder)
└── index.ts

src/components/common/
└── PageTransition.tsx  # Wrapper for animated route transitions

src/App.tsx             # Router setup with AnimatePresence
```

**Task checklist:**
- [ ] Set up BrowserRouter in main.tsx
- [ ] Define routes: `/`, `/booth`, `/gallery`
- [ ] Create placeholder page components
- [ ] Create PageTransition component with AnimatePresence
- [ ] Page enter: fade in + slide up (spring physics)
- [ ] Page exit: fade out + slide up (tween)
- [ ] Test transitions between all routes

**PageTransition.tsx:**
```tsx
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
        style={{ width: '100%', minHeight: '100vh' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

**App.tsx structure:**
```tsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { PageTransition } from '@/components/common/PageTransition';
import { LandingPage, BoothPage, GalleryPage } from '@/pages';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><LandingPage /></PageTransition>
        } />
        <Route path="/booth" element={
          <PageTransition><BoothPage /></PageTransition>
        } />
        <Route path="/gallery" element={
          <PageTransition><GalleryPage /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: set up routing with Framer Motion page transitions"
git push origin main
```

---

#### 1.7 Landing Page - Hero Section
**Files to create:**
```
src/components/landing/
├── Hero.tsx            # Hero section with staggered entrance animations
├── Hero.module.css
├── ScrollIndicator.tsx # Bouncing arrow indicator
├── ScrollIndicator.module.css
└── index.ts

src/assets/patterns/
└── flowing-lines.svg   # Background pattern
```

**Task checklist:**
- [ ] Create Hero component with Framer Motion
- [ ] App name "Snaapy" with staggerItem variant
- [ ] Tagline with staggered delay
- [ ] "Start" CTA button with buttonVariants
- [ ] Theme toggle positioned in corner
- [ ] Create/add flowing lines SVG background
- [ ] Background drift animation (30s loop with Framer Motion)
- [ ] Scroll indicator with infinite bounce animation
- [ ] Responsive layout (mobile-first)

**Hero.tsx with staggered animations:**
```tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem, buttonVariants } from '@/lib/motion';
import { ThemeToggle } from '@/components/common';
import { ScrollIndicator } from './ScrollIndicator';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background pattern */}
      <motion.div 
        className={styles.backgroundPattern}
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Theme toggle */}
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
      
      {/* Content */}
      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={staggerItem} className={styles.title}>
          Snaapy
        </motion.h1>
        
        <motion.p variants={staggerItem} className={styles.tagline}>
          Your personal photobooth.
        </motion.p>
        
        <motion.div variants={staggerItem}>
          <Link to="/booth">
            <motion.button
              className={styles.ctaButton}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Start
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
```

**ScrollIndicator.tsx with infinite bounce:**
```tsx
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './ScrollIndicator.module.css';

export function ScrollIndicator() {
  return (
    <motion.div
      className={styles.scrollIndicator}
      animate={{ y: [0, 8, 0] }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <span>scroll down for more information</span>
      <ChevronDown size={20} />
    </motion.div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add landing page hero with Framer Motion staggered animations"
git push origin main
```

---

#### 1.8 Landing Page - Remaining Sections
**Files to create:**
```
src/components/landing/
├── Features.tsx        # Feature highlights with scroll reveal
├── Features.module.css
├── HowItWorks.tsx      # Step-by-step tutorial
├── HowItWorks.module.css
├── FrameShowcase.tsx   # Example outputs carousel (draggable)
├── FrameShowcase.module.css
├── About.tsx           # Developer promo section
├── About.module.css
├── Footer.tsx          # Links, copyright, privacy
├── Footer.module.css
└── index.ts            # Update exports

src/hooks/
├── useReducedMotion.ts # Re-export from Framer Motion
└── index.ts
```

**Task checklist:**
- [ ] Features section (4 feature cards)
- [ ] Cards animate with `whileInView` (staggered)
- [ ] How It Works section (step icons + descriptions)
- [ ] Step icons animate with `whileInView`
- [ ] Frame Showcase with Framer Motion drag
- [ ] Draggable carousel with momentum and constraints
- [ ] About section with scroll reveal
- [ ] Footer
- [ ] useReducedMotion hook (re-export from framer-motion)

**Features.tsx with whileInView:**
```tsx
import { motion } from 'framer-motion';
import { Camera, Sliders, Frame, Download } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion';
import styles from './Features.module.css';

const features = [
  { icon: Camera, title: 'Photo & Video', description: 'Capture moments with your camera' },
  { icon: Sliders, title: 'Filters & Effects', description: '12 filters and fun effects' },
  { icon: Frame, title: 'Themed Frames', description: '18 beautiful frame templates' },
  { icon: Download, title: 'Download & Share', description: 'Save or share via QR code' },
];

export function Features() {
  return (
    <motion.section
      className={styles.features}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 variants={staggerItem} className={styles.sectionTitle}>
        Features
      </motion.h2>
      
      <div className={styles.grid}>
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className={styles.featureCard}
            variants={staggerItem}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
          >
            <feature.icon size={32} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
```

**FrameShowcase.tsx with draggable carousel:**
```tsx
import { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styles from './FrameShowcase.module.css';

const showcaseFrames = [
  { id: 1, name: 'Polaroid', image: '/frames/polaroid-preview.png' },
  { id: 2, name: 'Film Strip', image: '/frames/filmstrip-preview.png' },
  // ... more frames
];

export function FrameShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  return (
    <section className={styles.showcase}>
      <h2>Capture the Moment</h2>
      <p>Snap, share, and shine with our photobooth magic!</p>
      
      <div className={styles.carouselContainer} ref={containerRef}>
        <motion.div
          className={styles.carousel}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          style={{ x }}
        >
          {showcaseFrames.map((frame) => (
            <motion.div
              key={frame.id}
              className={styles.frameItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={frame.image} alt={frame.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: complete landing page with scroll animations and draggable carousel"
git push origin main
```

---

## Phase 2: Core Capture (Week 2)

### Goals
- Camera access
- Live preview
- Single photo capture
- Animated countdown timer
- Capture flash effect

### Tasks

#### 2.1 Camera Hook
**Files to create:**
```
src/hooks/
├── useCamera.ts        # getUserMedia, stream management
└── index.ts            # Update exports
```

**Task checklist:**
- [ ] Request camera permission
- [ ] Get video stream
- [ ] Handle permission denied error
- [ ] Handle no camera error
- [ ] Cleanup on unmount
- [ ] Mirror mode toggle

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add useCamera hook for camera access"
git push origin main
```

---

#### 2.2 Camera View Component
**Files to create:**
```
src/components/booth/
├── CameraView.tsx      # Video element + controls
├── CameraView.module.css
└── index.ts
```

**Task checklist:**
- [ ] Display live camera feed
- [ ] Apply mirror transform via CSS
- [ ] Capture button with Framer Motion `whileHover` and `whileTap`
- [ ] Loading state with pulsing animation
- [ ] Error state with shake animation (`errorShakeVariants`)
- [ ] Smooth fade in when camera ready

**CameraView.tsx with error handling:**
```tsx
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useCamera } from '@/hooks/useCamera';
import { buttonVariants, errorShakeVariants } from '@/lib/motion';
import styles from './CameraView.module.css';

export function CameraView({ onCapture }) {
  const { videoRef, isLoading, error, retry } = useCamera();
  
  if (error) {
    return (
      <motion.div 
        className={styles.error}
        variants={errorShakeVariants}
        animate="shake"
      >
        <Camera size={48} />
        <h3>Camera Access Required</h3>
        <p>{error.message}</p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={retry}
        >
          Try Again
        </motion.button>
      </motion.div>
    );
  }
  
  return (
    <div className={styles.cameraView}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className={styles.loading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Camera size={48} />
            </motion.div>
            <p>Initializing camera...</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.video
        ref={videoRef}
        className={styles.video}
        autoPlay
        playsInline
        muted
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.button
        className={styles.captureButton}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={onCapture}
        disabled={isLoading}
      >
        <Camera size={24} />
      </motion.button>
    </div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add CameraView component with loading and error states"
git push origin main
```

---

#### 2.3 Animated Countdown Timer
**Files to create:**
```
src/components/booth/
├── Countdown.tsx       # Overlay countdown display with spring animations
└── Countdown.module.css
```

**Task checklist:**
- [ ] AnimatePresence for number transitions
- [ ] Numbers scale from 1.5 → 1 with spring physics
- [ ] Numbers fade out before next number
- [ ] Support 3s, 5s, 10s durations
- [ ] Callback when complete

**Countdown.tsx with Framer Motion:**
```tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { countdownVariants } from '@/lib/motion';
import styles from './Countdown.module.css';

interface CountdownProps {
  duration: number; // in seconds
  onComplete: () => void;
}

export function Countdown({ duration, onComplete }: CountdownProps) {
  const [count, setCount] = useState(duration);
  
  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }
    
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [count, onComplete]);
  
  return (
    <div className={styles.countdownOverlay}>
      <AnimatePresence mode="wait">
        {count > 0 && (
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
        )}
      </AnimatePresence>
    </div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add animated countdown timer with spring physics"
git push origin main
```

---

#### 2.4 Capture Flash Effect
**Files to create:**
```
src/components/booth/
├── CaptureFlash.tsx    # White overlay flash on capture
└── CaptureFlash.module.css
```

**Task checklist:**
- [ ] White overlay with keyframe animation
- [ ] Opacity: 0 → 0.8 → 0 (200ms total)
- [ ] Triggered by capture event
- [ ] Uses Framer Motion animate prop with keyframes

**CaptureFlash.tsx:**
```tsx
import { motion, AnimatePresence } from 'framer-motion';
import { flashVariants } from '@/lib/motion';
import styles from './CaptureFlash.module.css';

interface CaptureFlashProps {
  trigger: boolean;
  onAnimationComplete?: () => void;
}

export function CaptureFlash({ trigger, onAnimationComplete }: CaptureFlashProps) {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className={styles.flash}
          variants={flashVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onAnimationComplete={onAnimationComplete}
        />
      )}
    </AnimatePresence>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add capture flash effect with Framer Motion keyframes"
git push origin main
```

---

#### 2.5 Photo Capture (Canvas)
**Files to create:**
```
src/utils/
├── canvas.ts           # Capture frame from video to canvas
└── index.ts
```

**Task checklist:**
- [ ] Capture video frame to canvas
- [ ] Apply mirror transform on capture
- [ ] Return as data URL (PNG)
- [ ] Respect resolution cap (1080p)

**Git checkpoint:**
```bash
git add .
git commit -m "feat: implement photo capture with canvas"
git push origin main
```

---

#### 2.6 Shutter Sound
**Files to create:**
```
public/sounds/
└── shutter.mp3         # Camera click sound

src/hooks/
└── useSound.ts         # Play audio utility
```

**Task checklist:**
- [ ] Add shutter sound file
- [ ] Create useSound hook
- [ ] Play on capture (synced with flash)
- [ ] Respect mute setting from context

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add shutter sound effect"
git push origin main
```

---

## Phase 3: Multi-shot & Layouts (Week 3)

### Goals
- Grid selector UI with animations
- Multi-shot capture logic
- Layout composition
- Preview with retake (animated)
- Wizard with direction-aware transitions

### Tasks

#### 3.1 Grid Selector
**Files to create:**
```
src/components/booth/
├── GridSelector.tsx    # Layout picker (1×1, 1×4, 4×1, 2×2)
└── GridSelector.module.css
```

**Task checklist:**
- [ ] Visual grid options as cards
- [ ] Card component with Framer Motion `whileHover` (lift + shadow)
- [ ] Selection state with `whileTap` and selected variant
- [ ] Pass selected grid to context/parent

**GridSelector.tsx:**
```tsx
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, cardVariants } from '@/lib/motion';
import styles from './GridSelector.module.css';

const gridOptions = [
  { id: 'single', label: 'Single', rows: 1, cols: 1 },
  { id: 'vertical', label: 'Vertical Strip', rows: 4, cols: 1 },
  { id: 'horizontal', label: 'Horizontal Strip', rows: 1, cols: 4 },
  { id: 'grid', label: 'Grid', rows: 2, cols: 2 },
];

interface GridSelectorProps {
  selected: string;
  onSelect: (id: string) => void;
}

export function GridSelector({ selected, onSelect }: GridSelectorProps) {
  return (
    <motion.div
      className={styles.gridSelector}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={staggerItem}>Choose your layout</motion.h2>
      
      <div className={styles.options}>
        {gridOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`${styles.option} ${selected === option.id ? styles.selected : ''}`}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            animate={selected === option.id ? "selected" : "animate"}
            onClick={() => onSelect(option.id)}
          >
            <div className={styles.preview}>
              {/* Grid preview visualization */}
              {Array.from({ length: option.rows * option.cols }).map((_, i) => (
                <div key={i} className={styles.cell} />
              ))}
            </div>
            <span>{option.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add grid selector with Framer Motion card animations"
git push origin main
```

---

#### 3.2 Mode & Timer Selector
**Files to create:**
```
src/components/booth/
├── ModeSelector.tsx    # Photo/Video mode + timer options
└── ModeSelector.module.css
```

**Task checklist:**
- [ ] Photo / Video toggle with Framer Motion layout animation
- [ ] Timer selection (3s, 5s, 10s) — pill buttons
- [ ] Multi-shot delay selection (2s, 3s, 10s)
- [ ] Selection animations with `layoutId` for sliding indicator

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add mode and timer selector with layout animations"
git push origin main
```

---

#### 3.3 Multi-shot Capture Logic
**Files to update:**
```
src/hooks/useCamera.ts  # Extend for multi-shot
src/components/booth/CameraView.tsx
```

**Task checklist:**
- [ ] Capture sequence (4 photos with delay)
- [ ] Show progress (1/4, 2/4, etc.) with animated counter
- [ ] Store all captures in state
- [ ] Countdown before each shot
- [ ] Brief pause between shots

**Git checkpoint:**
```bash
git add .
git commit -m "feat: implement multi-shot capture sequence"
git push origin main
```

---

#### 3.4 Capture Preview & Retake
**Files to create:**
```
src/components/booth/
├── CapturePreview.tsx  # Show captured photos in grid with stagger
└── CapturePreview.module.css
```

**Task checklist:**
- [ ] Display photos in selected layout
- [ ] Photos fade in with `staggerChildren`
- [ ] Tap individual photo to retake (multi-shot)
- [ ] Photo hover shows retake overlay with Framer Motion
- [ ] "Retake All" button
- [ ] "Continue" button

**CapturePreview.tsx:**
```tsx
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { staggerContainer, staggerItem, buttonVariants } from '@/lib/motion';
import styles from './CapturePreview.module.css';

interface CapturePreviewProps {
  photos: string[];
  gridType: string;
  onRetake: (index?: number) => void;
  onContinue: () => void;
}

export function CapturePreview({ photos, gridType, onRetake, onContinue }: CapturePreviewProps) {
  return (
    <div className={styles.preview}>
      <motion.div
        className={`${styles.grid} ${styles[gridType]}`}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={styles.photoWrapper}
            variants={staggerItem}
            whileHover={{ scale: 1.02 }}
          >
            <img src={photo} alt={`Capture ${index + 1}`} />
            <motion.button
              className={styles.retakeOverlay}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              onClick={() => onRetake(index)}
            >
              <RefreshCw size={24} />
              <span>Retake</span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
      
      <div className={styles.actions}>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => onRetake()}
        >
          Retake All
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={onContinue}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add capture preview with staggered animations and retake"
git push origin main
```

---

#### 3.5 Booth Context & Wizard Flow
**Files to create:**
```
src/context/
└── BoothContext.tsx    # Wizard state (step, grid, photos, settings)

src/components/booth/
├── BoothWizard.tsx     # Step controller with direction-aware transitions
└── BoothWizard.module.css
```

**Task checklist:**
- [ ] Create BoothContext for wizard state
- [ ] Track current step and direction
- [ ] Store selected grid, mode, timer, captures
- [ ] Navigation (next, back) with direction tracking
- [ ] AnimatePresence with custom direction prop
- [ ] Step forward: slide from right to left
- [ ] Step backward: slide from left to right
- [ ] Progress indicator integration

**BoothWizard.tsx with direction-aware transitions:**
```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stepVariants } from '@/lib/motion';
import { useBooth } from '@/context/BoothContext';
import { ProgressIndicator } from '@/components/common';
import { GridSelector, ModeSelector, CameraView, CapturePreview } from './';
import styles from './BoothWizard.module.css';

const steps = ['grid', 'mode', 'capture', 'preview', 'frames', 'filters', 'timestamp', 'final'];

export function BoothWizard() {
  const { state, dispatch } = useBooth();
  const [direction, setDirection] = useState(0);
  
  const currentStepIndex = steps.indexOf(state.currentStep);
  
  const goNext = () => {
    setDirection(1);
    dispatch({ type: 'NEXT_STEP' });
  };
  
  const goBack = () => {
    setDirection(-1);
    dispatch({ type: 'PREV_STEP' });
  };
  
  const renderStep = () => {
    switch (state.currentStep) {
      case 'grid':
        return <GridSelector selected={state.grid} onSelect={(grid) => dispatch({ type: 'SET_GRID', grid })} />;
      case 'mode':
        return <ModeSelector />;
      case 'capture':
        return <CameraView onCapture={() => {}} />;
      case 'preview':
        return <CapturePreview photos={state.photos} gridType={state.grid} onRetake={() => {}} onContinue={goNext} />;
      // ... more steps
      default:
        return null;
    }
  };
  
  return (
    <div className={styles.wizard}>
      <ProgressIndicator 
        currentStep={currentStepIndex} 
        totalSteps={steps.length} 
      />
      
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={state.currentStep}
          custom={direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={styles.stepContent}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      
      <div className={styles.navigation}>
        {currentStepIndex > 0 && (
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={goBack}
          >
            Back
          </motion.button>
        )}
        {currentStepIndex < steps.length - 1 && (
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={goNext}
          >
            Next
          </motion.button>
        )}
      </div>
    </div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add BoothContext and wizard with direction-aware step transitions"
git push origin main
```

---

#### 3.6 Integrate Booth Page
**Files to update:**
```
src/pages/BoothPage.tsx
```

**Task checklist:**
- [ ] Wrap with BoothProvider
- [ ] Add BoothWizard as main content
- [ ] Add navigation header
- [ ] Test complete flow through all implemented steps

**Git checkpoint:**
```bash
git add .
git commit -m "feat: integrate booth components into BoothPage"
git push origin main
```

---

## Phase 4: Filters & Effects (Week 4)

### Goals
- CSS filter presets
- Real-time preview
- Fun effects
- Filter selector UI with animations

### Tasks

#### 4.1 Filter Presets
**Files to create/update:**
```
src/styles/filters.css  # 12 filter preset classes
src/utils/filters.ts    # Filter definitions (name, class, CSS value)
```

**Task checklist:**
- [ ] Define 12 filter presets in CSS
- [ ] Create TypeScript filter definitions with metadata
- [ ] Export filter list for selector UI

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add 12 CSS filter presets"
git push origin main
```

---

#### 4.2 Filter Selector UI
**Files to create:**
```
src/components/booth/
├── FilterSelector.tsx  # Grid/carousel of filter thumbnails
└── FilterSelector.module.css
```

**Task checklist:**
- [ ] Thumbnail preview for each filter
- [ ] Thumbnail `whileHover`: scale(1.05)
- [ ] Selected state with `thumbnailVariants`
- [ ] Grid view option
- [ ] Carousel view option with drag
- [ ] Real-time preview on main image

**FilterSelector.tsx:**
```tsx
import { motion } from 'framer-motion';
import { staggerContainer, thumbnailVariants } from '@/lib/motion';
import { filters } from '@/utils/filters';
import styles from './FilterSelector.module.css';

interface FilterSelectorProps {
  selected: string;
  onSelect: (filterId: string) => void;
  previewImage: string;
}

export function FilterSelector({ selected, onSelect, previewImage }: FilterSelectorProps) {
  return (
    <div className={styles.filterSelector}>
      <div className={styles.preview}>
        <img 
          src={previewImage} 
          alt="Preview" 
          className={styles[selected] || ''} 
        />
      </div>
      
      <motion.div
        className={styles.filters}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            className={`${styles.filterThumb} ${selected === filter.id ? styles.selected : ''}`}
            variants={thumbnailVariants}
            whileHover="hover"
            whileTap="tap"
            animate={selected === filter.id ? "selected" : "animate"}
            onClick={() => onSelect(filter.id)}
          >
            <img 
              src={previewImage} 
              alt={filter.name}
              className={styles[filter.id]}
            />
            <span>{filter.name}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add filter selector with thumbnail hover animations"
git push origin main
```

---

#### 4.3 Fun Effects
**Files to create:**
```
src/utils/effects.ts    # Effect functions

src/components/booth/
├── EffectSelector.tsx
└── EffectSelector.module.css
```

**Task checklist:**
- [ ] Mirror effect implementation
- [ ] Fisheye effect implementation
- [ ] Pixelate effect implementation
- [ ] Glitch effect implementation
- [ ] Vignette effect implementation
- [ ] Effect selector UI with toggles
- [ ] Toggle animations with Framer Motion

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add fun effects with animated toggle selectors"
git push origin main
```

---

## Phase 5: Frames & Composition (Week 5)

### Goals
- Frame template assets
- Frame selector UI with draggable carousel
- Canvas composition
- Universal frame adaptation

### Tasks

#### 5.1 Frame Assets
**Files to create:**
```
src/assets/frames/
├── classic/
│   ├── polaroid.svg
│   ├── black-border.svg
│   └── white-border.svg
├── vintage/
│   └── ... (3 frames)
├── minimalist/
│   └── ... (3 frames)
├── fun/
│   └── ... (3 frames)
├── seasonal/
│   └── ... (3 frames)
├── elegant/
│   └── ... (3 frames)
└── index.ts            # Frame metadata & exports
```

**Task checklist:**
- [ ] Create/source 18 frame SVGs
- [ ] Ensure frames adapt to all grid layouts
- [ ] Export frame metadata (id, name, theme, path)

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add frame template assets (18 frames)"
git push origin main
```

---

#### 5.2 Frame Selector UI
**Files to create:**
```
src/components/booth/
├── FrameSelector.tsx
└── FrameSelector.module.css
```

**Task checklist:**
- [ ] Category tabs with Framer Motion `layoutId` for sliding indicator
- [ ] Grid view option
- [ ] Carousel view with drag constraints and momentum
- [ ] Thumbnail preview with frame applied
- [ ] Hover: scale(1.05) with `thumbnailVariants`
- [ ] Selection state

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add frame selector with draggable carousel"
git push origin main
```

---

#### 5.3 Canvas Composition
**Files to update:**
```
src/utils/canvas.ts     # Add composition functions
```

**Task checklist:**
- [ ] Composite photo(s) into selected layout
- [ ] Apply frame overlay
- [ ] Apply filter
- [ ] Apply effects
- [ ] Export final image as PNG

**Git checkpoint:**
```bash
git add .
git commit -m "feat: implement canvas composition"
git push origin main
```

---

#### 5.4 Extend Booth Wizard
**Files to update:**
```
src/components/booth/BoothWizard.tsx
src/context/BoothContext.tsx
```

**Task checklist:**
- [ ] Add Step 5: FrameSelector to wizard
- [ ] Add Step 6: FilterSelector + EffectSelector
- [ ] Update BoothContext to store selections
- [ ] Wire up real-time preview
- [ ] Test complete flow

**Git checkpoint:**
```bash
git add .
git commit -m "feat: integrate frame and filter selection into wizard"
git push origin main
```

---

## Phase 6: Polish & Extras (Week 6)

### Goals
- Date/time stamp
- Gallery with animations
- Download functionality
- QR code generation
- Settings persistence
- Error handling

### Tasks

#### 6.1 Date/Time Stamp
**Files to create:**
```
src/components/booth/
├── TimestampConfig.tsx
└── TimestampConfig.module.css

src/utils/timestamp.ts
```

**Task checklist:**
- [ ] Toggle on/off with Framer Motion layout animation
- [ ] Position selector (6 positions)
- [ ] Format selector (4 formats)
- [ ] Render on canvas

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add date/time stamp feature"
git push origin main
```

---

#### 6.2 Final Preview
**Files to create:**
```
src/components/booth/
├── FinalPreview.tsx
└── FinalPreview.module.css
```

**Task checklist:**
- [ ] Show final composed image with fade in
- [ ] "Edit" button to go back
- [ ] "Save to Gallery" button
- [ ] Success animation with `checkmarkVariants`

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add final preview step"
git push origin main
```

---

#### 6.3 Gallery Storage
**Files to create:**
```
src/hooks/useGallery.ts
src/utils/storage.ts
```

**Task checklist:**
- [ ] Save capture to localStorage
- [ ] Load gallery items
- [ ] Delete individual item
- [ ] Clear all
- [ ] Enforce 10-item limit
- [ ] Auto-delete oldest option

**Git checkpoint:**
```bash
git add .
git commit -m "feat: implement gallery storage"
git push origin main
```

---

#### 6.4 Gallery Page
**Files to update/create:**
```
src/pages/GalleryPage.tsx

src/components/gallery/
├── GalleryGrid.tsx
├── GalleryGrid.module.css
├── GalleryItem.tsx
├── GalleryItem.module.css
├── GalleryModal.tsx
├── GalleryModal.module.css
└── index.ts
```

**Task checklist:**
- [ ] Display saved captures in grid
- [ ] Staggered fade-in with `staggerContainer`
- [ ] Item hover with `galleryItemVariants`
- [ ] Tap to view full size (modal with `modalContentVariants`)
- [ ] Download button
- [ ] QR code button
- [ ] Delete with `AnimatePresence` exit animation
- [ ] Clear all with confirmation
- [ ] Empty state

**GalleryGrid.tsx:**
```tsx
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, galleryItemVariants } from '@/lib/motion';
import { GalleryItem } from './GalleryItem';
import styles from './GalleryGrid.module.css';

export function GalleryGrid({ items, onView, onDelete }) {
  return (
    <motion.div
      className={styles.grid}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={galleryItemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            layout
          >
            <GalleryItem 
              item={item}
              onView={() => onView(item)}
              onDelete={() => onDelete(item.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: build gallery page with staggered animations"
git push origin main
```

---

#### 6.5 Download Functionality
**Files to create:**
```
src/utils/download.ts
```

**Task checklist:**
- [ ] Download as PNG/MP4
- [ ] File naming convention
- [ ] Success feedback animation

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add download functionality"
git push origin main
```

---

#### 6.6 QR Code Generation
**Files to create:**
```
src/components/gallery/
├── QRCodeModal.tsx
└── QRCodeModal.module.css

src/utils/qrcode.ts
```

**Task checklist:**
- [ ] Upload image to cloud storage
- [ ] Generate QR code
- [ ] Display in modal with `modalContentVariants`
- [ ] Set expiration

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add QR code generation"
git push origin main
```

---

#### 6.7 Settings Modal
**Files to create:**
```
src/components/settings/
├── SettingsModal.tsx
└── SettingsModal.module.css

src/context/SettingsContext.tsx
```

**Task checklist:**
- [ ] Dark/light mode toggle
- [ ] Shutter sound toggle
- [ ] Auto-delete oldest toggle
- [ ] Default timer preference
- [ ] Reduced motion toggle
- [ ] Persist to localStorage
- [ ] Modal with `modalOverlayVariants` and `modalContentVariants`

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add settings modal with persistence"
git push origin main
```

---

#### 6.8 Error Handling & Toast
**Files to create:**
```
src/components/common/
├── Toast.tsx
└── Toast.module.css
```

**Task checklist:**
- [ ] Toast component with `toastVariants`
- [ ] Auto-dismiss with AnimatePresence
- [ ] Error shake animation
- [ ] Success checkmark animation

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add toast notifications with animations"
git push origin main
```

---

## Phase 7: Video Mode (Week 7)

### Goals
- Video recording
- Post-recording filters
- GIF export
- Video in gallery

### Tasks

#### 7.1 Video Recording Hook
**Files to create:**
```
src/hooks/useRecorder.ts
```

**Task checklist:**
- [ ] MediaRecorder setup
- [ ] Start/stop recording
- [ ] Duration limit
- [ ] Audio toggle
- [ ] Return video blob

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add useRecorder hook"
git push origin main
```

---

#### 7.2 Video Capture UI
**Files to update:**
```
src/components/booth/CameraView.tsx
```

**Task checklist:**
- [ ] Recording indicator with `recordingPulseVariants` (infinite pulse)
- [ ] Duration timer
- [ ] Stop button
- [ ] Auto-stop at limit

**Recording indicator with infinite animation:**
```tsx
<motion.div
  className={styles.recordingIndicator}
  variants={recordingPulseVariants}
  animate="animate"
>
  <div className={styles.redDot} />
  <span>{formatTime(duration)}</span>
</motion.div>
```

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add video recording UI with pulsing indicator"
git push origin main
```

---

#### 7.3 Video Preview
**Files to update:**
```
src/components/booth/CapturePreview.tsx
```

**Task checklist:**
- [ ] Video playback
- [ ] Play/pause with Framer Motion
- [ ] Retake option
- [ ] Continue to filters

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add video preview with playback"
git push origin main
```

---

#### 7.4 GIF Export
**Files to create:**
```
src/utils/gif.ts
```

**Task checklist:**
- [ ] Extract frames from video
- [ ] Generate GIF
- [ ] Add GIF export toggle
- [ ] Loading indicator with Framer Motion

**Git checkpoint:**
```bash
git add .
git commit -m "feat: add GIF export"
git push origin main
```

---

#### 7.5 Integrate Video Mode
**Files to update:**
```
src/components/booth/BoothWizard.tsx
src/context/BoothContext.tsx
```

**Task checklist:**
- [ ] Handle video mode in wizard
- [ ] Store video blob
- [ ] Gallery support for videos
- [ ] Test complete video flow

**Git checkpoint:**
```bash
git add .
git commit -m "feat: integrate video mode into wizard"
git push origin main
```

---

## Phase 8: Final Polish (Week 8)

### Goals
- Complete landing page polish
- Responsive testing
- Performance optimization
- Accessibility (reduced motion)
- Cross-browser testing
- Documentation
- Deploy

### Tasks

#### 8.1-8.5 Polish & Testing
(See original build plan for detailed checklist)

**Key Framer Motion considerations:**
- [ ] Test all animations with reduced motion enabled
- [ ] Ensure `useReducedMotion` hook is respected throughout
- [ ] Check animation performance on lower-end devices
- [ ] Verify AnimatePresence exit animations work correctly
- [ ] Test drag gestures on mobile

**Git checkpoint:**
```bash
git add .
git commit -m "feat: polish animations and add reduced motion support"
git push origin main
```

---

#### 8.6 End-to-End Testing

**Animation-specific checks:**
- [ ] Page transitions animate correctly between all routes
- [ ] Wizard step transitions respect direction
- [ ] All whileHover/whileTap animations work
- [ ] Staggered animations have correct timing
- [ ] Modal animations (open/close) are smooth
- [ ] Countdown spring physics feel satisfying
- [ ] Capture flash timing is correct
- [ ] Gallery item exit animations work
- [ ] Toast notifications animate in/out
- [ ] Draggable carousels have momentum
- [ ] Theme toggle animation is smooth
- [ ] Reduced motion disables all animations

**Git checkpoint:**
```bash
git add .
git commit -m "test: complete end-to-end testing"
git push origin main
```

---

#### 8.7 Documentation
**Files to create:**
```
README.md
```

**Include:**
- [ ] Framer Motion animation system explanation
- [ ] GIFs/videos showcasing animations
- [ ] Motion configuration documentation

**Git checkpoint:**
```bash
git add .
git commit -m "docs: add README with animation documentation"
git push origin main
```

---

#### 8.8 Deploy
```bash
npm install -D gh-pages
npm run build
npm run deploy
```

**Git checkpoint:**
```bash
git add .
git commit -m "chore: deploy to GitHub Pages"
git push origin main
```

---

## Summary

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| 1 | Week 1 | Design system, Framer Motion config, landing page with staggered animations, page transitions |
| 2 | Week 2 | Camera access, countdown with spring physics, capture flash with keyframes |
| 3 | Week 3 | Grid layouts, direction-aware wizard transitions, staggered preview |
| 4 | Week 4 | 12 filters, 5 effects, thumbnail hover animations |
| 5 | Week 5 | 18 frames, draggable carousel with momentum |
| 6 | Week 6 | Gallery with AnimatePresence, modals with spring physics, toasts |
| 7 | Week 7 | Video recording with infinite pulse animation, GIF export |
| 8 | Week 8 | Reduced motion support, testing, documentation, deploy |

---

## Framer Motion Quick Reference

| Animation | Variant/Config | When |
|-----------|---------------|------|
| Page enter/exit | `pageVariants` | Route change |
| Step forward/back | `stepVariants` with `custom={direction}` | Wizard navigation |
| Button hover/tap | `buttonVariants` | All buttons |
| Card hover/tap | `cardVariants` | All cards |
| List stagger | `staggerContainer` + `staggerItem` | Lists, grids |
| Modal open/close | `modalOverlayVariants` + `modalContentVariants` | All modals |
| Countdown | `countdownVariants` | Timer countdown |
| Capture flash | `flashVariants` | Photo capture |
| Gallery items | `galleryItemVariants` | Gallery grid |
| Thumbnails | `thumbnailVariants` | Filter/frame selectors |
| Toast | `toastVariants` | Notifications |
| Scroll reveal | `scrollRevealVariants` with `whileInView` | Landing sections |
| Recording pulse | `recordingPulseVariants` | Video recording |
| Error shake | `errorShakeVariants` | Error states |
| Success check | `checkmarkVariants` | Success states |
| Draggable | `drag="x"` + `dragConstraints` + `dragElastic` | Carousels |

---

## Git Commit Convention

Use conventional commits:
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation
- `style:` — Formatting (no code change)
- `refactor:` — Code restructure
- `perf:` — Performance improvement
- `a11y:` — Accessibility improvement
- `chore:` — Maintenance tasks

---

*End of Build Plan*

**Let's build Snaapy with amazing animations!** 🚀
