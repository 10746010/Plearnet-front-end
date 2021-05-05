import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import User from '../views/User.vue'
import Like from '../views/Like.vue'
import History from '../views/History.vue'
import Self from '../components/Self.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
   {
    path: '/user/self',
    name: 'Self',
    component: Self
  },
  {
    path: '/user/like',
    name: 'Like',
    component: Like
  },
  {
    path: '/user/history',
    name: 'History',
    component: History
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
