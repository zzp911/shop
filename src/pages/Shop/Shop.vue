<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader'
export default {
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  components: {
    ShopHeader
  }
}
</script>

<style lang="scss">
  .tab{
    height: 40px;
    line-height: 40px;
    background: #fff;
    position: relative;
    border: none;
    .tab-item{
      float: left;
      width: 33.33333%;
      text-align: center;
      font-size: 14px;
      color: #4d555d;
      a{
        display: block;
        position: relative;
        &.router-link-active{
          color: #02a774;
          &:after{
            content: '';
            position: absolute;
            left: 50%;
            bottom: 1px;
            width: 35px;
            height: 2px;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            background: #02a774;
          }
        }
      }
    }
  }
</style>
