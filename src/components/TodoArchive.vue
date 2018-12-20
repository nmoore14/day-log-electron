<template>
  <div class="main overflow-scroll">
		<div class="flex w-1/2 text-grey-darkest fixed text-center text-grey-lightest p-2 bg-teal rounded">
			<h2 class="flex-1 w-2/3 p-2 font-sans font-light">Completed Todo's</h2>
			<template v-if="todosCompleted.length > 5" class="flex-1 w-1/3">
				<p class="pt-3 font-sans font-thin">Scroll to see more</p>
			</template>
		</div>
    <div class="listContianer mt-16">
      <ul class="list-reset rounded" v-for="(todo, index) in todosCompleted" :key="index">
        <li class="flex w-full p-2">
          <h2 class="font-sans font-light text-teal-darkest w-2/5">{{ todo.title }}</h2>
          <p
            class="font-sans font-thin text-grey-darkest w-2/5 text-center"
          >Date Completed: <br />{{ todo.dateCompleted }}</p>
          <p class="font-sans font-thin text-grey-darkest w-1/5 text-center">Days Active:<br /> {{ todo.span }}</p>
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
</style>
