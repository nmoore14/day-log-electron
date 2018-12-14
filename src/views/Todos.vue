<template>
  <div class="bg-black text-white flex-1 ml-56 p-3">
    <div class="flex-1">
      <h1 class="text-5xl text-right font-sans font-thin">Todos</h1>
    </div>
    <div class="flex w-full p-4">
      <new-todo></new-todo>
    </div>
  </div>
</template>

<script>
import NewTodo from "../components/NewTodo";
// @ is an alias to /src

export default {
  name: "todos",
  components: {
    NewTodo
  }
};
</script>
