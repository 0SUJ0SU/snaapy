import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { PageTransition } from '@/components/common/PageTransition';
import { LandingPage, BoothPage, GalleryPage } from '@/pages';
import { ThemeToggle } from '@/components/common/ThemeToggle';

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
        <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 100 }}>
          <ThemeToggle />
        </div>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
