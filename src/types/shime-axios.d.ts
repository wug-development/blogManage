declare namespace Axios {
    //返回错误对象信息
    export interface Error {
        code: number,
        msg: string,
    }

    //封装的Axios方法结构
    export interface AxiosFun {
        get: Function,
        post: Function,
        put: Function,
        patch: Function,
        delete: Function,
        token: Function,
        baseConfig: Function,
    }
}