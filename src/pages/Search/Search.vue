<template>
  <section class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <form class="search_form" action="#" @submit.prevent="getSearchShops">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
    <section class="list">
      <ul class="list_container">
        <!--        to="'/shop?id=' + searchShop.id"         -->
        <router-link tag="li" class="list_li" to="">
          <section class="item_left">
            <img class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span></span>
              </p>
              <p>月售  单</p>
              <p></p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none">很抱歉!暂无搜索结果</div>
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
  @import "../../common/scss/mixin";
  .search{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .search_form{
      @include clearFix();
      margin-top: 45px;
      background: #ffffff;
      padding: 12px 8px;
      input{
        height: 35px;
        padding: 0 4px;
        border-radius: 2px;
        font-weight: bold;
        outline: none;
        &.search_input{
          float: left;
          width: 79%;
          border: 4px solid #f2f2f2;
          font-size: 14px;
          color: #333333;
          background: #f2f2f2;
        }
        &.search_submit{
          float: right;
          width: 18%;
          border: 4px solid #02a774;
          font-size: 16px;
          color: #ffffff;
          background: #02a774;
        }
      }
    }
    .list .list_container{
      .list_li{
        .item_left{
          .restaurant_img{

          }
        }
        .item_right{
          .item_right_text p{

          }
        }
      }
    }
  }
</style>
