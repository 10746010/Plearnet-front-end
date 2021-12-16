import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'


// console.log(Response)

router.beforeEach((to, from, next) => {
  const loginToken = localStorage.getItem('token');
  if (to.meta.requiresAuth) {
    if (loginToken) {
      next()
    } else {
      next({ name: 'PageLogin' })
    }
  } else {
    next()
  }
})


createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')


