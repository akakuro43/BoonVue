import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { bodyClass: 'page-index' },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: { bodyClass: 'page-about' },
      component: () => import( '../pages/About.vue')
    },
    {
      path: '/service',
      name: 'service',
      meta: { bodyClass: 'page-service' },
      component: () => import( '../pages/Service.vue')
    },
    {
      path: '/company',
      name: 'company',
      meta: { bodyClass: 'page-company' },
      component: () => import( '../pages/Company.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { bodyClass: 'page-contact' },
      component: () => import('../pages/Contact.vue')
    }
  ]
})
