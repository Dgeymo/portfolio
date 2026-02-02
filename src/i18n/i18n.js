import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from "./locals/es.json";
import en from "./locals/en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources:{
            es: {translation: es},
            en: {translation: en}
        },
        interpolation: {escapeValue: false},
        detection: {
            order:["localStorage", "navigator", "htmlTag", "path", "subdomain"],
            caches:["localStorage"]
        }
    });

    export default i18n;