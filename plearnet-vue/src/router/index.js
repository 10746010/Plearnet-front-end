import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Home from '../views/Home'

const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
]

const router = reateRouter({
    // history: createWebHistory(perocess.env.BASE_URL),
    history: createWebHashHistory(perocess.env.BASE_URL),
    routes,
})

export default router