<template>
  <section class="personal">
    <HeaderTop title="我的"></HeaderTop>
    <section class="profile-number">
      <router-link class="profile-link" to="/login">
        <div class="profile_image">
          <i class="iconfont iconicon-geren"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont iconiconshouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont iconicon_jiantou_xiangy"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <div class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </div>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont iconorder"></i>
            </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
                <i class="iconfont iconicon_jiantou_xiangy"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont iconjifen1"></i>
            </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont iconicon_jiantou_xiangy"></i>
              </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont iconicon_vip"></i>
            </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
                <i class="iconfont iconicon_jiantou_xiangy"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont iconfuwuzhongxin"></i>
            </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
                <i class="iconfont iconicon_jiantou_xiangy"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">

    </section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="scss">
  @import '../../common/scss/mixin';
  .personal{
    width: 100%;
    overflow: hidden;
    .profile-number{
      margin-top: 45.5px;
      .profile-link{
        @include clearFix();
        position: relative;
        display: block;
        background: #02a774;
        padding: 20px 10px;
        .profile_image{
          float: left;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          vertical-align: top;
          .iconfont{
            background: #e4e4e4;
            font-size: 62px;
          }
        }
        .user-info{
          float: left;
          margin-top: 8px;
          margin-left: 15px;
          p{
            font-weight: 700;
            font-size: 18px;
            color: #ffffff;
            &.user-info-top{
              padding-bottom: 8px;
            }
            .user-icon{
              display: inline-block;
              margin-left: -15px;
              margin-right: 5px;
              width: 20px;
              height: 20px;
              .icon-mobile{
                font-size: 30px;
                vertical-align: text-top;
              }
            }
            .icon-mobile-number{
              font-size: 14px;
              color: #ffffff;
            }
          }
        }
        .arrow{
          width: 12px;
          height: 12px;
          position: absolute;
          right: 15px;
          top: 40%;
          .iconfont{
            font-size: 5px;
            color: #ffffff;
          }
        }
      }
    }
    .profile_info_data{
      @include bottom-border-1px(#e4e4e4);
      position: relative;
      border: none;
      width: 100%;
      background: #ffffff;
      overflow: hidden;
      .info_data_list{
        @include clearFix();
        .info_data_link{
          float: left;
          width: 33%;
          text-align: center;
          border-right: 1px solid #f1f1f1;
          .info_data_top{
            display: block;
            width: 100%;
            font-size: 14px;
            color: #333333;
            padding: 15px 5px 10px;
            span{
              display: inline-block;
              font-size: 30px;
              color: #f90;
              font-weight: 700;
              line-height: 30px;
            }
          }
          &:nth-of-type(2){
            .info_data_top span{
              color: #ff5f3e;
            }
          }
          &:nth-of-type(3){
            border: none;
            .info_data_top span{
              color: #6ac20b;
            }
          }
          .info_data_bottom{
            display: inline-block;
            font-size: 14px;
            color: #666666;
            font-weight: 400;
            padding-bottom: 10px;
          }
        }
      }
    }
    .profile_my_order{
      @include top-border-1px(#e4e4e4);
      position: relative;
      margin-top: 10px;
      background: #ffffff;
      .my_order{
        display: flex;
        align-items: center;
        padding-left: 15px;
        >span{
          display: flex;
          align-items: center;
          width: 20px;
          height: 20px;
          .iconfont{
            margin-left: -10px;
            font-size: 30px;
            &.iconorder{
              color: #02a774;
            }
            &.iconicon_vip{
              color: #f90;
            }
          }
        }
        .my_order_div{
          width: 100%;
          border-bottom: 1px solid #f1f1f1;
          padding: 18px 10px 18px 0;
          font-size: 16px;
          color: #333333;
          display: flex;
          justify-content: space-between;
          span{
            display: block;
          }
          .my_order_icon{
            width: 10px;
            height: 10px;
            .iconfont{
              font-size: 10px;
              color: #bbb;
            }
          }
        }
      }
    }
  }
</style>
