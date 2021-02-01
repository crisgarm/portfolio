import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReacti18next } from "react-i18next";
import langES from "./locales/es/translation.json";
import langEN from "./locales/en/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReacti18next)
  .init({
    resources: {
      es: {
        lang: langES,
      },
      en: {
        lang: langEN,
      },
    },
    fallbackLng: "es",
    debug: true,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
