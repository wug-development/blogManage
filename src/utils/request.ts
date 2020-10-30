import axios from "axios";

// 创建axios实例
const service = axios.create({
    baseURL: "/api", // api的base_url
    timeout: 50000 // 请求超时时间
});

export default service;