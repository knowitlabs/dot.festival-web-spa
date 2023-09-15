import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../assets/locales/en/translations.json';
import deTranslation from '../assets/locales/de/translations.json';
import svTranslation from '../assets/locales/sv/translations.json';
import daTranslation from '../assets/locales/da/translations.json';
import fiTranslation from '../assets/locales/fi/translations.json';
import plTranslation from '../assets/locales/pl/translations.json';
import ukTranslation from '../assets/locales/uk/translations.json';
import noTranslation from '../assets/locales/no/translations.json';

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18next.use(LanguageDetector).init({
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: enTranslation
    },
    de: {
      translation: deTranslation
    },
    sv: {
      translation: svTranslation
    },
    da: {
      translation: daTranslation
    },
    fi: {
      translation: fiTranslation
    },
    pl: {
      translation: plTranslation
    },
    uk: {
      translation: ukTranslation
    },
    no: {
      translation: noTranslation
    }
  }
});

export default (lng: string | undefined | null) => {
  const i18nLanguage = i18next.language;

  return i18next.getFixedT(lng || i18nLanguage || systemLocale);
};
