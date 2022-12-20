import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "aos/dist/aos.css";
import i18n from "./config/i18n";

const app = createApp(App);

app.use(i18n);

app.mount("#app");
