import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// require styles
import "@/assets/css/tailwind.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
