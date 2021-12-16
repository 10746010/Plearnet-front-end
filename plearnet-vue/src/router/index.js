import { createRouter, createWebHistory } from 'vue-router'

import PageIndexHeader from '../views/PageIndexHeader.vue'
import PageIndex from '../views/PageIndex.vue'
import PageHeader from '../views/PageHeader.vue'
import PageHomeSwap from '../components/PageHomeSwap.vue'
import PageHomeSavor from '../components/PageHomeSavor.vue'
import PageHomeExam from '../components/PageHomeExam.vue'
import PageInfo from '../components/PageInfo.vue'
import PageChangePassword from '../components/PageChangePassword.vue'
import PageChangeInfo from '../components/PageChangeInfo.vue'
import PageHistory from '../components/PageHistory.vue'
import PageLike from '../components/PageLike.vue'
import PageUpload from '../components/PageUpload.vue'
import PageWish from '../components/PageWish.vue'
import PageUploadNote from '../components/PageUploadNote.vue'
import PageSwap from '../components/PageSwap.vue'
import PageSwapContent from '../components/PageSwapContent.vue'
import PageSavor from '../components/PageSavor.vue'
import PageExam from '../components/PageExam.vue'
import PageLogin from '../components/PageLogin.vue'
import PageRegister from '../components/PageRegister.vue'
import PageNoteContent from '../components/PageNoteContent.vue'
import PageSearch from '../components/PageSearch.vue'




// import Main from '../views/Main.vue'
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'
// import Like from '../components/Like.vue'
// import History from '../components/History.vue'
// import Self from '../components/Self.vue'
// import Paint from '../components/Paint.vue'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
// import Wish from '../components/Wish.vue'
// import Update from '../components/Update.vue'
// import Atricle from '../views/Atricle.vue'
// import Plearnet from '../views/Plearnet.vue'
// import UploadHistory from '../components/UploadHistory.vue'
// import Test from '../components/Test.vue'

import AccountBackground from '../components/AccountBackground.vue'
// import AtricleBox from '../components/AtricleBox.vue'
// import AtricleItem from '../components/AtricleItem.vue'

/*
const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main,
    // Main畫面底下有Home 或著到使用者
    children: [      
      {
        path: '/update',
        component: Update,
      },
      {
        path: '/:type/:forum',
        component: Plearnet,
      },
      // {
      //   path: '/academic/:forum',
      //   component: Plearnet,
      // },
      {
        path: '/:type/:forum/:id',
        component: Atricle,
      },
      {
        path: '/user/',
        component: User,
        meta: {
          requiresAuth: true
        },
        // 使用者底下有like,history...等等router
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
          {
            path: 'upload-history',
            component: UploadHistory,
            meta: {
              requiresAuth: true
            },
          },
        ]
      },
    ],
  },
  {
    path: '/',
    name:'Home',
    component: Home,
  },
  {
    path: '/login',
    component: AccountBackground,
    children: [
      {
        path: '',
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
    path: '/test/',
    name: 'Test',
    component: Test,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
  },
    // path: '/',
    // name: 'App',
    // component: App,
    // App畫面底下有Main 或著可以連到 Login、Register
    // children: [
    //   {
    //     path: '',
    //     component: Main,
    //   Main畫面底下有Home 或著到使用者
    // children: [
    //   {
    //     path: '',
    //     component: Home,
    //   },
    //   {
    //     path: '/update',
    //     component: Update,
    //   },
    //   {
    //     path: '/plearnet/:page',
    //     component: Plearnet,
    //   },
    //   {
    //     path: '/testa',
    //     component: AtricleBox,
    //   },
    //   {
    //     path: '/testb',
    //     component: AtricleItem,
    //   },
    //   {
    //     path: '/user/',
    //     component: User,
    //     meta: {
    //       requiresAuth: true
    //     },
    //       使用者底下有like,history...等等router
    //     children: [
    //       {
    //         path: 'like',
    //         component: Like,
    //         meta: {
    //           requiresAuth: true
    //         },
    //       },
    //       {
    //         path: 'self',
    //         component: Self,
    //         meta: {
    //           requiresAuth: true
    //         },
    //       },
    //       {
    //         path: 'history',
    //         component: History,
    //         meta: {
    //           requiresAuth: true
    //         },
    //       },
    //       {
    //         path: 'paint',
    //         component: Paint,
    //         meta: {
    //           requiresAuth: true
    //         },
    //       },
    //       {
    //         path: 'wish',
    //         component: Wish,
    //         meta: {
    //           requiresAuth: true
    //         },
    //       },
    //     ]
    //   },
    // ],
    //     },
    //     {
    //       path: '/login/',
    //       name: 'Login',
    //       component: Login,
    //     },
    //     {
    //       path: '/register/',
    //       name: 'Register',
    //       component: Register,
    //     },
    //     {
    //       path: '/test/',
    //       name: 'Test',
    //       component: Test,
    //     },
    //   ]
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: "/"
    // },
]
*/

const routes = [
  {
    path: '/',
    component: PageIndex,
  },
  {
    path: '/',
    component: PageIndexHeader,
    children: [
      {
        path: '',
        component: AccountBackground,
        children: [
          {
            path: 'login',
            name: 'PageLogin',
            component: PageLogin,
          },
          {
            path: 'register',
            name: 'PageRegister',
            component: PageRegister,
          },
        ]
      },
    ]
  },

  {
    path: '/main/',
    component: PageHeader,
    children: [
      {
        path: '',
        component: PageHomeSavor,
      },
      {
        path: 'swap',
        component: PageHomeSwap,
      },
      {
        path: 'exam',
        component: PageHomeExam,
      },
      {
        path: 'info',
        component: PageInfo,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'changepassword',
        component: PageChangePassword,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'history',
        component: PageHistory,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'like',
        component: PageLike,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'upload',
        component: PageUpload,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'wish',
        component: PageWish,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'uploadnote',
        component: PageUploadNote,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'changeinfo',
        component: PageChangeInfo,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'pageswap',
        component: PageSwap,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'pageswapcontent',
        component: PageSwapContent,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'pagesavor',
        component: PageSavor,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: ':id',
        component: PageNoteContent,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'pageexam',
        component: PageExam,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'search/:keyword',
        component: PageSearch,
        meta: {
          requiresAuth: true
        },
      },

    ]
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: "/"
  // },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
