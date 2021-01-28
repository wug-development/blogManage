import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "./utils/request"
import VueAxios from 'vue-axios'
import Uris from './utils/urls'
import Common from './utils/common'
import FnExtends from './utils/fn-extend.js'

import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'

import MyMenu from './components/my_menu'

Vue.config.productionTip = false
Vue.use(VueAxios, service)

Vue.use(AntDesign)

Vue.use(MyMenu)

Vue.prototype.uris = Uris
Vue.prototype._ = Common
Vue.prototype.docHeight = document.body.clientHeight

//扩展原生方法
FnExtends()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

