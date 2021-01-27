<template>
    <div class="index-box">
        <div class="index-head">
            <div class="index-head-title">工作台</div>
            <div class="index-head-box">
                <div class="index-head-left">
                    <div class="ihb-headimg">
                        <img src="../assets/images/head.png" alt="">
                    </div>
                    <div class="ihb-content">
                        <div class="ihb-tip">{{hello}}，{{accountName}}，祝你开心每一天！</div>
                        <div class="ihb-other">前端专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
                    </div>
                </div>
                <div class="ihb-nums">
                    <div class="ihb-pro-nums">
                        <div>项目数</div>
                        <span>56</span>
                    </div>
                    <div class="ihb-pro-nums">
                        <div>项目访问量</div>
                        <span>56</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-body">
            <div class="index-project-content">
                <div class="index-card index-pj-pending">
                    <a-card title="进行中的项目">
                        <ul class="pj-list">
                            <li class="pj-item">
                                <div class="pj-item-title">
                                    <span><img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" alt=""></span>
                                    <label>项目名称</label>
                                </div>
                                <div class="pj-item-detail">
                                    那是一种内在的东西，他们到达不了，也无法触及的
                                </div>
                                <div class="pj-item-other">
                                    <span>前端项目组</span>
                                    <span>3天前</span>
                                </div>
                            </li>
                            <li class="pj-item">
                                <div class="pj-item-title">
                                    <span><img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" alt=""></span>
                                    <label>项目名称</label>
                                </div>
                                <div class="pj-item-detail">
                                    那是一种内在的东西，他们到达不了，也无法触及的
                                </div>
                                <div class="pj-item-other">
                                    <span>前端项目组</span>
                                    <span>3天前</span>
                                </div>
                            </li>
                            <li class="pj-item">
                                <div class="pj-item-title">
                                    <span><img src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" alt=""></span>
                                    <label>项目名称</label>
                                </div>
                                <div class="pj-item-detail">
                                    那是一种内在的东西，他们到达不了，也无法触及的
                                </div>
                                <div class="pj-item-other">
                                    <span>前端项目组</span>
                                    <span>3天前</span>
                                </div>
                            </li>
                            <li class="pj-item">
                                <div class="pj-item-title">
                                    <span><img src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" alt=""></span>
                                    <label>项目名称</label>
                                </div>
                                <div class="pj-item-detail">
                                    那是一种内在的东西，他们到达不了，也无法触及的
                                </div>
                                <div class="pj-item-other">
                                    <span>前端项目组</span>
                                    <span>3天前</span>
                                </div>
                            </li>
                            <li class="pj-item">
                                <div class="pj-item-title">
                                    <span><img src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" alt=""></span>
                                    <label>项目名称</label>
                                </div>
                                <div class="pj-item-detail">
                                    那是一种内在的东西，他们到达不了，也无法触及的
                                </div>
                                <div class="pj-item-other">
                                    <span>前端项目组</span>
                                    <span>3天前</span>
                                </div>
                            </li>
                            <li class="pj-item">
                                <div class="pj-item-title">
                                    <span><img src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" alt=""></span>
                                    <label>项目名称</label>
                                </div>
                                <div class="pj-item-detail">
                                    那是一种内在的东西，他们到达不了，也无法触及的
                                </div>
                                <div class="pj-item-other">
                                    <span>前端项目组</span>
                                    <span>3天前</span>
                                </div>
                            </li>
                        </ul>
                    </a-card>
                </div>
                <div class="index-card index-pj-dynamic">
                    <a-card title="项目动态">
                        <ul class="pj-dynamic-list scrollbar">
                            <li>
                                <div class="pjd-headimg"><img class="bimg" src="../assets/images/head.png" alt=""></div>
                                <div class="pjd-content">
                                    <div class="pjd-content-title"><span>武广</span> 在<a>管理系统</a>项目中发表了评论</div>
                                    <div class="pjd-content-time">6天前</div>
                                </div>
                            </li>
                            <li>
                                <div class="pjd-headimg"><img class="bimg" src="../assets/images/head.png" alt=""></div>
                                <div class="pjd-content">
                                    <div class="pjd-content-title"><span>武广</span> 在<a>管理系统</a>项目中发表了评论</div>
                                    <div class="pjd-content-time">6天前</div>
                                </div>
                            </li>
                            <li>
                                <div class="pjd-headimg"><img class="bimg" src="../assets/images/head.png" alt=""></div>
                                <div class="pjd-content">
                                    <div class="pjd-content-title"><span>武广</span> 在<a>管理系统</a>项目中发表了评论</div>
                                    <div class="pjd-content-time">6天前</div>
                                </div>
                            </li>
                            <li>
                                <div class="pjd-headimg"><img class="bimg" src="../assets/images/head.png" alt=""></div>
                                <div class="pjd-content">
                                    <div class="pjd-content-title"><span>武广</span> 在<a>管理系统</a>项目中发表了评论</div>
                                    <div class="pjd-content-time">6天前</div>
                                </div>
                            </li>
                            <li>
                                <div class="pjd-headimg"><img class="bimg" src="../assets/images/head.png" alt=""></div>
                                <div class="pjd-content">
                                    <div class="pjd-content-title"><span>武广</span> 在<a>管理系统</a>项目中发表了评论</div>
                                    <div class="pjd-content-time">6天前</div>
                                </div>
                            </li>
                            <li>
                                <div class="pjd-headimg"><img class="bimg" src="../assets/images/head.png" alt=""></div>
                                <div class="pjd-content">
                                    <div class="pjd-content-title"><span>武广</span> 在<a>管理系统</a>项目中发表了评论</div>
                                    <div class="pjd-content-time">6天前</div>
                                </div>
                            </li>
                            <li>
                                <div class="pjd-headimg"><img class="bimg" src="../assets/images/head.png" alt=""></div>
                                <div class="pjd-content">
                                    <div class="pjd-content-title"><span>武广</span> 在<a>管理系统</a>项目中发表了评论</div>
                                    <div class="pjd-content-time">6天前</div>
                                </div>
                            </li>
                        </ul>
                    </a-card>
                </div>
            </div>
            <div class="index-card">
                <a-card title="访问量">
                    <div class="visits-card">
                        <div class="div-echart">
                            <my-echart class="div-mychart"></my-echart>
                        </div>
                        <div class="ranking-body">
                            <div class="ranking-title">访问量排名</div>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>b</li>
                                <li>g</li>
                                <li>d</li>
                            </ul>
                        </div>
                    </div>
                </a-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import MyEchart from '../components/echarts/Echarts.vue'

