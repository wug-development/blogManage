<template>
    <div class="projectedit-box">
        <div class="mproject-header">
            <div class="mproject-title">编辑文章</div>
        </div>
        <div class="projectedit-body">
            <div class="projectedit-form">
                <div class="pje-item">
                    <div class="pje-item-label">标题：</div>
                    <div class="pje-item-content">
                        <input type="text" class="txt" placeholder="请输入文章标题" v-model.trim="articleTitle" maxlength="50">
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">简介：</div>
                    <div class="pje-item-content">
                        <a-textarea placeholder="请输入文章简介" v-model.trim="articleBrief" :auto-size="{ minRows: 2, maxRows: 6 }" maxlength="300" />
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">标签类型：</div>
                    <div class="pje-item-content">
                        <a-select mode="default" label-in-value placeholder="请选择类型" @change="getLabel">
                            <a-select-option v-for="(item, i) in typeList" :key="i" :value="item.id">{{item.name}}</a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">标签：</div>
                    <div class="pje-item-content">
                        <a-select mode="multiple" label-in-value :size="size" placeholder="请选择标签" @change="changeLabel" notFoundContent="请先选择标签类型" style="width:100%" :showArrow="true">
                            <a-select-option v-for="(item, i) in labelList" :key="i" :value="item.id">{{item.name}}</a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">文章图片：</div>
                    <div class="pje-item-content">
                        <a-upload list-type="picture" :fileList="fileList" :customRequest="uploadImg" :remove="removeImg" class="upload-list-inline" >
                            <a-button> <a-icon type="upload" /> 上传 </a-button>
                        </a-upload>
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">文章内容：</div>
                    <div class="pje-item-content">
                        <div class="pje-item-content-editor" ref="editorElem"></div>
                    </div>
                </div>
                <div class="pje-item pje-item-btns">
                    <a-button class="btn" type="primary" :loading="saveing" @click="save">保 存</a-button>
                    <a-button class="btn" type="default" @click="cancel">取 消</a-button>
                </div>
            </div>
        </div>       
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Ref } from 'vue-property-decorator'
import E from 'wangeditor'
@Component
export default class ProjectEdit extends Vue {
    private articleID: any = ''
    private articleTitle: string = ''
    private articleBrief: string = ''
    private size: string = 'default'
    private fileList: any = []
    private saveing: boolean = false
    private editor: any
    private editorContent: string = ''
    private labelList: any = []
    private typeList: any = []
    private selOption: any = []
    private selLabel: any = []
    private imgPath: any = []

    save () {
        let imgs = this.getImgsPath()
        let lids = this.getLabelsID()
        if (this.articleTitle == '') {
            this.$message.info("请输入文章标题！")
        } else if (lids.length < 1) {
            this.$message.info("请选择标签！")
        } else if (imgs.length < 1) {
            this.$message.info("请上传图片！")
        } else if (this.editorContent.length < 1) {
            this.$message.info("请输入正文！")
        } else {
            this.saveing = true
            let formdata = new FormData()
            formdata.append('aid', this.articleID || '')
            formdata.append('title', this.articleTitle)
            formdata.append('brief', this.articleBrief)
            formdata.append('cid', this.selOption.key)
            formdata.append('lid', lids.join(','))
            formdata.append('img', imgs.join(','))
            formdata.append('content', this.editorContent)
            let params = {
                aid: this.articleID || '',
                'title': this.articleTitle,
                'cid': this.selOption.key,
                'lid': lids.join(','),
                'img': imgs.join(','),
                'content': this.editorContent
            }

            this.$http.post(this.uris.saveArticle, params).then((res) => {
                this.saveing = false
                console.log(res.data)
                if (res.data.code === 200) {
                    this.$message.success("保存成功！")
                    this.$router.go(-1)
                } else {
                    this.$message.error("类型获取失败！")
                }
            }).catch(res => {
                this.saveing = false
                this.$message.error("保存失败！")
            })
        }
    }
    cancel () {
        if (this.editorContent.length > 0) {
            this.$confirm({
                title: '温馨提示',
                content: '您还有未保存的文章内容，您确定返回吗？',
                okText: '是',
                cancelText: '否',
                onOk () {
                    this.$router.go(-1)
                }
            })
        } else {
            this.$router.go(-1)
        }
    }

