
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedTitle from './AnimatedTitle';

interface ResumeSectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ id, title, icon, children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="py-16 md:py-24 relative"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className="mr-4 text-blue-500"
          >
            {icon}
          </motion.div>
          <AnimatedTitle 
            title={title} 
            className="text-3xl md:text-4xl font-bold text-gradient" 
          />
        </div>
        
        <div className="space-y-8">
          {children}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;
