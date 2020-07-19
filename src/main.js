import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.scss'
import './validate.js'


Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
