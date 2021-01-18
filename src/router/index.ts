import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routerMain: Array<RouteConfig> = [
    {
        path: '/',
        name: '首页',
        meta: {
            key: ''
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
    },
    {
        path: '/article',
        meta: {
            key: '1'
        },
        component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue'),
        children: [
            {
                path: '/',
                name: '文章管理',
                meta: {
                    key: '1'
                },
                component: () => import(/* webpackChunkName: "marticle" */ '../views/article/MArticle.vue')
            },
            {
                path: '/editarticle',
                name: '编辑文章',
                meta: {
                    key: '1-2',
                    hasParent: true,
                    parentName: '文章管理'
                },
                component: () => import(/* webpackChunkName: "articleedit" */ '../views/article/ArticleEdit.vue')
            }
        ]
    },
    {
        path: '/project',
        meta: {
            key: '2'
        },
        component: () => import('../views/Project.vue'),
        children: [
            {
                path: '/',
                name: '项目管理',
                meta: {
                    key: '2'
                },
                component: () => import('../views/project/MProject.vue')
            },
            {
                path: '/editproject',
                name: '编辑项目',
                meta: {
                    key: '2',
                    hasParent: true,
                    parentName: '项目管理'
                },
                component: () => import('../views/project/ProjectEdit.vue')
            }
        ]
    },
    {
        path: '/mtype',
        name: '管理类型',
        meta: {
            key: '3'
        },
        component: () => import('../views/MType.vue')
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
        path: '/comment',
        meta: {
            key: '5'
        },
        component: () => import('../views/Comment.vue'),
        children: [
            {
                path: '/',
                name: '管理留言',
                meta: {
                    key: '5',
                    hasParent: true
                },
                component: () => import('../views/message/MComment.vue'),
            },
            {
                path: '/commentinfo',
                name: '留言详情',
                meta: {
                    key: '5',
                    hasParent: true,
                    parentName: '管理留言'
                },
                component: () => import('../views/message/CommentInfo.vue')
            }
        ]
    },
]

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "layout" */ '../views/Layout.vue'),
        children: routerMain
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
            return { x: 0, y: 0 }
        }
    }
})
let routeList: any = []
const getRouter = function(obj: any, name?: string) {
    if (obj.meta && obj.meta.hasParent) {
        getRouter(obj.parent, obj.meta.parentName)
    }
    routeList.push({name: obj.name || name, path: obj.path})
}

router.beforeEach((to, from, next) => {
    // console.log(to)
    // console.log(from)
    if (to.meta && to.meta.hasParent && !to.meta.parentName) {
        routeList.push({name: to.name, path: to.path})
    } else {
        if (to.meta && to.meta.hasParent) {
            routeList.push({name: to.name, path: to.path})
            // getRouter(to.matched[to.matched.length - 1])
        } else {
            routeList = []
            routeList.push({name: to.name, path: to.path})
        }
    }
    to.meta.routeList = routeList
    console.log(routeList)
    next()
})

export default router
