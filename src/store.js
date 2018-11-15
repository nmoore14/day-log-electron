import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    quotes: []
  },
  mutations: {
    SET_QUOTES(state, quotes) {
      state.quotes = quotes;
    }
  },
  actions: {
    loadQuotes: ({ commit }) => {
      axios
        .get("/inspQuotes.json")
        .then(r => r.data)
        .then(quotes => {
          commit('SET_QOUTES', quotes)
        })
    }
  }
});