<template>
    <div class="marticle-box">
        <div class="m-list-header">
            <div class="m-list-title">文章管理</div>
            <div class="m-list-search-body">
                <div class="m-list-search-box">
                    <input type="text" class="txt" v-model.trim="searchName" placeholder="请输入文章名称" maxlength="50">
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
                            <td><a href="javascript:;">{{item.title}}</a></td>
                            <td>{{item.addtime}}</td>
                            <td>{{item.see}}</td>
                            <td>
                                <button class="btn btn-edit" @click="toEdit(item.id)">编辑</button>
                                <button class="btn btn-success btn-comment">评论</button>
                                <button class="btn btn-fail btn-del">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="m-list-table-page">
                    <a-pagination :default-current="page" :pageSize="pageNum" :total="pageCount" @change="changePage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Provide} from 'vue-property-decorator'

@Component
export default class MArticle extends Vue{
    private searching: boolean = false
    private list: any = []
    private height: any = 0
    private page: number = 1
    private pageNum: number = 0
    private pageCount: number = 50
    private loading: boolean = false
    private filterName: string = ''
    private searchName: string = ''

    search () {
        this.filterName = this.searchName
        this.getList()
    }
    changePage (v: any) {
        this.page = v
        this.getList()
    }
    toEdit (v: string) {
        this.$router.push({
            path: '/editarticle' + (v? `?flag=${v}` : '')
        })
    }

    getList () {        
        this.loading = true
        this.$http.get(this.uris.getArticles, {params: {
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

    created () {
        this.height = document.body.clientHeight
        this.height -= 400
        this.pageNum = Math.floor(this.height / 55)
        this.getList()
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/list.scss';
@import '@/assets/sass/list-header.scss';
.marticle-box{
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
