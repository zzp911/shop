<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <!--        <h2 class="login_logo">登陆界面</h2>-->
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机号">
              <button class="get_verification">
                获取验证码
              </button>
            </section>
            <section class="login_verification">
              <input type="text" maxlength="6" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div>
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="password" maxlength="8" placeholder="密码">
                <div class="switch_button">
                  <div class="switch_circle"></div>
                  <span class="switch_text"></span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="4" placeholder="验证码">
                <img class="get_verification" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.replace(-1)">
        <i class="iconfont iconicon_arrow_left"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {}
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
            }
          }
          .login_verification{
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #ffffff;
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
