<template>
  <section class="home">
    <HeaderTop :title="address.name">
      <router-link to="/search" slot="left" class="header_search">
        <i class="iconfont iconiconsousuo"></i>
      </router-link>
      <router-link to="/login" slot="right" class="header_login">
        <span>登录|注册</span>
      </router-link>
    </HeaderTop>
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="#" v-for="(category, index) in categorys" :key="index" class="food_item">
              <span class="food_img">
                <img :src="image_base + category.image_url">
              </span>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <div class="home_shop_list">
      <div class="shop_header">
        <i class="iconfont iconiconnav"></i>
        <span>附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li">
            <a href="#">
              <div class="shop_left">
                <img src="">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4>吃饭的地方</h4>
                  <ul>
                    <li class="supports">保</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star star-24"></div>
                    <div class="rating_div">4.5</div>
                    <div class="order_div">月售100单</div>
                  </div>
                  <div class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">专送</span>
                  </div>
                </section>
                <section class="shop_distance"></section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      image_base: 'https://fuss10.elemecdn.com/'
    }
  },
  mounted () {
    this.$store.dispatch('getFoodCategorys')
  },
  watch: {
    categorys (value) {
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  computed: {
    ...mapState(['address', 'categorys']),
    categorysArr () {
      const {categorys} = this
      const arr = []
      let minArr = []
      categorys.forEach(c => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return arr
    }
  },
  components: {
    HeaderTop
  }
}
</script>

<style lang="scss">
  @import '../../common/scss/mixin';
  .home{
    width: 100%;
    .home_nav{
      margin-top: 45px;
      width: 100%;
      height: 200px;
      position: relative;
      background-color: #ffffff;
      .swiper-container{
        @include bottom-border-1px(#e4e4e4);
        width: 100%;
        height: 100%;
        .swiper-slide{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          .food_item{
            width: 25%;
            span{
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666666;
              &.food_img{
                padding-bottom: 10px;
                img{
                  width: 50px;
                  height: 50px;
                }
              }
            }
          }
        }
        .swiper-pagination>span{
          background-color: #02a774;
        }
      }
    }
    .home_shop_list{
      margin-top: 10px;
      position: relative;
      background-color: #ffffff;
    }
  }
</style>
