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
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShopLists,
  reqUserInfo,
  reqLogout,
  reqSearchShops,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../api'

export default {
  // 请求地址信息
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 请求食物分类
  async getFoodCategorys ({commit, state}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 请求商铺列表
  async getShopLists ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShopLists(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 同步记录个人信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },
  // 异步获取用户登录信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },
  // 退出登录
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USERINFO)
    }
  },
  // 搜索商铺
  async getSearchShops ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },
  // 获取Mock商家店铺信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  // 获取mock商家菜单
  async getShopGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
  // 获取mock商家评价
  async getShopRatings ({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callback && callback()
    }
  },
  // 添加购物车
  updataFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  }
}
