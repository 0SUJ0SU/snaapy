import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { buttonVariants } from '@/lib/motion';
import styles from './Button.module.css';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, disabled, onClick, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${className || ''}`}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover={disabled ? undefined : "hover"}
        whileTap={disabled ? undefined : "tap"}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
