import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store/store'
import routes from './router/routes'


Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
