import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const initializeI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: require('../locales/en.json'),
        },
        ua: {
          translation: require('../locales/ua.json'),
        },
        pl: {
          translation: require('../locales/pl.json'),
        },
      },
      fallbackLng: 'en',
      defaultNS: 'translation',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false,
      },
    });
};
