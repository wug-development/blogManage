import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: '首页',
        component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')
    },
    {
        path: '/login',
        name: '登录',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: (to, from, saveTop) => {
        if (saveTop) {
            return saveTop
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router
