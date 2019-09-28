import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Recommend from './views/Recommend'
import Singer from './views/Singer'
import Rank from './views/Rank'
import Search from './views/Search'
export default new Router({
  routes: [
    {path: '/recommend', component: Recommend},
    {path: '/singer', component: Singer},
    {path: '/rank', component: Rank },
    {path: '/search', component: Search},
    {path: '/', redirect: '/recommend'},
  ]
})
