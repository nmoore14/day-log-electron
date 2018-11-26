<template>
  <div class="bg-black text-white flex-1 ml-56 p-3">
    <h1 class="text-5xl text-right font-sans font-thin">Welcome</h1>
    <div class="inline-flex width-screen">
      <app-todo-progress></app-todo-progress>
      <app-quotes></app-quotes>
    </div>
    <div class="flex width-2/3 mt-7">
      <app-notes></app-notes>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import TodoProgress from "../components/TodoProgress.vue";
import Quotes from "../components/Quotes.vue";
import Notes from "../components/Notes.vue";
// @ is an alias to /src
export default {
  name: "home",
  components: {
    "app-todo-progress": TodoProgress,
    "app-quotes": Quotes,
    "app-notes": Notes,
    quotes: []
  },
  created() {
  eventBus.$on('quotesLoad', (data) => {
    this.quotes.push(data);
    })
	}
};
</script>
