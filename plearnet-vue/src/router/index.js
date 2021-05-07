import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import User from '../views/User.vue'
import Like from '../components/Like.vue'
import History from '../components/History.vue'
import Self from '../components/Self.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/',
    name: 'User',
    component: User,
    children: [
      {
        path: 'self',
        component: Self
      },
      {
        path: 'like',
        component: Like
      },
      {
        path: 'history',
        component: History
      }
    ]
  },
  // {
  //   path: '/user/self',
  //   name: 'Self',
  //   component: Self
  // },
  // {
  //   path: '/user/like',
  //   name: 'Like',
  //   component: Like
  // },
  // {
  //   path: '/user/history',
  //   name: 'History',
  //   component: History
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
