import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import styles from './ThemeToggle.module.css';
import { transitions } from '@/lib/motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      className={styles.toggle}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 180 : 0,
          scale: [1, 0.8, 1]
        }}
        transition={transitions.spring}
      >
        {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
}
