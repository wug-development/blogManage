import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
        children: [
            {
                path: '/',
                name: '首页',
                meta: {
                    key: ''
                },
                component: () => import('../views/Index.vue')
            },
            {
                path: '/mproject',
                name: '项目管理',
                meta: {
                    key: '2'
                },
                component: () => import('../views/MProject.vue')
            },
            {
                path: '/editproject',
                name: '编辑项目',
                meta: {
                    key: '2'
                },
                component: () => import('../views/ProjectEdit.vue')
            },
            {
                path: '/marticle',
                name: '文章管理',
                meta: {
                    key: '1'
                },
                component: () => import('../views/MArticle.vue')
            },
            {
                path: '/editarticle',
                name: '编辑文章',
                meta: {
                    key: '1'
                },
                component: () => import('../views/ArticleEdit.vue')
            },
            {
                path: '/mlabel',
                name: '管理标签',
                meta: {
                    key: '4'
                },
                component: () => import('../views/MLabel.vue')
            },
            {
                path: '/mtype',
                name: '管理类型',
                meta: {
                    key: '3'
                },
                component: () => import('../views/MType.vue')
            }
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: () => import('../views/Login.vue')
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
