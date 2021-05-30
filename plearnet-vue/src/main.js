import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// router.beforeEach((to) => {
//   const isLogin = localStorage.getItem('token') == 'ImLogin' ;
//   console.log(to)
//   console.log(isLogin)
//   console.log(to.matched[0].children[0].children[0].component.name)
//   console.log()
//   if (isLogin){

//     console.log('hi')
//     return('/')
//     return (to.matched[0].children[0].children[0].component.name)
//   } else {
//     if(to.meta.requiresAuth) {
//       if (isLogin) {
//         console.log('eee')

//       } else {
//         console.log('here')
        
//       }
//     }

//     console.log('no')
//   }

  // console.log(to.matched.filter(0))

  // if (to.name !== '/') {
  //   return { name: '/home'}
  // }
// })


createApp(App).use(router).mount('#app')


