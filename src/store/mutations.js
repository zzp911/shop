import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
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
  }
}
