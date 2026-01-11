import { motion } from 'framer-motion';
import styles from './ProgressIndicator.module.css';
import { transitions } from '@/lib/motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  // Calculate percentage (1-based steps)
  // Example: Step 1 of 4 = 25%
  const progress = Math.min(Math.max(currentStep / totalSteps, 0), 1) * 100;

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.fill}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={transitions.slow}
      />
    </div>
  );
}
