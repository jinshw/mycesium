import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

import router from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");

// createApp(App).mount("#app");
