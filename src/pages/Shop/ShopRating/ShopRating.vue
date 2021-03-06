<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 {{info.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36" />
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="info.foodScore" :size="36" />
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}} 分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive" @click="ratingType(2)" :class="{active: selectType === 2}">
          全部<span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" @click="ratingType(0)" :class="{active: selectType === 0}">
            满意<span class="count">{{positiveSize}}</span>
          </span>
          <span class="block negative" @click="ratingType(1)" :class="{active: selectType === 1}">
            不满意<span class="count">{{ratings.length - positiveSize}}</span>
          </span>
        </div>
        <div class="switch" :class="{on: onlyShowText}" @click="toggleOnlyShowText">
          <span class="iconfont iconchecked"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) in filterRatings" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star :score="rating.score" :size="24" />
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont" :class="!rating.rateType ? 'iconicon-thumb_up' : 'iconicon-thumb-down'"></span>
                <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | date-format}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Star from '../../../components/Star/Star'
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      selectType: 2,
      onlyShowText: false
    }
  },
  mounted () {
    this.$store.dispatch('getShopRatings', () => {
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new BScroll(this.$refs.ratings, {
          click: true
        })
      })
    })
  },
  computed: {
    ...mapState(['info', 'ratings']),
    ...mapGetters(['positiveSize']),
    filterRatings () {
      const {ratings, onlyShowText, selectType} = this
      return ratings.filter(rating => {
        const {rateType, text} = rating
        return (selectType === 2 || selectType === rateType) && (!onlyShowText || text.length > 0)
      })
    }
  },
  methods: {
    ratingType (index) {
      this.selectType = index
    },
    toggleOnlyShowText () {
      this.onlyShowText = !this.onlyShowText
    }
  },
  components: {
    Star
  }
}
</script>

<style lang="scss">
  @import "../../../common/scss/mixin";
  .ratings{
    position: absolute;
    top: 195px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background: #fff;
    .overview{
      display: flex;
      padding: 18px 0;
      .overview-left{
        flex: 0 0 137px;
        padding: 6px 0;
        width: 137px;
        border-right: 1px solid rgba(7,17,27,0.1);
        text-align: center;
        .score{
          margin-bottom: 6px;
          line-height: 28px;
          font-size: 24px;
          color: #f90;
        }
        .title{
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 12px;
          color: #07111b;
        }
        .rank{
          line-height: 10px;
          font-size: 10px;
          color: #93999f;
        }
      }
      .overview-right{
        flex: 1;
        padding: 6px 0 6px 24px;
        .score-wrapper{
          margin-bottom: 8px;
          font-size: 0;
          .title{
            display: inline-block;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: #07111b;
          }
          .score{
            display: inline-block;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: #f90;
          }
          .star{
            display: inline-block;
            margin: 0 12px;
            vertical-align: top;
          }
        }
        .delivery-wrapper{
          font-size: 0;
          .title{
            line-height: 18px;
            font-size: 12px;
            color: #07111b;
          }
          .delivery{
            margin-left: 12px;
            font-size: 12px;
            color: #93999f;
          }
        }
      }
    }
    .split{
      width: 100%;
      height: 16px;
      border-top: 1px solid rgba(7,17,27,0.1);
      border-bottom: 1px solid rgba(7,17,27,0.1);
      background: #f3f5f7;
    }
    .ratingselect{
      .rating-type{
        padding: 18px 0;
        margin: 0 18px;
        .block{
          display: inline-block;
          padding: 8px 12px;
          margin-right: 8px;
          line-height: 16px;
          border-radius: 1px;
          font-size: 12px;
          color: #4d555d;
          background: rgba(77,85,93,0.2);
          &.active{
            background: #02a774;
            color: #fff;
          }
          .count{
            margin-left: 2px;
            font-size: 8px;
          }
        }
      }
      .switch{
        padding: 12px 18px;
        line-height: 24px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        color: #93999f;
        font-size: 0;
        .iconchecked{
          display: inline-block;
          vertical-align: top;
          margin-right: 4px;
          font-size: 24px;
        }
        .text{
          display: inline-block;
          vertical-align: top;
          font-size: 12px;
        }
        &.on{
          .iconchecked{
            color: #02a774;
          }
        }
      }
    }
    .rating-wrapper{
      padding: 0 18px;
      .rating-item{
        display: flex;
        padding: 18px 0;
        position: relative;
        border: none;
        .avatar{
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;
          img{
            border-radius: 50%;
          }
        }
        .content{
          position: relative;
          flex: 1;
          .name{
            margin-bottom: 4px;
            line-height: 12px;
            font-size: 10px;
            color: #07111b;
          }
          .star-wrapper{
            margin-bottom: 6px;
            font-size: 0;
            .star{
              display: inline-block;
              margin-right: 6px;
              vertical-align: top;
            }
            .delivery{
              display: inline-block;
              vertical-align: top;
              line-height: 12px;
              font-size: 10px;
              color: #93999f;
            }
          }
          .text{
            margin-bottom: 8px;
            line-height: 18px;
            color: #07111b;
            font-size: 12px;
          }
          .recommend{
            line-height: 16px;
            font-size: 0;
            >span{
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
            }
            .item{
              padding: 0 6px;
              border: 1px solid rgba(7,17,27,0.1);
              border-radius: 1px;
              color: #93999f;
              background: #fff;
            }
            .iconicon-thumb_up{
              color: #f5a100;
              font-size: 12px;
            }
            .iconicon-thumb-down{
              color: #93999f;
              font-size: 12px;
            }
          }
          .time{
            position: absolute;
            top: 0;
            right: 0;
            line-height: 12px;
            font-size: 10px;
            color: #93999f;
          }
        }
      }
    }
  }
</style>
