import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './components/login.vue'
import Reg from './components/reg.vue'
const router = new Router({
   routes :[
      {
         path: '/login', component: Login
      },
      {
         path : '/reg',component : Reg
      }
   ]
})

export default router