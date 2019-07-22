export default {
  positiveSize (state) {
    return state.ratings.reduce((total, rating) => total + (!rating.rateType ? 1 : 0), 0)
  }
}
