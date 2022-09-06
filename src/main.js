import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 配置引入mintui所有组件
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

// 全局引入axios
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
