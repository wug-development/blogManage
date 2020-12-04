<template>
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" @click="toPage('')"></div>
        <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        >
            <a-menu-item key="1" @click="toPage('marticle')">
                <a-icon type="pic-right" />
                <span>文章管理</span>
            </a-menu-item>
            <a-menu-item key="2" @click="toPage('mproject')">
                <a-icon type="pic-center" />
                <span>项目管理</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="apartment" />
                <span>类别管理</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="book" />
                <span>标签管理</span>
            </a-menu-item>
            <a-menu-item key="5">
                <a-icon type="message" />
                <span>留言管理</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="build" /><span>其它</span></span>
                <a-menu-item key="6">
                设置
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
    @Prop() private collapsed!: string;

    toPage (v: string) {
        this.$router.push({
            path: '/' + v
        })
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
    background-position-y: 2px;
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