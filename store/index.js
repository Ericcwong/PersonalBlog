export const state = () => ({
  counter: 0
});

export const mutations = {
  plusOne(state) {
    state.counter++
  },
  minusOne(state) {
    state.counter--
  }
}
