import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/Intro/1',
      name: 'about',
      component: function () {
        return import('./views/Intro/1.vue')
      }
    },
    {
      path: '/Intro/2',
      name: 'about',
      component: function () {
        return import('./views/Intro/2.vue')
      }
    },
    {
      path: '/Intro/3',
      name: 'about',
      component: function () {
        return import('./views/Intro/3.vue')
      }
    },
    {
      path: '/Pourquoi-Changer/1',
      name: 'about',
      component: function () {
        return import('./views/Pourquoi/1.vue')
      }
    },
    {
      path: '/Pourquoi-Changer/2',
      name: 'about',
      component: function () {
        return import('./views/Pourquoi/2.vue')
      }
    },
    {
      path: '/Comment-Changer/1',
      name: 'about',
      component: function () {
        return import('./views/Comment/1.vue')
      }
    },
    {
      path: '/Comment-Changer/2',
      name: 'about',
      component: function () {
        return import('./views/Comment/2.vue')
      }
    },
  ]
})
