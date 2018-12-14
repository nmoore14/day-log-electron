import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quotes: [],
    notes: []
  },
  mutations: {
    GET_QUOTES: (state, quoteLoad) => {
      for (let i = 0; i < quoteLoad.length; i++) {
        state.quotes.push(quoteLoad[i]);
      }
    },
    GET_NOTES: (state, noteLoad) => {
      for (let i = 0; i < noteLoad.length; i++) {
        state.notes.push(noteLoad[i]);
      }
    },
    ADD_NOTE: (state, noteAdd) => {
      state.notes.push(noteAdd);
    }
  },
  actions: {},
  getters: {
    quoteCount: state => {
      return state.quotes.length;
    }
  }
});
