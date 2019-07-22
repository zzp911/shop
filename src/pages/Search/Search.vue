<template>
  <section class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <form class="search_form" action="#" @submit.prevent="getSearchShops">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="keyword">
      <input type="submit" name="submit" class="search_submit">
    </form>
    <section class="list" v-if="!noSearchResult">
      <ul class="list_container">
        <!--        to="'/shop?id=' + searchShop.id"         -->
        <router-link tag="li" class="list_li" to="" v-for="(shop, index) in searchShops" :key="index">
          <section class="item_left">
            <img class="restaurant_img" :src="imgBaseUrl + shop.image_path">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{shop.name}}</span>
              </p>
              <p>月售 {{shop.recent_order_num}} 单</p>
              <p>{{shop.float_minimum_order_amount}} 元起送 / 距离 {{shop.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-else>很抱歉!暂无搜索结果</div>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      keyword: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      noSearchResult: false
    }
  },
  methods: {
    getSearchShops () {
      const keyword = this.keyword.trim()
      if (keyword) {
        this.$store.dispatch('getSearchShops', keyword)
      }
    }
  },
  computed: {
    ...mapState(['searchShops'])
  },
  watch: {
    searchShops (value) {
      if (!value.length) {
        this.noSearchResult = true // 无数据
      } else {
        this.noSearchResult = false // 有数据
      }
    }
  },
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
      position: relative;
      z-index: 100;
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
    .list{
      position: fixed;
      top: 104px;
      left: 0;
      right: 0;
      bottom: 50px;
      overflow: auto;
      .list_container{
        background: #ffffff;
        .list_li{
          display: flex;
          justify-content: center;
          padding: 10px;
          border-bottom: 1px solid #e4e4e4;
          .item_left{
            margin-right: 10px;
            .restaurant_img{
              width: 50px;
              height: 50px;
              display: block;
            }
          }
          .item_right{
            font-size: 12px;
            flex: 1;
            .item_right_text p{
              line-height: 12px;
              margin-bottom: 6px;
            }
          }
        }
      }
    }
    .search_none, .search_loading{
      margin: 0.5rem auto 0;
      color: #333;
      text-align: center;
    }
  }
</style>
