<template>
    <div class="mproject-box">
        <div class="m-list-header">
            <div class="m-list-title">项目管理</div>
            <div class="m-list-search-body">
                <div class="m-list-search-box">
                    <input type="text" class="txt" placeholder="请输入项目名称" maxlength="50">
                    <div class="btn">搜索</div>
                    <a-button type="primary" icon="plus" class="btn-add" @click="toEdit('')">新增</a-button>
                </div>
            </div>
        </div>
        <div class="mproject-body">
            <ul class="mcard-list scrollbar">
                <li class="mcard-item" v-for="(item, i) in list" :key="i">
                    <div class="mcard-item-body">
                        <div class="pro-img"><img class="bimg" src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png" alt=""></div>
                        <div class="mcard-item-content">
                            <div class="mcard-title">系统管理</div>
                            <div class="mcard-other">那是一种内在的东西， 他们到达不了，也无法触及的</div>
                            <div class="mcard-time">
                                <span>7天前</span>
                                <span><a-icon type="message" @click="toMessage" /></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class MProject extends Vue{
    @Provide() list = new Array(10)

    toEdit (v: string) {
        this.$router.push({
            path: '/editproject' + (v? `?flag=${v}` : '')
        })
    }

    toMessage () {
        this.$router.push({
            path: '/comment'
        })
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/list-header.scss';
.mproject-box{
    height: 100%;
    overflow: hidden;
    position: relative;
    .mproject-body{
        height: 100%;
        padding: 138px 0 0 0;
    }
    @import '@/assets/sass/list-card.scss';
}
</style>