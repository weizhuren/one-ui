import Vue from 'vue'
import App from './App.vue'
import OneUI from '../packages'
Vue.config.productionTip = false
Vue.use(OneUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
