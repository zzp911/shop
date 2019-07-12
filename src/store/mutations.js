import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS
} from './mutation-types'

export default {
  // 更新state地址信息
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  // 更新state食品分类数组
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  }
}
