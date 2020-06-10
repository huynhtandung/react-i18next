import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import vi from "./locales/vi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: en,
      },
      vi: {
        translations: vi,
      },
    },
    fallbackLng: ["vi", "en"],
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },
    ns: ["translations"],
    defaultNS: "translations",
    react: {
      wait: false,
    },
    returnObjects: true,
  });

export default i18n;
