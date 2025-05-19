// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from './locales/uz.json';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';


const Lng = localStorage.getItem("i18nextLng") || "en"


i18n
  .use(initReactI18next)
  .init({
    lng: Lng,
    fallbackLng: 'en',
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    }
  });

export default i18n;