<template>
    <div class="mtype-box">
        <a-spin :spinning="loading">
        <div class="m-list-header">
            <div class="m-list-title">类型管理</div>
            <div class="m-list-search-body">
                <div class="m-list-search-box">
                    <input type="text" class="txt" v-model.trim="searchName" placeholder="请输入类型名称" maxlength="50">
                    <a-button type="primary" class="btn" @click="search">搜索</a-button>
                    <a-button type="primary" icon="plus" class="btn-add" @click="toEdit('')">新增</a-button>
                </div>
            </div>
        </div>

        <div class="m-list-body">
            <div class="m-list-table-wrapper" ref="">
                <a-checkbox-group @change="checkValue">
                <table class="m-list-table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>类型名称</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in list" :key="i">
                            <td>
                                <a-checkbox :value="item.id"></a-checkbox>
                            </td>
                            <td>{{item.name}}</td>
                            <td>
                                <button class="btn btn-edit" @click="toEdit(item.name, item.id)">编辑</button>
                                <a-popconfirm placement="left" @confirm="del(item.id)" ok-text="确定" cancel-text="取消">
                                    <template slot="title">
                                        <p>您确定要删除该类型吗？</p>
                                    </template>
                                    <button class="btn btn-del">删除</button>
                                </a-popconfirm>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </a-checkbox-group>
                <div class="m-list-table-page">
                    <a-pagination :default-current="page" :pageSize="pageNum" :total="pageCount" @change="changePage" />
                </div>
            </div>
        </div>
        <my-modal v-model="isShow" :title="layerTitle" @submit="submit">
            <a-input placeholder="请输入类型名称" v-model.trim="typeName" />
        </my-modal>
        </a-spin>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import MyModal from '@/components/ModalLayer.vue'

@Component({
    components: {
        'my-modal': MyModal
    }
})
export default class MType extends Vue{
    private searching: boolean = false
    private list: any
    private height: any = 0
    private page: number = 1
    private pageNum: number = 0
    private pageCount: number = 50
    private isShow: boolean = false
    private loading: boolean = false
    private filterName: string = ''
    private searchName: string = ''
    private typeName: string = ''
    private typeID: string = ''
    private layerTitle: string = ''
    private selVal: any = ''

    search () {
        this.filterName = this.searchName
        this.getList()
    }

    checkValue (v: any) {
        console.log(v)
    }

    changePage (v: any) {
        this.page = v
        this.getList()
    }

    getList () {
        this.loading = true
        this.$http.get(this.uris.getTypes, {params: {
            page: this.page,
            pagenum: this.pageNum,
            filter: this.filterName
        }}).then((res) => {
            console.log(res.data)
            this.loading = false
            if (res.data.code === 200) {
                const d = res.data.data
                this.pageCount = d.count
                this.list = d.rows
                this.$forceUpdate()
            } else {
                this.$message.error("请求失败！")
            }
        }).catch(() => {
            this.loading = false
        })
    }

    toEdit (v: any, id: string) {
        if (v) {
            this.typeID = id
            this.typeName = v
            this.layerTitle = '编辑类型'
        } else {
            this.typeID = ''
            this.typeName = ''
            this.layerTitle = '添加类型'
        }
        this.isShow = true
    }

    submit () {
        this.typeID? this.save() : this.add()
    }

    add () {
        this.$http.get(this.uris.addType, {params: {
            id: this.typeID,
            name: this.typeName
        }}).then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                this.isShow = false
                this.$message.success("添加成功！")
                this.page = 1
                this.getList()
            } else {
                this.$message.error("请求失败！")
            }
        })
    }

    save () {
        this.$http.get(this.uris.editType, {params: {
            id: this.typeID,
            name: this.typeName
        }}).then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                this.isShow = false
                this.$message.success("保存成功！")
                this.getList()
            } else {
                this.$message.error("请求失败！")
            }
        })
    }

    del (id: string) {
        this.$http.get(this.uris.delType, {params: {
            id
        }}).then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                this.$message.success("删除成功！")
                this.getList()
            } else {
                this.$message.error("删除失败！")
            }
        })
    }

    created () {
        this.height = document.body.clientHeight
        this.height -= 400
        this.pageNum = Math.floor(this.height / 55)
        this.list = this.getList()
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/list.scss';
@import '@/assets/sass/list-header.scss';
.mtype-box{
    height: 100%;
    overflow: hidden;
    position: relative;
    .m-list-body{
        td:nth-child(2){
            width: 80%;
        }
    }
}
</style>
