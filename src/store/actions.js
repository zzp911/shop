import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys
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
  }
}
