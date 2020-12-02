<template>
    <a-layout-header class="myheader-box">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="changeMenu" />
        <div class="header-right">
            <div class="header-msg">
                <a-badge count="1">
                    <a href="#" class="head-example">
                        <a-icon type="bell"></a-icon>
                    </a>
                </a-badge>
            </div>
            <a-dropdown class="header-dropdow">
                <div class="header-name-img ant-dropdown-link">
                    <span class="hn-img"><img src="../assets/images/head.png" alt=""></span>
                    <span>Guang Wu</span>
                </div>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <div href="javascript:;">个人设置</div>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item>
                        <div @click="loginOut">退出登录</div>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </a-layout-header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
    @Prop() private collapsed!: string;
    

    changeMenu() {
        this.$emit('changemenu', !this.collapsed)
    }


    loginOut () {
        sessionStorage.removeItem('mblog')
        this.$router.push({
            path: '/login'
        })
    }
}
</script>

<style lang="scss">
.myheader-box{
    background: #fff; 
    padding: 0;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #e1e1e1, 1px 1px 0 0 #f0f0f0;
    .header-right{
        display: flex;
        padding-right: 20px;
        .header-msg{
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 12px;
            cursor: pointer;
            transition: all .3s;
            .head-example{
                display: block;
                color: #333;
                font-size: 16px;
            }
            .anticon{
                padding: 4px;
            }
        }
        .header-name-img{
            width: 100%;
            padding: 0 15px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            .hn-img{
                width: 24px;
                height: 24px;
                border-radius: 24px;
                overflow: hidden;
                margin-right: 8px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .header-dropdow{
            width: 130px;
            display: flex;
            flex-wrap: wrap;
            .ant-menu{
                position: relative;
                top: -3px;
                display: none;
                width: 100% ;
                text-align: center;
                box-shadow: 0 2px 8px rgba(80,80,80, .2);
            }
        }
        .header-dropdow:hover{
            .ant-menu{
                display: block;
            }
        }
    }
}
</style>