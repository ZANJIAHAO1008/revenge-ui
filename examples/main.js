import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { zanLink } from '../lib/index.umd.min.js';
import '../lib/index.css'
Vue.use(zanLink)

new Vue({
  render: h => h(App),
}).$mount('#app')
