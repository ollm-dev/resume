
import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, delay = 0 }) => {
  return (
    <motion.div 
      className="mb-3 p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ 
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        transition: { duration: 0.2 }
      }}
    >
      <span className="font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBar;
