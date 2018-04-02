import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/landing/landing'
import Profile from '@/views/profile/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
