import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_SEARCH_SHOPS,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  // 更新state地址信息
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  // 更新state食品分类数组
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  // 更新state商铺列表
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  // 更新state个人信息
  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  // 退出登录重置state用户信息
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  // 搜索商铺列表
  [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
    state.searchShops = searchShops
  },
  // 商家店铺信息
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  // 商家菜单
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  // 商家评价
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  // 增加购物车
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  // 减少购物车
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  // 清空购物车
  [CLEAR_CART] (state) {
    state.cartFoods.forEach(food => (food.count = 0))
    state.cartFoods = []
  }
}
