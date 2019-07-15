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
    <ShopsList></ShopsList>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopsList from '../../components/ShopsList/ShopsList'
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
    HeaderTop,
    ShopsList
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
  }
</style>
