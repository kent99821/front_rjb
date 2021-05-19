import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Detect from '../views/detect.vue'
import Draw from '../views/draw.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home/detect'
  },
  {
    path: '/home',
    redirct: 'home/detect',
    component: Home,
    children: [
      {
        path: '/home/detect',
        component: Detect
      },
      {
        path: '/home/draw',
        component: Draw
      }
    ]
  }


]

const router = new Router({
  routes
})

export default router
