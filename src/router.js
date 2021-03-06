import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: function () {
        return import('./views/Welcome.vue')
      }
    },
    {
      path: '/Intro/1',
      name: 'i1',
      component: function () {
        return import('./views/Intro/1.vue')
      }
    }, 
    {
      path: '/Intro/2',
      name: 'i2',
      component: function () {
        return import('./views/Intro/2.vue')
      }
    }, 
    {
      path: '/Intro/3',
      name: 'i3',
      component: function () {
        return import('./views/Intro/3.vue')
      }
    },
    {
      path: '/Pourquoi-Changer/1',
      name: 'pc1',
      component: function () {
        return import('./views/Pourquoi/1.vue')
      }
    },
    {
      path: '/Pourquoi-Changer/2',
      name: 'pc2',
      component: function () {
        return import('./views/Pourquoi/2.vue')
      }
    },
    {
      path: '/Pourquoi-Changer/3',
      name: 'pc3',
      component: function () {
        return import('./views/Pourquoi/3.vue')
      }
    },
    {
      path: '/Pourquoi-Changer/4',
      name: 'pc4',
      component: function () {
        return import('./views/Pourquoi/4.vue')
      }
    },
    {
      path: '/Comment-Changer/1',
      name: 'cc1',
      component: function () {
        return import('./views/Comment/1.vue')
      }
    },
    {
      path: '/Comment-Changer/2',
      name: 'cc2',
      component: function () {
        return import('./views/Comment/2.vue')
      }
    },
    {
      path: '/Conclusion/1',
      name: 'c1',
      component: function () {
        return import('./views/Conclusion/1.vue')
      }
    },
    {
      path: '/Conclusion/2',
      name: 'c2',
      component: function () {
        return import('./views/Conclusion/2.vue')
      }
    }
  ]
})