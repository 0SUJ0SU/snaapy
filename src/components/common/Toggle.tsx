import { motion } from 'framer-motion';
import styles from './Toggle.module.css';
import { transitions } from '@/lib/motion';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

export function Toggle({ isOn, onToggle }: ToggleProps) {
  return (
    <motion.div
      className={styles.toggle}
      data-ison={isOn}
      onClick={onToggle}
      layout
      transition={transitions.spring}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={styles.handle}
        layout
        transition={transitions.spring}
      />
    </motion.div>
  );
}
