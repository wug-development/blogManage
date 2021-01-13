<template>
    <div class="marticle-box">
        <div class="marticle-header">
            <div class="marticle-title">文章管理</div>
            <div class="mph-search-body">
                <div class="mph-search-box">
                    <input type="text" class="txt" placeholder="请输入文章名称" maxlength="50">
                    <a-button type="primary" class="btn" :loading="searching" @click="search">搜索</a-button>
                    <a-button type="primary" icon="plus" class="btn-add" @click="toEdit">新增</a-button>
                </div>
            </div>
        </div>

        <div class="marticle-body">
            <div class="marticle-table-warper" ref="">
                <table class="marticle-table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>文章标题</td>
                            <td>添加时间</td>
                            <td>阅读量</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in list" :key="i">
                            <td>
                                <a-checkbox></a-checkbox>
                            </td>
                            <td><a href="">TradeCode 99</a></td>
                            <td>2021-01-11 18:16:47</td>
                            <td>76</td>
                            <td>
                                <button class="btn btn-edit">编辑</button>
                                <button class="btn btn-del">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="marticle-table-page">
                    <a-pagination :default-current="6" :total="500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Provide} from 'vue-property-decorator'

@Component
export default class MArticle extends Vue{
    @Provide() searching: boolean = false
    @Provide() list: any
    @Provide() height: any = 0
    @Provide() pageNum: number = 0

    search () {
        this.searching = true
        setTimeout(() => {
            this.searching =false
        }, 3000)
    }
    toEdit () {}

    created () {
        this.height = document.body.clientHeight
        this.height -= 400
        this.pageNum = Math.floor(this.height / 55)
        this.list = new Array(this.pageNum)
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/base.scss';
.marticle-box{
    height: 100%;
    overflow: hidden;
    position: relative;
    .marticle-header{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        height: 138px;
        @include wg-header;
        .marticle-title{
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
                    height: 40px;
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
    .marticle-body{
        height: 100%;
        padding: 158px 20px 20px 20px;
        .marticle-table-warper{
            height: 100%;
            background-color: #fff;
            border-radius: 2px;
            padding: 20px;
            .marticle-table{
                width: 100%;
                text-align: center;
                thead{
                    font-weight: bold;
                }
                tr{
                    border-bottom: 1px solid #eee;
                    td{
                        padding: 15px 0;
                        &:first-child{
                            width: 20px;   
                        }
                        &:nth-child(2){
                            width: 50%;
                            text-align: left;
                            padding-left: 1%;
                            a{
                                color: $color;
                            }
                        }
                        .btn{
                            border: 0;
                            margin: 0 5px;
                            height: 24px;
                            line-height: 24px;
                            width: 60px;
                        }
                    }
                }
            }
            .marticle-table-page{
                padding: 30px 0 15px 0;
                text-align: right;
            }
        }
    }
}
</style>
