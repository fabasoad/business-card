import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";

import SupportedLocales from './scripts/SupportedLocales';

const params = new URLSearchParams(document.location.search);
const currentLocale = SupportedLocales.getOrDefault(params.get('locale'));
if (document.location.search) {
  window.history.replaceState(
    {}, document.title, document.location.origin + document.location.pathname + document.location.hash
  );
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: (process.env.NODE_ENV === 'development' ? '' : '/business-card') + '/locales/{{lng}}.json'
    },
    lng: currentLocale.code,
    fallbackLng: SupportedLocales.default().code,
    debug: process.env.NODE_ENV === 'development'
  });

export default currentLocale;
