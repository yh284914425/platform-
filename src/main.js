import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/style/common.css";
import {
  Message
} from "element-ui";
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$msg = Message
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')