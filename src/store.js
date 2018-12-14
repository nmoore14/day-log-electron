import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quotes: []
  },
  mutations: {
    GET_QUOTES: (state, quoteLoad) => {
      for (let i = 0; i < quoteLoad.length; i++) {
        state.quotes.push(quoteLoad[i]);
      }
    }
  },
  actions: {},
  getters: {
    quoteCount: state => {
      return state.quotes.length;
    }
  }
});
