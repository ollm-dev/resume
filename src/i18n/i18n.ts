
import { create } from 'zustand';
import zhTranslations from './locales/zh';
import enTranslations from './locales/en';

type Language = 'zh' | 'en';

type Translations = {
  [key: string]: string;
};

type LocaleState = {
  language: Language;
  translations: Translations;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const defaultLanguage: Language = 'zh';

export const useLocale = create<LocaleState>((set, get) => ({
  language: defaultLanguage,
  translations: defaultLanguage === 'zh' ? zhTranslations : enTranslations,
  setLanguage: (language: Language) => {
    set({
      language,
      translations: language === 'zh' ? zhTranslations : enTranslations,
    });
  },
  t: (key: string) => {
    const { translations } = get();
    return translations[key] || key;
  },
}));
