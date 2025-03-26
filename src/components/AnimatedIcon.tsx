
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  children: React.ReactNode;
  variant?: 'float' | 'pulse' | 'spin' | 'bounce';
  delay?: number;
}

const variants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
  spin: {
    rotate: [0, 360],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  bounce: {
    y: [0, -8, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  children, 
  variant = 'float',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        ...variants[variant],
      }}
      transition={{
        duration: 0.3,
        delay: delay * 0.1,
      }}
      className="inline-flex items-center justify-center text-primary"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIcon;
