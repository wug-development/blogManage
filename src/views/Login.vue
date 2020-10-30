<template>
    <div class="login-box">
        <div class="login-body">
            <div class="login-logo">
                <img src="../assets/images/blog-logo-blue.png" alt="">
            </div>
            <div class="login-form">
                <div class="lf-text">
                    <input type="text" class="txt" v-model.trim="uname" autocomplete="off" maxlength="20" placeholder="请输入账号" />
                </div>
                <div class="lf-text">
                    <input type="password" class="txt" v-model.trim="upass" autocomplete="off" maxlength="20" placeholder="请输入密码" @keyup.enter="login" />
                </div>
                <div class="btn-login" @click="login">登 陆</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
    private uname = ''
    private upass = ''

	public login (): void {
        if (this.uname.length < 1) {
            this.$message.warning("请输入账号！")
        } else if (this.upass.length < 1) {
            this.$message.warning("请输入密码！")
        } else {
            this.$http.get('/account/login', {params: {
                uname: this.uname,
                upass: this.upass
            }}).then((res) => {
                console.log(res.data)
                if (res.data.code === 200) {
                    const _uid = res.data.data
                    if (_uid) {
                        sessionStorage.setItem('mblog', _uid)
                        this.$router.push({
                            path: '/'
                        })
                    } else {
                        this.$message.error("账号密码错误！")
                    }
                } else {
                    this.$message.error("请求失败！")
                }
            })
        }
	}
}
</script>

<style lang='scss'>
.login-box{
    height: 100%;
    background: url('~@/assets/images/login-bg.jpg') no-repeat center;
    .login-body{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-60%);
        width: 450px;
        height: 450px;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, .8);
        box-shadow: 0 0 15px rgba(255,255,255, .7);
        padding: 45px 40px 0 40px;
        box-sizing: border-box;
        .login-logo{
            height: 56px;
            img{
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .login-form{
            padding-top: 40px;
            .lf-text{
                height: 50px;
                margin-bottom: 25px;
                border: 1px solid rgba(0,0,0, .3);
                box-sizing: border-box;
                border-radius: 4px;
                overflow: hidden;
                .txt{
                    border: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    background-color: rgba(255, 255, 255, .4);
                    color: #414141;
                    font-size: 16px;
                    text-indent: 15px;
                }
            }
            .btn-login{
                background-color: #1866C1;
                color: #fff;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                border-radius: 4px;
                box-shadow: 0 0 4px rgba(0,0,0,.5);
                user-select: none;
                cursor: pointer;
            }
            .btn-login:active{
                background-color: #0738B1;
            }
        }
    }
}
</style>