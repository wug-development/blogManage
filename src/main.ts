import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "./utils/request"
import VueAxios from 'vue-axios'
// import devproxy from '../vue.config'

import { Layout, Menu, Icon, Badge, Dropdown, message, Breadcrumb } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import MyMenu from './components/my_menu'

Vue.use(MyMenu)

Vue.config.productionTip = false
Vue.use(VueAxios, service)
Vue.use(Menu)
Vue.prototype.$message = message

Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Layout.Footer.name, Layout.Footer)
Vue.component(Icon.name, Icon)
Vue.component(Badge.name, Badge)
Vue.component(Dropdown.name, Dropdown)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)

Vue.prototype.api = '/api'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
