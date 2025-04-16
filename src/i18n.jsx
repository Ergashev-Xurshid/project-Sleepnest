import i18n from 'i18next';
import {initReactI18next} from "react-i18next"
import laungageDetector from "i18next-browser-laungagedetector"
import uzTranslation from "../public/locales/uz.json"
import enTranslation from "../public/locales/en.json"
import ruTranslation from "../public/locales/ru.json"

i18n
.use(laungageDetector)
.use(initReactI18next)
.init({
  fallbackLing:"en",
  lng:"en",
  debug:true,
  resources:{
    uz:{translation:uzTranslation},
    uz:{translation:enTranslation},
    uz:{translation:ruTranslation},
  }
})

export default i18n