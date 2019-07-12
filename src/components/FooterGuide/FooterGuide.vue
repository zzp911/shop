<template>
  <footer class="footer_guide">
<!--    <router-link to="/home" class="guide_item" :class="{on: $route.path === '/home'}" replace>-->
<!--      <span>-->
<!--        <i class="iconfont iconicon-waimai"></i>-->
<!--      </span>-->
<!--      <span>外卖</span>-->
<!--    </router-link>-->
<!--    <router-link to="/search" class="guide_item" :class="{on: $route.path === '/search'}" replace>-->
<!--      <span>-->
<!--        <i class="iconfont iconicon_sousuo"></i>-->
<!--      </span>-->
<!--      <span>搜索</span>-->
<!--    </router-link>-->
<!--    <router-link to="/order" class="guide_item" :class="{on: $route.path === '/order'}" replace>-->
<!--      <span>-->
<!--        <i class="iconfont iconicon-dingdan"></i>-->
<!--      </span>-->
<!--      <span>订单</span>-->
<!--    </router-link>-->
<!--    <router-link to="/personal" class="guide_item" :class="{on: $route.path === '/personal'}" replace>-->
<!--      <span>-->
<!--        <i class="iconfont iconicon-geren"></i>-->
<!--      </span>-->
<!--      <span>我的</span>-->
<!--    </router-link>-->
    <a @click="goto('/home')" class="guide_item" :class="{on: $route.path === '/home'}">
      <span>
        <i class="iconfont iconicon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a @click="goto('/search')" class="guide_item" :class="{on: $route.path === '/search'}">
      <span>
        <i class="iconfont iconicon_sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a @click="goto('/order')" class="guide_item" :class="{on: $route.path === '/order'}">
      <span>
        <i class="iconfont iconicon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a @click="goto('/personal')" class="guide_item" :class="{on: $route.path === '/personal'}">
      <span>
        <i class="iconfont iconicon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
    goto (target) {
      this.$router.replace(target)
    }
  }
}
</script>

<style lang="scss">
  @import '../../common/scss/mixin';
  .footer_guide{
    @include top-border-1px(#e4e4e4);
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background: #ffffff;
    display: flex;
    .guide_item{
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      color: #999999;
      &.router-link-active, &.on{
        color: #02a774;
      }
      span{
        margin: 2px 0;
        font-size: 12px;
        .iconfont{
          font-size: 22px;
        }
      }
    }
  }
</style>
