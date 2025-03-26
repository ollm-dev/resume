
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '../AnimatedTitle';
import AnimatedIcon from '../AnimatedIcon';
import { Mail, GraduationCap, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  t: (key: string) => string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-black bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-white select-none">甘</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <AnimatedTitle 
              title={t('name')} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter" 
            />
            <p className="text-xl md:text-2xl font-medium text-blue-200 mt-2">
              {t('intention')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm md:text-base"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Mail size={16} className="text-blue-400" />
              <span>{t('email')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <GraduationCap size={16} className="text-blue-400" />
              <span>{t('education')}</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <a 
              href="#about"
              className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-blue-500/20 text-blue-400 animate-bounce"
            >
              <ChevronDown />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
