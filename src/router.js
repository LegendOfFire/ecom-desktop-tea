import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './components/Start.vue'
import Login from './components/login/Login.vue'
import Settings from './components/login/Settings.vue'
import Navigation from './components/navigation/Navigation.vue'
import Functions from './components/funtions/Functions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/functions',
      name: 'functions',
      component: Functions
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
