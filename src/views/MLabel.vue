<template>
    <div class="mlabel-box">
        <div class="m-list-header">
            <div class="m-list-title">标签管理</div>
            <div class="m-list-search-body">
                <div class="m-list-search-box">
                    <input type="text" class="txt" placeholder="请输入标签名称" maxlength="50">
                    <a-button type="primary" class="btn" :loading="searching" @click="search">搜索</a-button>
                    <a-button type="primary" icon="plus" class="btn-add" @click="toEdit('')">新增</a-button>
                </div>
            </div>
        </div>

        <div class="m-list-body">
            <div class="m-list-table-wrapper" ref="">
                <table class="m-list-table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>标签名称</td>
                            <td>添加时间</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in list" :key="i">
                            <td>
                                <a-checkbox></a-checkbox>
                            </td>
                            <td><a href="">TradeCode {{i}}</a></td>
                            <td>2021-01-11 18:16:47</td>
                            <td>
                                <button class="btn btn-edit" @click="toEdit(i)">编辑</button>
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

        <my-modal v-model="isShow" :title="layerTitle" :loading="loading" @submit="save">
            <a-input placeholder="请输入标签名称" v-model="labelName" />
        </my-modal>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Provide} from 'vue-property-decorator'
import MyModal from '@/components/ModalLayer.vue'

@Component({
    components: {
        'my-modal': MyModal
    }
})
export default class MLabel extends Vue{
    @Provide() searching: boolean = false
    @Provide() list: any
    @Provide() height: any = 0
    @Provide() pageNum: number = 0
    @Provide() isShow: boolean = false
    @Provide() loading: boolean = false
    @Provide() labelName: string = ''
    @Provide() layerTitle: string = ''

    search () {
        this.searching = true
        setTimeout(() => {
            this.searching =false
        }, 3000)
    }
    toEdit (v: any) {
        console.log(v)
        if (v) {
            this.labelName = v
            this.layerTitle = '编辑标签'
        } else {
            this.layerTitle = '添加标签'
        }
        this.isShow = true
    }
    save () {

    }

    created () {
        this.height = document.body.clientHeight
        this.height -= 400
        this.pageNum = Math.floor(this.height / 55)
        this.list = new Array(this.pageNum)
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/list.scss';
@import '@/assets/sass/list-header.scss';
.mlabel-box{
    height: 100%;
    overflow: hidden;
    position: relative;
    .m-list-body{
        td:nth-child(2){
            width: 50%;
        }
    }
}
</style>
