<template>
  <transition name="fade">
    <div class="food" v-if="isShow">
      <div class="food-content">
        <div class="image-header">
          <img v-lazy="food.image">
          <p class="foodpanel-desc">{{food.info}}</p>
          <div class="back" @click="toggleShow">
            <i class="iconfont iconicon_arrow_left"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售 {{food.sellCount}} 份</span>
            <span class="rating">好评率 {{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <CartControl :food="food"></CartControl>
          </div>
        </div>
      </div>
      <div class="food-cover" @click="toggleShow"></div>
    </div>
  </transition>
</template>

<script>
import CartControl from '../CartControls/CartControls'
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    }
  },
  props: {
    food: Object
  },
  components: {
    CartControl
  }
}
</script>

<style lang="scss">
  .food{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 101;
    width: 100%;
    &.fade-enter-active,&.fade-leave-active{
      transition: opacity .5s
    }
    &.fade-enter,&.fade-leave-to{
      opacity: 0;
    }
    .food-content{
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 80%;
      z-index: 66;
      background: #fff;
      border-radius: 5px;
      .image-header{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        img{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .foodpanel-desc{
          font-size: 10px;
          color: #ddd;
          letter-spacing: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0 10px 10px;
        }
        .back{
          position: absolute;
          top: 10px;
          left: 0;
          .iconicon_arrow_left{
            display: block;
            padding: 10px;
            font-size: 20px;
            color: #fff;
          }
        }
      }
      .content{
        position: relative;
        padding: 18px;
        .title{
          line-height: 14px;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #07111b;
        }
        .detail{
          margin-bottom: 18px;
          line-height: 10px;
          height: 10px;
          font-size: 0;
          >span{
            font-size: 10px;
            color: #93999f;
          }
          .sell-count{
            margin-right: 12px;
          }
        }
        .price{
          font-weight: 700;
          line-height: 24px;
          .now{
            margin-right: 8px;
            font-size: 14px;
            color: #f01414;
          }
          .old{
            text-decoration: line-through;
            font-size: 10px;
            color: #93999f;
          }
        }
        .cartcontrol-wrapper{
          position: absolute;
          right: 12px;
          bottom: 12px;
        }
      }
    }
    .food-cover{
      position: absolute;
      top: 0;
      right: 0;
      bottom: -48px;
      left: 0;
      z-index: 55;
      background-color: rgba(0,0,0,0.5);
    }
  }
</style>
