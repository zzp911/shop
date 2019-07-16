import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShopLists,
  reqUserInfo,
  reqLogout,
  reqSearchShops
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
  }
}
