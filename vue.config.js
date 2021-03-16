const sourceMap = process.env.NODE_ENV === "production"
const externals = require('./config/externals.js')
const cdn = require('./config/cdn.js')
const proxyConfig = require('./config/proxyConfig.js')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const merge = require('webpack-merge')
module.exports = merge({
    devServer: {
        open: false,
        host: "192.168.11.52",
        port: 8088, //8080,
        https: false,
        hotOnly: false,
        // proxy: "http://192.168.11.69:3001",
        proxy: proxyConfig,
        before: app => { }
    },
    // 基本路径
    publicPath: "",
    // 输出文件目录
    outputDir: "dist",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 页面配置
    pages: {
        index: {
            // entry for the pages
            entry: 'src/main.ts',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: '博客管理系统',
            // chunks to include on this pages, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            // 外链文件
            cdn: sourceMap ? cdn : false
        }
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: ''
    },
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md    
    configureWebpack: (config) => {
        config.performance = {
            hints:'warning',
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
        if (sourceMap) {
            // config.externals = externals
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
        }
    },
    chainWebpack: (config) => {
        config.plugins.delete('preload-index')
        config.plugins.delete('prefetch-index')
    },
    // // 生产环境是否生成 sourceMap 文件
    productionSourceMap: sourceMap,
    // // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            scss: {
                prependData: `@import '@/assets/sass/base.scss';`
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },
    // // use thread-loader for babel & TS in production build
    // // enabled by default if the machine has more than 1 cores
    // parallel: require("os").cpus().length > 1,
    // // PWA 插件相关配置
    // // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {},
    // webpack-dev-server 相关配置
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
})