import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Like from '../components/Like.vue'
import History from '../components/History.vue'
import Self from '../components/Self.vue'
import Paint from '../components/Paint.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import AccountInput from '../components/AccountInput.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [

      {
        path: '/',
        component: Home,
      }, {
        path: '/user/',
        component: User,
        children: [
          {
            path: 'like',
            component: Like
          },
          {
            path: 'self',
            component: Self,
          },
          {
            path: 'history',
            component: History
          },
          {
            path: 'paint',
            component: Paint
          }
        ]
      }
    ],
  },
  {    
    path: '/accountinput/',
    name: 'accountinput',
    component: AccountInput,
  },
  {
    path: '/login/',
    name: 'login',
    component: Login,
  },  
  {
    path: '/register/',
    name: 'register',
    component: Register,
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
