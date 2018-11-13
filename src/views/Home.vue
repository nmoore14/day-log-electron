<template>
  <div class="bg-black text-white flex-1 ml-56 p-3">
    <div class="flex-1">
      <h1 class="text-5xl text-center font-sans font-thin">Welcome</h1>
      <div class="flex">
        <todo-progress></todo-progress>
      </div>
    </div>
  </div>
</template>

<script>
import TodoProgress from '../components/TodoProgress.vue';
// @ is an alias to /src
export default {
  name: "home",
  components: {
    todoProgress: TodoProgress
  }
};
</script>
