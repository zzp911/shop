<template>
  <div class="home_shop_list">
    <div class="shop_header">
      <i class="iconfont iconiconnav"></i>
      <span>附近商家</span>
    </div>
    <div class="shop_container">
      <ul class="shop_list">
        <li class="shop_li" v-for="(shop, index) in shops" :key="index">
          <router-link to="/shop">
            <div class="shop_left">
              <img :src="base_url + shop.image_path" class="shop_img">
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="ellipsis">{{shop.name}}</h4>
                <ul>
                  <li class="supports" v-for="(support, index) in shop.supports" :key="index">{{support.icon_name}}</li>
                </ul>
              </section>
              <section class="shop_rating_order">
                <div class="shop_rating_order_left">
                  <Star :score="shop.rating" :size="24"></Star>
                  <div class="rating_div">{{shop.rating}}</div>
                  <div class="order_div">月售{{shop.recent_order_num}}单</div>
                </div>
                <div class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                </div>
              </section>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥{{shop.float_minimum_order_amount}}起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥{{shop.float_delivery_fee}}</span>
                </p>
              </section>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Star from '../../components/Star/Star'
export default {
  data () {
    return {
      base_url: 'http://cangdu.org:8001/img/'
    }
  },
  mounted () {
    this.$store.dispatch('getShopLists')
  },
  computed: {
    ...mapState(['shops'])
  },
  components: {
    Star
  }
}
</script>

<style lang="scss">
  @import '../../common/scss/mixin';
  .home_shop_list{
    margin-top: 10px;
    position: relative;
    background-color: #ffffff;
    .shop_header{
      padding: 10px 10px 0;
      span{
        color: #999999;
        font-size: 14px;
        line-height: 20px;
      }
    }
    .shop_container{
      margin-bottom: 50px;
      .shop_li{
        @include bottom-border-1px(#e1e1e1);
        position: relative;
        width: 100%;
        >a{
          @include clearFix();
          display: block;
          padding: 15px 8px;
          width: 100%;
          box-sizing: border-box;
          .shop_left{
            float: left;
            width: 23%;
            height: 75px;
            padding-right: 8px;
            box-sizing: border-box;
            .shop_img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .shop_right{
            float: right;
            width: 77%;
            .shop_detail_header{
              @include clearFix();
              width: 100%;
              h4{
                float: left;
                width: 200px;
                color: #333;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;
                &::before{
                  content: '品牌';
                  display: inline-block;
                  font-size: 11px;
                  line-height: 11px;
                  color: #333333;
                  background-color: #ffd930;
                  padding: 2px;
                  -webkit-border-radius: 2px;
                  -moz-border-radius: 2px;
                  border-radius: 2px;
                  margin-right: 5px;
                }
              }
              ul{
                float: right;
                margin-top: 3px;
                li{
                  float: left;
                  font-size: 10px;
                  color: #999999;
                  border: 1px solid #f1f1f1;
                  padding: 0 2px;
                  -webkit-border-radius: 2px;
                  -moz-border-radius: 2px;
                  border-radius: 2px;
                }
              }
            }
            .shop_rating_order{
              @include clearFix();
              width: 100%;
              margin-top: 18px;
              margin-bottom: 8px;
              .shop_rating_order_left{
                float: left;
                color: #ff9a0d;
                .rating_div{
                  float: left;
                  font-size: 10px;
                  color: #ff6000;
                  margin-left: 4px;
                }
                .order_div{
                  float: left;
                  font-size: 10px;
                  color: #666;
                  transform: scale(0.8);
                }
              }
              .shop_rating_order_right{
                float: right;
                font-size: 0;
                .delivery_style{
                  transform-origin: 35px 0;
                  transform: scale(0.7);
                  display: inline-block;
                  padding: 1px;
                  font-size: 12px;
                  border-radius: 2px;
                }
                .delivery_right{
                  color: #02a774;
                  border: 1px solid #02a774;
                }
              }
            }
            .shop_distance{
              @include clearFix();
              width: 100%;
              font-size: 12px;
              .shop_delivery_msg{
                float: left;
                transform-origin: 0;
                transform: scale(0.9);
                color: #666666;
                .segmentation{
                  color: #cccccc;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
