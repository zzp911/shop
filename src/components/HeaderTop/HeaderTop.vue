<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title ellipsis">{{title}}</span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  @import '../../common/scss/mixin';
  .header{
    width: 100%;
    height: 45px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: #02a774;
    .header_title{
      position: absolute;
      width: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      color: #ffffff;
      text-align: center;
    }
    .header_search{
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 10%;
      height: 50%;
      .iconfont{
        font-size: 25px;
        color: #ffffff;
      }
    }
    .header_login{
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #ffffff;
      font-size: 14px;
    }
  }
</style>
