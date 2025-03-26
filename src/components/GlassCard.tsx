
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'highlighted' | 'gradient' | 'bordered';
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className,
  delay = 0,
  variant = 'default'
}) => {
  const baseClasses = "backdrop-blur-md border shadow-lg p-6 rounded-2xl transition-all";
  
  const variantClasses = {
    default: "bg-white/10 dark:bg-black/20 border-white/20 dark:border-white/10",
    highlighted: "bg-blue-500/10 dark:bg-blue-900/20 border-blue-500/20 dark:border-blue-400/20",
    gradient: "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-white/20",
    bordered: "bg-white/5 dark:bg-black/10 border-2 border-blue-500/30"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        transition: { 
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        variant === 'gradient' && 'animate-shine bg-[size:200%]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
