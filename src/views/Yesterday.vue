<template>
  <div class="bg-black text-white flex-1 ml-56 p-3">
    <div class="flex-1">
      <h1 class="text-5xl text-right font-sans font-thin">Yesterday</h1>
    </div>
    <div class="flex-1 flex-col bg-grey-light m-2 p-4">
      <todo-archive></todo-archive>
    </div>
  </div>
</template>

<script>
import TodoArchive from "../components/TodoArchive.vue";

// @ is an alias to /src
export default {
  name: "yesterday",
  components: {
    TodoArchive
  }
};
</script>
