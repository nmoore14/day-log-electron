import Vue from "vue";
import VueFire from "vuefire";

import App from "./App.vue";
import router from "./router";

Vue.use(VueFire);

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
