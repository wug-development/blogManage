import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "./utils/request"
import VueAxios from 'vue-axios'
import Uris from './utils/urls'
import Common from './utils/common'
import FnExtends from './utils/fn-extend.js'
// import devproxy from '../vue.config'

import { Layout, Menu, Icon, Badge, Dropdown, message, Breadcrumb, Card, Button, Select, Upload, Checkbox, Pagination, Modal, Input } from 'ant-design-vue'
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
Vue.component(Card.name, Card)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Upload.name, Upload)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Pagination.name, Pagination)
Vue.component(Modal.name, Modal)
Vue.component(Input.name, Input)

Vue.prototype.api = '/api'
Vue.prototype.uris = Uris
Vue.prototype._ = Common

//扩展原生方法
FnExtends()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