@Component({
    components: {
        'my-echart': MyEchart
    }
})
export default class Index extends Vue {
    @Provide() hello: string = ''
    @Provide() accountName: string = ''

    getTime= function(): string {
        let d = new Date()
        let h = d.getHours()
        if (h > 22 || h < 4) {
            return '夜深了'
        } else if (h < 6) {
            return '凌晨了'
        } else if (h < 10) {
            return '早上好'
        } else if (h < 12) {
            return '上午好'
        } else if (h < 14) {
            return '中午好'
        } else if (h < 19) {
            return '下午好'
        } else {
            return '晚上好'
        }
    }

    mounted () {
        this.hello = this.getTime()
        this.accountName = 'Guang wu'
    }

    created () {
    }
}
</script>

<style lang="scss">
.index-box{
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
    .index-head{
        @include wg-header;
        .index-head-title{
            @include wg-title;
        }
        .index-head-box{
            display: flex;
            padding-top: 12px;
            justify-content: space-between;
            .index-head-left{
                display: flex;
            }
            .ihb-headimg{
                width: 72px;
                height: 72px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .ihb-content{
                margin-left: 24px;
                .ihb-tip{
                    margin-bottom: 12px;
                    color: rgba(0,0,0,.85);
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 28px;
                }
            }
            .ihb-nums{
                display: flex;
                text-align: center;
                .ihb-pro-nums{
                    padding: 0 30px;
                    color: #808080;
                    span{
                        display: block;
                        margin-top: 4px;
                        color: #333;
                        font-size: 24px;
                    }
                }
            }
        }
    }
    .index-body{
        padding: 12px;
        .index-card{
            padding: 12px;
        }
        .index-project-content{
            display: flex;
            height: 382px;
            .index-pj-pending{
                flex-basis: 60%;
                .ant-card-body{
                    padding: 0;
                }
                .pj-list{
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .pj-item{
                        width: 33.33%;
                        height: 150px;
                        border: 0;
                        padding: 24px;
                        box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, inset 1px 0 0 0 #f0f0f0, inset 0 1px 0 0 #f0f0f0;
                        transition: all .3s;
                        .pj-item-title{
                            height: 24px;
                            line-height: 24px;
                            span{
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                border-radius: 50%;
                                overflow: hidden;
                                img{
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            label{
                                display: inline-block;
                                line-height: 24px;
                                vertical-align: top;
                                padding-left: 15px;
                                color: rgba(0,0,0,.85);
                                font-weight: 600;
                            }
                        }
                        .pj-item-detail{
                            margin-top: 8px;
                            height: 44px;
                            line-height: 22px;
                            overflow: hidden;
                            color: rgba(0,0,0,.45);
                        }
                        .pj-item-other{
                            margin-top: 8px;
                            display: flex;
                            justify-content: space-between
                        }
                    }
                    .pj-item:hover{
                        position: relative;
                        z-index: 1;
                        box-shadow: 0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09)
                    }
                }
            }
            .index-pj-dynamic{
                flex-basis: 40%;
                height: 100%;
                .ant-card{
                    height: 100%;
                    overflow: hidden;
                }
                .ant-card-body{
                    height: 100%;
                    padding: 0;
                }
                .pj-dynamic-list{
                    margin: 0;
                    padding: 0;
                    padding-bottom: 57px;
                    height: 100%;
                    overflow-x: hidden;
                    overflow-y: auto;
                    li{
                        border-bottom: 1px solid #f0f0f0;;
                        padding: 12px 24px;
                        display: flex;
                        .pjd-headimg{
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                        }
                        .pjd-content{
                            padding-left: 15px;
                            color: rgba(0,0,0,.85);
                            a,label{
                                color: #1890ff;
                                margin: 0 2px;
                            }
                            span{
                                margin-right: 4px;
                            }
                            .pjd-content-time{
                                margin-top: 8px;
                                color: rgba(0,0,0,.25);
                            }
                        }
                    }
                }
            }
        }
    }
    .visits-card{
        display: flex;
        position: relative;
        height: 400px;
        .div-echart{
            height: 100%;
            flex-grow: 1;
            flex-shrink: 0;
        }
        .ranking-body{
            width: 300px;
            flex-shrink: 0;
            padding-left: 24px;
            box-sizing: border-box;
            li{
                padding: 16px 0;
                counter-increment: a 1;
                // counter-reset: a 10;
            }
            li:before{
                content: counter(a);
            }
        }
    }
}
</style>