import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_SEARCH_SHOPS
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
  }
}
