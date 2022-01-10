import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/throttleAntiShake',
    name: 'throttleAntiShake',
    component: () => import('../views/throttleAntiShake/throttleAntiShake.vue')
  },
  {
    path: '/waterfall',
    name: 'waterfall',
    component: () => import('../views/waterfall/waterfall.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/button/button.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/input/input.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
