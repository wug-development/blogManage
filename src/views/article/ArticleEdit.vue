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
                        <input type="text" class="txt" placeholder="请输入文章标题" maxlength="50">
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">标签：</div>
                    <div class="pje-item-content">
                        <a-select mode="multiple" :size="size" placeholder="请选择标签" :default-value="['a1', 'b2']" @change="handleChange" style="width:100%" @popupScroll="popupScroll" :showArrow="true">
                            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                {{ (i + 9).toString(36) + i }}
                            </a-select-option>
                        </a-select>
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">文章图片：</div>
                    <div class="pje-item-content">
                        <a-upload action="" list-type="picture" :default-file-list="fileList" class="upload-list-inline" >
                            <a-button> <a-icon type="upload" /> upload </a-button>
                        </a-upload>
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">文章内容：</div>
                    <div class="pje-item-content">
                        <div ref="editorElem"></div>
                    </div>
                </div>
                <div class="pje-item pje-item-btns">
                    <a-button class="btn" type="primary" :loading="saveing" @click="save">保 存</a-button>
                    <a-button class="btn" type="default" @mouseenter="cancel">取 消</a-button>
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
    @Provide() size: string = 'default'
    @Provide() fileList: any = []
    @Provide() saveing: boolean = false
    @Provide() editor: any
    @Provide() editorContent: string = ''

    handleChange (v: string) {
      console.log(`Selected: ${v}`)
    }
    popupScroll () {
      console.log('popupScroll')
    }
    save () {
        this.saveing = true
    }
    cancel () {}

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