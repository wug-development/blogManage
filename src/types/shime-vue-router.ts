declare namespace VueRouter {
    //vue路由meta信息
    interface Meta {
        //标题
        title: string
        //是否保存组件激活状态
        keepAlive?: boolean
        //是否必须接受权限验证
        requiresAuth?: boolean
        //路由附带参数
        paramName?: string
    }
}