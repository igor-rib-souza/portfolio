import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translations from '@/translations/translations';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translations,
    load: 'languageOnly',
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lng',
    },
    fallbackLng: 'en',
    supportedLngs: ['pt', 'en'],
    returnNull: false,
    interpolation: { escapeValue: false },
  });

export default i18n;
