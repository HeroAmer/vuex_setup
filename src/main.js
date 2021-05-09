import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import Login from './components/login.vue'
import Dashboard from './components/dashboard.vue'
import Charts from './components/charts.vue'
import Stepper from './components/stepper.vue'
import Configurations from './components/configurations.vue'
import Users from './components/users.vue'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);
Vue.use(VueRouter);


const routes = [
  {
    path : '/',
    name:'Login',
    component: Login
  },
  {
    path : '/login',
    name:'Login',
    component: Login
  },
  { 
    path : '/dashboard', 
    name:'Dashboard', 
    component: Dashboard,
    children: [
      {
        path: '/',
        component: Charts
      },
      {
        path: 'charts',
        component: Charts
      },
      {
        path: 'stepper',
        component: Stepper
      },
      {
        path: 'configurations',
        component: Configurations
      },
      {
        path: 'users',
        component: Users
      }
    ]
  
  },
];

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
