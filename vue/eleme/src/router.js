import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import HomePage from './views/homePage.vue'
import Login from './views/login.vue'
import Find from './views/find.vue'
import Order from './views/order.vue'

const router = new Router({
  routes: [
    {
      path: '/homepage',
      component: HomePage
    },
    {
      path:'/find',
      component: Find
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/',
      component : HomePage
    }
  ]
})


// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false
//   if (to.path == '/login' || to.path == '/register') {
//     next();
//   } else {
//     isLogin ? next() : next('/login');
//   }
// })


export default router
