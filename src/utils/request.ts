import axios from "axios";
import QS from 'qs';

/* 防止重复提交，利用axios的cancelToken */
let pending: any[] = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const CancelToken: any = axios.CancelToken;

const removePending: any = (config: any, f: any) => {
    // 获取请求的url
    const flagUrl = config.url;
    // 判断该请求是否在请求队列中
    if (pending.indexOf(flagUrl) !== -1) {
        // 如果在请求中，并存在f,f即axios提供的取消函数
        if (f) {
            f("取消重复请求"); // 执行取消操作
        } else {
            pending.splice(pending.indexOf(flagUrl), 1); // 把这条记录从数组中移除
        }
    } else {
        // 如果不存在在请求队列中，加入队列
        if (f) {
            pending.push(flagUrl);
        }
    }
};

// 创建axios实例
const service = axios.create({
    baseURL: "/api", // api的base_url
    timeout: 50000 // 请求超时时间
});

service.interceptors.request.use(config => {
    const token = localStorage.getItem('blogToken')
    // if (!config.neverCancel) {
    //     // 生成cancelToken
    //     config.cancelToken = new CancelToken((c: any) => {
    //         removePending(config, c);
    //     });
    // }
    if (token) {
        config.headers.common['token'] = token
    }
    return config
}, error => {
    return Promise.reject(error)
})


/* respone拦截器 */
service.interceptors.response.use(
    (response: any) => {
        // 移除队列中的该请求，注意这时候没有传第二个参数f
        removePending(response.config);
        // 获取返回数据，并处理。按自己业务需求修改。下面只是个demo
        if (response.status !== 200 || (response.data && response.data.code === 401)) {
            // return response
            if (response.status === 401 || (response.data && response.data.code === 401)) {
                if (location.hash === "/login") {
                    return response;
                } else {
                    location.href = "/login";
                }
            }
            return Promise.reject("error");
        } else {
            return response;
        }
    },
    (error: any) => {
        // 异常处理
        console.log(error);
        pending = [];
        if (error.message === "取消重复请求") {
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

/**  get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
// export function get(url: string, params: object) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//             params: params
//         }).then(res => {
//             resolve(res.data);
//         })
//         .catch(err => {
//             reject(err.data)
//         })
//     });
// }



// export function token() {
//     return localStorage.getItem('blogToken')
// }

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
// export function post(url: string, params: object) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, QS.stringify(params))
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 reject(err.data)
//             })
//     });
// }

export default service;