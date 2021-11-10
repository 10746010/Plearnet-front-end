import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

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


createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')


