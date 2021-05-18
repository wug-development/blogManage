<template>
    <div class="mcomment-box">
        <div class="m-list-header">
            <div class="m-list-title">留言管理</div>
        </div>

        <div class="m-list-body">
            <div class="m-list-table-wrapper" ref="">
                <table class="m-list-table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>留言内容</td>
                            <td>留言时间</td>
                            <td>赞</td>
                            <td>状态</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in list" :key="i">
                            <td>
                                <a-checkbox></a-checkbox>
                            </td>
                            <td><div @click="toinfo(i)">TradeCode 99</div></td>
                            <td>2021-01-11 18:16:47</td>
                            <td>55</td>
                            <td>
                                <a-badge status="success" v-if="i % 4 === 0" text="已审核"/>
                                <a-badge status="error" v-else-if="i % 4 === 1" text="未通过" />
                                <a-badge status="default" v-else-if="i % 4 === 2" text="正常" />
                                <a-badge status="warning" v-else text="待审核" />
                            </td>
                            <td>
                                <button class="btn btn-edit">编辑</button>
                                <button class="btn btn-del">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="m-list-table-page">
                    <a-pagination :default-current="6" :total="500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Provide} from 'vue-property-decorator'

@Component
export default class MComment extends Vue{
    private searching: boolean = false
    private list: any
    private height: any = 0
    private pageNum: number = 0
    private isShow: boolean = false
    private loading: boolean = false
    private typeName: string = ''
    private layerTitle: string = ''

    search () {
        this.searching = true
        setTimeout(() => {
            this.searching =false
        }, 3000)
    }
    toinfo (v: any) {
        this.$router.push({
            path: `/commentinfo?flag=${v}`
        })
    }
    created () {
        this.height = this.docHeight - 300
        this.pageNum = Math.floor(this.height / 55)
        this.list = new Array(this.pageNum)
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/list.scss';
@import '@/assets/sass/list-header.scss';
.mcomment-box{
    height: 100%;
    overflow: hidden;
    position: relative;
    .m-list-header{
        height: 64px;
    }
    .m-list-body{
        padding-top: 84px;
        td:nth-child(2){
            width: 50%;
        }
    }
}
</style>
