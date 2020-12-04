<template>
    <div class="projectedit-box">
        <div class="mproject-header">
            <div class="mproject-title">编辑项目</div>
        </div>
        <div class="projectedit-body">
            <div class="projectedit-form">
                <div class="pje-item">
                    <div class="pje-item-label">标题：</div>
                    <div class="pje-item-content">
                        <input type="text" class="txt" placeholder="请输入项目标题" maxlength="50">
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
                    <div class="pje-item-label">项目图片：</div>
                    <div class="pje-item-content">
                        <a-upload action="" list-type="picture" :default-file-list="fileList" class="upload-list-inline" >
                            <a-button> <a-icon type="upload" /> upload </a-button>
                        </a-upload>
                    </div>
                </div>
                <div class="pje-item">
                    <div class="pje-item-label">简介：</div>
                    <div class="pje-item-content">
                        <textarea class="txt txt-area" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
@Component
export default class ProjectEdit extends Vue {
    @Provide() size: string = 'default'
    @Provide() fileList: any = []

    handleChange (v: string) {
      console.log(`Selected: ${v}`)
    }
    popupScroll() {
      console.log('popupScroll')
    }
}
</script>

<style lang="scss">
@import '@/assets/sass/base.scss';
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
                    width: 29%;
                    text-align: right;
                }
                .pje-item-content{
                    width: 35%;
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
        }
    }
}
</style>