export default {
  positiveSize (state) {
    return state.ratings.reduce((total, rating) => total + (!rating.rateType ? 1 : 0), 0)
  },
  totalCount (state) {
    return state.cartFoods.reduce((total, food) => total + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((total, food) => total + food.count * food.price, 0)
  }
}
