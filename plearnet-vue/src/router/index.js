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
import Wish from '../components/Wish.vue'
import Update from '../components/Update.vue'



import App from '../App.vue'



const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    // App畫面底下有Main 或著可以連到 Login、Register
    children: [
      {
        path: '/',
        component: Main,
        //   Main畫面底下有Home 或著到使用者
        children: [
          {
            path: '/',
            component: Home,
          },
          {
            path: '/update',
            component: Update,
          },
          {
            path: '/user/',
            component: User,
            meta: {
              requiresAuth: true
            },
            //   使用者底下有like,history...等等router
            children: [
              {
                path: 'like',
                component: Like,
                meta: {
                  requiresAuth: true
                },
              },
              {
                path: 'self',
                component: Self,
                meta: {
                  requiresAuth: true
                },
              },
              {
                path: 'history',
                component: History,
                meta: {
                  requiresAuth: true
                },
              },
              {
                path: 'paint',
                component: Paint,
                meta: {
                  requiresAuth: true
                },
              },
              {
                path: 'wish',
                component: Wish,
                meta: {
                  requiresAuth: true
                },
              },
            ]
          },
        ],
      },
      {
        path: '/login/',
        name: 'Login',
        component: Login,
      },
      {
        path: '/register/',
        name: 'Register',
        component: Register,
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
