
import React from 'react';
import { useLocale } from '../i18n/i18n';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLocale();

  const handleToggle = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="flex items-center justify-center px-4 py-2 rounded-full border border-white/20 backdrop-blur-md bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium"
    >
      <Globe size={16} className="mr-2" />
      {language === 'zh' ? t('lang.en') : t('lang.zh')}
    </motion.button>
  );
};

export default LanguageToggle;
