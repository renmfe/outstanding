const state = {
  test: true
};
const getters = {
  test: state => state.test,
};
const mutations = {
  setTest(state, value) {
    state.test = value
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
