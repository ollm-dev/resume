
import React, { useState, useEffect } from 'react';
import { useLocale } from '../i18n/i18n';
import LanguageToggle from './LanguageToggle';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-lg bg-white/80 dark:bg-black/50 shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold tracking-tight"
          >
            {t('name')}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center space-x-6"
          >
            <a href="#about" className="link-underline text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
              {t('nav.about')}
            </a>
            <a href="#education" className="link-underline text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
              {t('nav.education')}
            </a>
            <a href="#skills" className="link-underline text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
              {t('nav.skills')}
            </a>
            <a href="#projects" className="link-underline text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
              {t('nav.projects')}
            </a>
          </motion.div>
        </div>

        <div className="flex items-center space-x-3">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            href={`mailto:${t('email')}`}
            className="flex items-center gap-1 text-sm font-medium py-2 px-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 border border-primary/20"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">{t('contact')}</span>
          </motion.a>
          
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            href="#"
            className="flex items-center gap-1 text-sm font-medium py-2 px-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
          >
            <Download size={16} />
            <span className="hidden sm:inline">{t('download')}</span>
          </motion.a>
          
          <LanguageToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
