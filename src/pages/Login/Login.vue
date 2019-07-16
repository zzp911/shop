<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <!--        <h2 class="login_logo">登陆界面</h2>-->
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on : loginWay}">
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机号" v-model="phone">
              <button class="get_verification" :class="{rightPhone: rightPhone && count_down === 0}" :disabled="!rightPhone"
                      @click.prevent="getCode">
                {{count_down > 0 ? `已发送${count_down}s` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="text" maxlength="6" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on : !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-model="pwd" v-show="showPwd">
                <input type="password" maxlength="8" placeholder="密码" v-model="pwd" v-show="!showPwd">
                <div class="switch_button" @click="showPwd = !showPwd" :class="{on: showPwd}">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="4" placeholder="验证码" v-model="captcha">
                <img class="get_verification" alt="captcha" src="http://localhost:4000/captcha" @click="getCaptcha" ref="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont iconicon_arrow_left"></i>
      </a>
    </div>
  </section>
</template>

<script>
import {reqShortMsg, reqPhoneLogin, reqNameLogin} from '../../api'
import {MessageBox} from 'mint-ui'
export default {
  data () {
    return {
      loginWay: true, // 登录方式，true手机号登录，false用户名登录
      showPwd: false, // 显示密码
      count_down: 0, // 定义计时器
      phone: '', // 手机号
      code: '', // 验证码
      name: '', // 用户名
      pwd: '', // 密码
      captcha: '' // 图形验证码
    }
  },
  methods: {
    async login () {
      let result
      if (this.loginWay) { // 短信登录
        const {phone, code} = this
        if (!this.rightPhone) {
          MessageBox('提示', '请输入正确的手机号!')
          return
        } else if (!/^\d{6}$/.test(code)) {
          MessageBox('提示', '请输入正确的验证码!')
          return
        }
        result = await reqPhoneLogin(phone, code)
      } else { // 用户名登录
        const {name, pwd, captcha} = this
        if (!name) {
          MessageBox('提示', '请输入用户名')
          return
        } else if (!pwd) {
          MessageBox('提示', '请输入密码')
          return
        } else if (!captcha) {
          MessageBox('提示', '请输入验证码')
          return
        }
        result = await reqNameLogin({name, pwd, captcha})
      }
      console.log(result)
      if (result.code === 0) {
        // 保存登录信息
        const userInfo = result.data
        this.$store.dispatch('recordUser', userInfo)
        // 登陆成功跳去个人信息界面
        this.$router.replace('/personal')
      } else {
        MessageBox('提示', result.msg)
        this.getCaptcha()
      }
    },
    async getCode () {
      if (!this.count_down) {
        this.count_down = 10
        this.timer = setInterval(() => {
          this.count_down--
          if (this.count_down <= 0) {
            clearInterval(this.timer)
          }
        }, 1000)
        const result = await reqShortMsg(this.phone)
        if (result.code === 0) {
          console.log(result)
        } else if (result.code === 1) {
          MessageBox('提示', result.msg)
          this.count_down = 0
          clearInterval(this.timer)
        }
      }
    },
    getCaptcha () {
      this.$refs.getCaptcha.src = 'http://localhost:4000/captcha?' + Date.now()
    }
  },
  mounted () {
    this.getCaptcha()
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  }
}
</script>

<style lang="scss">
  @import "../../common/scss/mixin";
  .loginContainer{
    width: 100%;
    height: 100%;
    background: #ffffff;
    .loginInner{
      padding-top: 60px;
      width: 80%;
      margin: 0 auto;
      .login_header{
        .login_header_title{
          padding-top: 40px;
          text-align: center;
          >a{
            color: #333;
            font-size: 14px;
            padding-bottom: 4px;
            &.on{
              color: #02a774;
              font-weight: 700;
              border-bottom: 2px solid #02a774;
            }
            &:first-child{
              margin-right: 40px;
            }
          }
        }
      }
      .login_content{
        >form>div{
          display: none;
          &.on{
            display: block;
          }
          .login_message{
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #ffffff;
            .get_verification{
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: none;
              color: #cccccc;
              font-size: 14px;
              background: transparent;
              &.rightPhone{
                color: #000000;
              }
            }
          }
          .login_verification{
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #ffffff;
            .switch_button{
              font-size: 12px;
              border: 1px solid #dddddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #ffffff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              &.on{
                background: #02a774;
              }
              &.off{
                background: #ffffff;
                .switch_text{
                  float: right;
                  color: #ddd;
                }
              }
              .switch_circle{
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
                transition: transform 0.3s, -webkit-transform 0.3s;
                &.right{
                  transform: translateX(30px);
                }
              }
            }
          }
          .login_hint{
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;
            >a{
              color: #02a774;
            }
          }
          input{
            width: 100%;
            height: 100%;
            padding-left: 10px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border: 1px solid #dddddd;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;
          }
        }
        >form .login_submit{
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          background: #4cd96f;
          color: #ffffff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: none;
        }
        .about_us{
          display: block;
          font-style: 12px;
          margin-top: 20px;
          text-align: center;
          color: #999999;
        }
      }
      .go_back{
        position: absolute;
        top: 10px;
        left: 5px;
        width: 30px;
        height: 30px;
        >.iconfont{
          font-size: 20px;
          color: #999999;
        }
      }
    }
  }
</style>
