import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('token') == 'ImLogin';
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


