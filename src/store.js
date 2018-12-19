import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quotes: [],
    notes: [],
    todos: [],
    todosCompleted: []
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
    GET_TODOS: (state, todoLoad) => {
      state.todos = [];
      state.todosCompleted = [];
      for (let i = 0; i < todoLoad.length; i++) {
        if (!todoLoad[i].completed) {
          state.todos.push(todoLoad[i]);
        } else {
          state.todosCompleted.push(todoLoad[i]);
        }
      }
    },
    ADD_NOTE: (state, noteAdd) => {
      state.notes.push(noteAdd);
    },
    ADD_TODO: (state, todoAdd) => {
      state.todos.push(todoAdd);
    }
  },
  actions: {},
  getters: {
    quoteCount: state => {
      return state.quotes.length;
    },
    todoCount: state => {
      return state.todos.length + state.todosCompleted.length;
    },
    completeCount: state => {
      return state.todosCompleted.length;
    }
  }
});
