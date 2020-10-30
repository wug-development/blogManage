import Vue from 'vue'

//原生类型说明
declare var window: Window;
declare var document: Document;

//vue类型说明
declare module "vue/types/vue" {
    interface Vue {
        $http: Axios.AxiosFun
        loadEvent?: Vue
        sendEvent?: Vue
        broadEvent?: Vue
    }
}
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        //路由meta
        meta?: VueRouter.Meta,
        //路由params
        params?: Array<string>,
    }
}

//element-ui类型说明
// declare module "element-ui";

//qs类型说明
declare module "qs";

//axios类型说明
declare module 'axios';