<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in scsClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
export default {
  computed: {
    scsClasses () {
      const {score} = this
      const scs = []
      const onStar = Math.floor(score)
      for (let i = 0; i < onStar; i++) {
        scs.push('on')
      }
      if ((score * 10 - onStar * 10) > 5) {
        scs.push('half')
      }
      while (scs.length < 5) {
        scs.push('off')
      }
      return scs
    }
  },
  props: {
    score: Number,
    size: Number
  }
}
</script>

<style lang="scss">
  @import '../../common/scss/mixin';
  .star{
    float: left;
    font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-48{
      .star-item{
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('./stars/star48_on');
        }
        &.half{
          @include bg-image('./stars/star48_half');
        }
        &.off{
          @include bg-image('./stars/star48_off');
        }
      }
    }
    &.star-36{
      .star-item{
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-size: 15px 15px;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('./stars/star36_on');
        }
        &.half{
          @include bg-image('./stars/star36_half');
        }
        &.off{
          @include bg-image('./stars/star36_off');
        }
      }
    }
    &.star-24{
      .star-item{
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background-size: 10px 10px;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('./stars/star24_on');
        }
        &.half{
          @include bg-image('./stars/star24_half');
        }
        &.off{
          @include bg-image('./stars/star24_off');
        }
      }
    }
  }
</style>
