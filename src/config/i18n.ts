import { createI18n } from "vue-i18n";
import en from "../../public/locales/en.json";
import pl from "../../public/locales/pl.json";

const i18n = createI18n({
  //   legacy: false, // for composition api
  fallbackLocale: "pl",
  messages: {
    en,
    pl
  },
});

export default i18n;
