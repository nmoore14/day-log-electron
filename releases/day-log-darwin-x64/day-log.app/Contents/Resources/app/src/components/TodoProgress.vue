<template>
<div class="width-2/5">
  <span>
    <h3 class="font-lighter ml-16">Todos Status</h3>
  </span>
  <svg width="240" height="240" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="54" fill="none" stroke="#3d4852" stroke-width="4" />
    <circle class="mainCircle" cx="60" cy="60" r="54" fill="none" stroke="#4dc0b5" stroke-width="6" stroke-dasharray="339.292" :stroke-dashoffset="strokeOffset" /> 
  </svg>
  <span class="absolute -ml-34 mt-16">
    <h4 class="text-6xl font-thin">{{ completeCount }}</h4>
    <p class="-mt-3">/ {{ todoCount }}</p>
  </span>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      radius: 339.292,
      total: 10,
      fraction: 8
    };
  },
  computed: {
    ...mapGetters(["todoCount", "completeCount"]),
    strokeOffset() {
      let percentage = this.completeCount / this.todoCount;
      let offset = this.radius * percentage;
      return this.radius - offset;
    }
  },
  methods: {
    setTodoRing() {
      this.total = this.todoCount;
    }
  },
  mounted() {
    this.setTodoRing();
  }
};
</script>


<style scoped>
svg {
  transform: rotate(-90deg);
}

.mainCircle {
  filter: blur(5px);
  stroke-linecap: round;
}
</style>
