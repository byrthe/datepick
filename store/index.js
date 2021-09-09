export const state = () => ({
    counter: 8,
    name: '',
    email: '',
    datetime: new Date(),
  })
   
export const mutations = {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    updateName(state, payload) {
        state.name = payload
    },
    updateEmail(state, payload) {
        state.email = payload
    },
    updateDate(state, payload) {
        state.datetime = payload
    }
}

export const actions = {
    increment (context) {
      context.commit('increment')
    },
    decrement (context){
        context.commit('decrement')
    },
}

export const getters = {}