import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ko from "./ko.json";
import jp from "./jp.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ko",
        debug: false,

        resources: {
            ko: { translation: ko },
            ja: { translation: jp }
        }
    });

export default i18n;