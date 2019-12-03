import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Element from 'element-ui'
import './style/normalize.scss'
import './style/element-variables.scss'
import './style/index.scss'
import './permission.js'
Vue.use(Element)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
