import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import {Button,Field} from 'vant/lib';
Vue.use(Button).use(Field)

import i7monthUi from '../packages'
Vue.use(i7monthUi, {
  components: ["lButton", "lInput", "lWaterfall"]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

