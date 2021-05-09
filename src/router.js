import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/dashboard'
import Login from './components/login'

Vue.use(VueRouter)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting,
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component:Dashboard
    },
    {
      path:'/login',
      name:'login',
      component: Login
    }
  ]
})