    getLabelsID (): any {
        let arr: Array<string> = []
        this.selLabel.map((item: any) => {
            arr.push(item.key)
        })
        return arr
    }

    getImgsPath (): any {
        let arr: Array<string> = []
        this.fileList.map((item: any) => {
            arr.push(item.imgUrl)
        })
        return arr
    }

    removeImg (e: any) {
        this.fileList = this.fileList.filter((e: any) => e.uid !== e.uid)
    }

    uploadImg (e: any) {
        const upfile = {
            uid: e.file.uid, // 注意，这个uid一定不能少，否则上传失败
            name: e.file.name,
            status: 'uploading',
            url: '',
            imgUrl: '',
            percent: 99, // 注意不要写100。100表示上传完成
        }
        this.fileList.push(upfile)
        // const reader = new FileReader()
        // reader.readAsDataURL(e.file)
        let formdata = new FormData()
        formdata.append('file', e.file)
        // 读取图片文件
        this.$http.post(this.uris.uploadimg, formdata).then((res) => {
            if (res.status === 200 && res.data.code === 200) {
                upfile.status = 'done'
                upfile.url = res.data.data.host + res.data.data.path
                upfile.imgUrl = res.data.data.path
                this.$forceUpdate()
            } else {
                this.$message.error("上传失败！")
                this.removeImg(upfile)
            }
        }).catch(e => {
            this.$message.error("上传失败！")
            this.removeImg(upfile)
        })
    }

    mounted () {
        let ele: any = this.$refs.editorElem
        this.editor = new E(ele)
        console.log(this.editor)
        this.editor.config.onchange = (html: any) => {
            this.editorContent = html
            // this.catchData(this.editorContent) // 把这个html通过catchData的方法传入父组件
        }
        this.editor.create() // 创建富文本实例
    }

    getDetail () {
        this.$http.get(this.uris.getArticleInfo, {
            params: {
                cid: this.articleID
            }
        }).then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                const d = res.data.data
                this.articleTitle = d.dcTitle
                this.articleBrief = d.dcBrief
                this.editorContent = d.dcContent
                this.fileList.push({
                    uid: this.articleID, // 注意，这个uid一定不能少，否则上传失败
                    name: d.dcArticleImg,
                    status: 'done',
                    url: '',
                    imgUrl: d.dcArticleImg,
                    percent: 100, // 注意不要写100。100表示上传完成
                })
            } else {
                this.$message.error("获取失败！")
            }
        })
    }

    getType () {
        this.$http.get(this.uris.getType, {}).then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                this.typeList = res.data.data
            } else {
                this.$message.error("类型获取失败！")
            }
        })
    }

    changeLabel (v:any) {
        this.selLabel = v
    }

    getLabel (v: any) {
        this.selOption = v
        this.$http.get(this.uris.getLabel, {
            params: {
                cid: v.key
            }
        }).then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                this.labelList = res.data.data
            } else {
                this.$message.error("类型获取失败！")
            }
        })
    }

    created () {
        this.getType()
        this.articleID = this.$route.query.flag
        if (this.articleID) {
            this.getDetail()
        }
    }
}
</script>

<style lang="scss">
.projectedit-box{
    height: 100%;
    padding: 0;
    position: relative;
    .mproject-header{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        height: 70px;
        @include wg-header;
        .mproject-title{
            @include wg-title;
        }
    }
    .projectedit-body{
        height: 100%;
        padding: 94px 24px 0 24px;
        .projectedit-form{
            background-color: #fff;
            min-height: 100px;
            padding: 24px 24px 50px 24px;
            .pje-item{
                display: flex;
                line-height: 32px;
                margin-bottom: 24px;
                .pje-item-label{
                    width: 20%;
                    text-align: right;
                }
                .pje-item-content{
                    width: 60%;
                    .txt{
                        width: 100%;
                        height: 30px;
                    }
                    .txt-area{
                        min-height: 60px;
                        resize: none;
                    }
                    .ant-select{
                        width: 100%;
                    }
                    .pje-item-content-editor .w-e-toolbar,.pje-item-content-editor .w-e-text-container{
                        z-index: 2 !important;
                    }
                }
            }
            .pje-item-btns{
                justify-content: center;
                .btn{
                    margin: 0 10px;
                }
            }
        }
    }
}
</style>