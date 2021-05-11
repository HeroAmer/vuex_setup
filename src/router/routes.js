import Login from '../components/login.vue'
import Dashboard from '../components/dashboard.vue'
import Charts from '../components/charts.vue'
import Stepper from '../components/stepper.vue'
import Configurations from '../components/configurations.vue'
import Users from '../components/users.vue'

export default [
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