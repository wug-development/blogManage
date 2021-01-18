<template>
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" @click="toPage('')"></div>
        <a-menu :default-selected-keys="defaultSelKey" :default-open-keys="defaultOpenKey" mode="inline" theme="dark" :inline-collapsed="collapsed">
            <template v-for="(item, i) in menuList">
                <template v-if="item.children">
                    <a-sub-menu :key="item.key">
                        <span slot="title"><a-icon :type="item.icon" /><span>{{item.name}}</span></span>
                        <a-menu-item v-for="(sub, j) in item.children" :key="sub.key">{{sub.name}}</a-menu-item>
                    </a-sub-menu>
                </template>
                <template v-else>
                    <a-menu-item :key="item.key" @click="toPage(item.path)">
                        <a-icon :type="item.icon" />
                        <span>{{item.name}}</span>
                    </a-menu-item>
                </template>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
@Component
export default class Layout extends Vue {
    @Prop() private collapsed: boolean = false;
    @Provide() defaultSelKey: any = [];
    @Provide() defaultOpenKey: any = [];
    @Provide() menuList: any;

    toPage (v: string) {
        let path = this.$route
        if (path.path.slice(1) !== v) {
            this.$router.push({
                path: '/' + v
            })
        }
    }

    beforeMount () {
        let path = this.$route
        if (path.matched.length > 1) {
            this.defaultSelKey = [path.meta.key]
        }
    }

    created () {
        this.menuList = [{
            name: '文章管理',
            key: '1',
            icon: 'pic-right',
            path: 'article'
        }, {
            name: '项目管理',
            key: '2',
            icon: 'pic-center',
            path: 'project'
        }, {
            name: '类型管理',
            key: '3',
            icon: 'apartment',
            path: 'mtype'
        }, {
            name: '标签管理',
            key: '4',
            icon: 'book',
            path: 'mlabel'
        }, {
            name: '留言管理',
            key: '5',
            icon: 'message',
            path: 'comment'
        }, {
            name: '其它',
            key: '6',
            icon: 'build',
            path: '',
            children: [{
                name: '设置',
                key: '6-1',
                icon: '',
                path: 'set',
            }]
        }]
    }
}
</script>

<style lang="scss">
.logo {
	height: 32px;
    line-height: 32px;
    text-align: center;
	margin: 16px;
    background: url('~@/assets/images/blog-logo.png') no-repeat center;
    background-position-y: 4px;
    background-size: 112px auto;
    cursor: pointer;
}
.ant-layout-sider-collapsed{
    .logo{
        background: url('~@/assets/images/blog-logo-cur.png') no-repeat center;
        background-position-y: 5px;
        background-size: 28px auto;
    }
}
</style>