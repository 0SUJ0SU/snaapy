import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cardVariants } from '@/lib/motion';
import styles from './Card.module.css';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  selected?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, selected, className, onClick, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`${styles.card} ${selected ? styles.selected : ''} ${className || ''}`}
        variants={cardVariants}
        initial="initial"
        animate={selected ? "selected" : "animate"}
        whileHover="hover"
        whileTap="tap"
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
