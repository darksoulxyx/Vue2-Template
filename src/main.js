import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import NavBar from './components/NavBar'
Vue.config.productionTip = false
Vue.component('nav-bar',NavBar)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
