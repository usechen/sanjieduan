import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Recommend from './pages/Recommend.vue'
import Rank from './pages/Rank.vue'
import Search from './pages/Search.vue'
import Singer from './pages/Singer/Singer.vue'

import Detail from './pages/Detail/Detail.vue'

const router = new Router({
   routes: [
      {
         path: '/recommend', component: Recommend
      },
      {
         path: '/rank', component: Rank
      },
      {
         path: '/search', component: Search
      },
      {
         path: '/singer', component: Singer, children: [{ path: ':id', component: Detail}]
      },
      {
         path: '/', redirect : '/recommend'
      }
   ]
})

export default router
