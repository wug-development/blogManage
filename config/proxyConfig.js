module.exports = {
    // 设置代理
    // proxy all requests starting with /api to jsonplaceholder
    "/api": {
        target: "http://192.168.11.52:4000",
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
            "^/api": ""
        }
    }
}