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
        component: () => import(/* webpackChunkName: "main" */ '../views/Index.vue')
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
        component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
        children: [
            {
                path: '/',
                name: '项目管理',
                meta: {
                    key: '2'
                },
                component: () => import(/* webpackChunkName: "projectlist" */ '../views/project/MProject.vue')
            },
            {
                path: '/editproject',
                name: '编辑项目',
                meta: {
                    key: '2',
                    hasParent: true,
                    parentName: '项目管理'
                },
                component: () => import(/* webpackChunkName: "editproject" */ '../views/project/ProjectEdit.vue')
            }
        ]
    },
    {
        path: '/mtype',
        name: '管理类型',
        meta: {
            key: '3'
        },
        component: () => import(/* webpackChunkName: "mtype" */ '../views/MType.vue')
    },
    {
        path: '/mlabel',
        name: '管理标签',
        meta: {
            key: '4'
        },
        component: () => import(/* webpackChunkName: "mlabel" */ '../views/MLabel.vue')
    },
    {
        path: '/comment',
        meta: {
            key: '5'
        },
        component: () => import(/* webpackChunkName: "comment" */ '../views/Comment.vue'),
        children: [
            {
                path: '/',
                name: '管理留言',
                meta: {
                    key: '5',
                    hasParent: true
                },
                component: () => import(/* webpackChunkName: "commentlist" */ '../views/message/MComment.vue'),
            },
            {
                path: '/commentinfo',
                name: '留言详情',
                meta: {
                    key: '5',
                    hasParent: true,
                    parentName: '管理留言'
                },
                component: () => import(/* webpackChunkName: "commentinfo" */ '../views/message/CommentInfo.vue')
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
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
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
    if (routeList.length > 0) {
        var _i = routeList.findIndex((item: any) => item.path === to.path)
        if (_i > -1) {
            routeList.splice(_i + 1, routeList.length)
        } else if (to.meta && to.meta.hasParent && !to.meta.parentName) {
            routeList.push({name: to.name, path: to.path})
        } else {
            if (to.meta && to.meta.hasParent) {
                routeList.push({name: to.name, path: to.path})
            } else {
                routeList = []
                routeList.push({name: to.name, path: to.path})
            }
        }
    } else {
        routeList.push({name: to.name, path: to.path})
    }
    
    to.meta.routeList = routeList
    next()
})

export default router
