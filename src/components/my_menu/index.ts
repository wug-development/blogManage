import MyMenu from './MyMenu.vue'

const Menu = {
    install: function (Vue: any) {
        Vue.component('my-menu', MyMenu)
    }
}

export default Menu