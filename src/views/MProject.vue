<template>
    <div class="mproject-box">
        <div class="mproject-header">
            <div class="mproject-title">项目管理</div>
            <div class="mph-search-body">
                <div class="mph-search-box">
                    <input type="text" class="txt" placeholder="请输入项目名称" maxlength="50">
                    <div class="btn">搜索</div>
                    <a-button type="primary" icon="plus" class="btn-add" @click="toEdit" :size="size">新增</a-button>
                </div>
            </div>
        </div>
        <div class="mproject-body">
            <ul class="mproject-list scrollbar">
                <li class="mproject-item" v-for="(item, i) in list" :key="i">
                    <div class="mproject-item-body">
                        <div class="pro-img"><img class="bimg" src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png" alt=""></div>
                        <div class="mproject-item-content">
                            <div class="mpi-title">系统管理</div>
                            <div class="mpi-other">那是一种内在的东西， 他们到达不了，也无法触及的</div>
                            <div class="mpi-time">7天前</div>
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
}
</script>

<style lang="scss">
@import '@/assets/sass/base.scss';
.mproject-box{
    height: 100%;
    overflow: hidden;
    position: relative;
    .mproject-header{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        height: 138px;
        @include wg-header;
        .mproject-title{
            @include wg-title;
        }
        .mph-search-body{
            padding: 16px 0;
            position: relative;
            .mph-search-box{
                display: flex;
                justify-content: center;
                position: relative;
                .txt{
                    width: 300px;
                    height: 40px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                .btn{
                    width: 90px;
                    line-height: 40px;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .btn-add{
                    position: absolute;
                    right: 24px;
                    width: 100px;
                    height: 40px;
                }
            }
        }
    }
    .mproject-body{
        height: 100%;
        padding: 138px 0 0 0;
        .mproject-list{
            height: 100%;
            padding: 12px 12px 0 12px;
            overflow-x: hidden;
            overflow-y: auto;
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25%;
                padding: 12px;
                cursor: pointer;
                .mproject-item-body{
                    width: 100%;
                    background-color: #fff;
                    transition: all .3s;
                    border-radius: 4px;
                    overflow: hidden;
                    .mproject-item-content{
                        padding: 24px;
                        color: rgba(0,0,0,.85);
                        .mpi-title{
                            font-size: 16px;
                            font-weight: bold;
                            margin-bottom: 8px;
                        }
                        .mpi-other{
                            line-height: 20px;
                            height: 40px;
                            margin-bottom: 8px;
                            overflow: hidden;
                        }
                        .mpi-time{
                            color: #808080;
                        }
                    }
                }
                .mproject-item-body:hover{
                    box-shadow: 0 0 10px 2px rgba(0,0,0,.15);
                }
            }
        }
    }
}
</style>