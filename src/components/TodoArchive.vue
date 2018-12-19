<template>
  <div class="main">
    <h2 class="text-grey-darkest">Test</h2>
    <ul v-for="(todo, index) in todosCompleted" :key="index">
      <li>{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("todosCompleted", "notes")
  }
};
</script>

<style scoped>
</style>
