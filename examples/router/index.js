import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页' },
    component: Home
  },
  {
    path: '/throttleAntiShake',
    name: 'throttleAntiShake',
    meta: { title: '节流防抖滚动条' },
    component: () => import('../views/throttleAntiShake/throttleAntiShake.vue')
  },
  {
    path: '/waterfall',
    name: 'waterfall',
    meta: { title: '瀑布流' },
    component: () => import('../views/waterfall/waterfall.vue')
  },
  {
    path: '/button',
    name: 'button',
    meta: { title: '按钮' },
    component: () => import('../views/button/button.vue')
  },
  {
    path: '/input',
    name: 'input',
    meta: { title: '输入框' },
    component: () => import('../views/input/input.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const { title } = to.meta
  if (title) document.title = title
  next()
})

export default router
