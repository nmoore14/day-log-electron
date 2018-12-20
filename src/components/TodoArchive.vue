<template>
  <div class="main overflow-scroll">
    <div
      class="flex w-1/2 text-grey-darkest fixed text-center text-grey-lightest p-2 bg-teal rounded"
    >
      <h2 class="flex-1 w-2/3 p-2 font-sans font-light">Completed Todo's</h2>
      <template v-if="todosCompleted.length >= 4" class="flex-1 w-1/3">
        <p class="pt-3 font-sans font-thin">Scroll to see more</p>
      </template>
    </div>
    <div class="listContianer mt-16">
      <ul class="list-reset rounded" v-for="(todo, index) in todosCompleted" :key="index">
        <li class="flex w-full p-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            class="m-1 hover:bg-red-lighter p-2 rounded"
            @click="removeTodo(todo['.key'], index)"
          >
            <path
              d="M704 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 
						23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 
						9-23t23-9h64q14 0 23 9t9 23zm128 724v-948h-896v948q0 22 7 40.5t14.5 27 10.5 8.5h832q3 0 10.5-8.5t14.5-27 
						7-40.5zm-672-1076h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 
						0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
              fill="#CC1F1A"
            ></path>
          </svg>
          <h2 class="font-sans font-light text-teal-darkest w-2/5 mt-3">{{ todo.title }}</h2>
          <p class="font-sans font-thin text-grey-darkest w-2/5 text-center">Date Completed:
            <br>
            {{ todo.dateCompleted }}
          </p>
          <p class="font-sans font-thin text-grey-darkest w-1/5 text-center">Days Active:
            <br>
            {{ todo.span }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from "../config/db";
import { mapState } from "vuex";

let todosRef = db.ref("todos");

export default {
  firebase: {
    todosDB: todosRef
  },
  data() {
    return {
      archivedTodos: []
    };
  },
  computed: {
    ...mapState(["todosCompleted"])
  },
  methods: {
    removeTodo(key, index) {
      todosRef.child(key).remove();
      this.todosCompleted.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.main {
  height: 20rem;
}

ul:nth-child(odd) {
  background-color: #b8c2cc;
}

svg:hover {
  cursor: pointer;
}
</style>
