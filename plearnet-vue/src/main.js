import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('token');
  if (to.meta.requiresAuth) {
    if (isLogin) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})


createApp(App).use(router).mount('#app')


