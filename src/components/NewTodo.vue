<template>
  <div class="flex-col w-full h-full">
    <div class="flex-1 bg-grey-light h-48 rounded items-center justify-center">
      <h1
        class="w-full font-sans font-light text-center text-2xl text-grey-darkest"
      >Enter a New Todo:</h1>
      <input
        type="text"
        placeholder="Todo Title"
        class="flex-1 w-2/5 bg-grey-lightest font-sans font-thin text-xl text-center rounded p-2 ml-68 shadow-md"
        v-model="newTodo.title"
      >
      <textarea
        name="notes_home"
        id="notes-home"
        cols="50"
        rows="2"
        class="flex-1 w-4/5 bg-grey-lightest font-sans font-thin text-xl rounded p-2 mt-2 ml-24 shadow-md"
        placeholder="Todo Body..."
        v-model="newTodo.body"
      ></textarea>
      <button
        class="w-96 ml-66 mt-1 text-white font-thin py-2 px-4 rounded shadow-md hover:shadow-lg hover:border-grey-lightest"
        id="todo-submit-btn"
        @click="addTodo()"
      >Add</button>
    </div>
    <div class="flex-1 w-full h-112 overflow-auto bg-grey-light mt-2 rounded"></div>
  </div>
</template>

<script>
import { db } from "../config/db";
import { mapMutations } from "vuex";
import toastr from "toastr";

let todosRef = db.ref("todos");

export default {
  firebase: {
    todos: todosRef
  },
  data() {
    return {
      newTodo: {
        title: "",
        body: "",
        completed: false,
        dateCompleted: "",
        dayEntered: 0,
        dayCompleted: 0,
        span: 0
      }
    };
  },
  methods: {
    ...mapMutations(["ADD_TODO"]),
    addTodo() {
      var d = new Date();
      var month = d.getMonth();
      var day = d.getDay();
      var year = d.getFullYear();

      var start = new Date(d.getFullYear(), 0, 0);
      var diff =
        d -
        start +
        (start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000;
      var oneDay = 1000 * 60 * 60 * 24;
      var daySpanStart = Math.floor(diff / oneDay);

      if (this.newTodo.title != "") {
        this.newTodo.dataAdded = month + "-" + day + "-" + year;
        this.newTodo.dayEntered = daySpanStart;
        todosRef.push(this.newTodo);
        this.ADD_TODO(this.newTODO);
        toastr.success("TODO added successfully!", "TODO Success");
        this.newTodo.title = "";
        this.newTodo.body = "";
      } else {
        toastr.error("TODO title cannot be empty", "TODO Error");
      }
    }
  }
};
</script>

<style scoped>
#todo-submit-btn {
  background: linear-gradient(90deg, #2196f3, #4dbfb4);
}
</style>
