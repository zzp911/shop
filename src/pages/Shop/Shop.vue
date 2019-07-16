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
  components: {
    ShopHeader
  }
}
</script>

<style lang="scss">

</style>
