<template>
<div class="container width-2/5">
  <span>
    <h3 class="font-lighter ml-10">Todos Completed</h3>
  </span>
  <svg width="240" height="240" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="54" fill="none" stroke="#3d4852" stroke-width="4" />
    <circle class="mainCircle" cx="60" cy="60" r="54" fill="none" stroke="#4dc0b5" stroke-width="6" stroke-dasharray="339.292" :stroke-dashoffset="strokeOffset" /> 
  </svg>
  <span class="absolute -ml-32 mt-18">
    <h4 class="text-6xl -ml-10 font-thin">{{ fraction }}</h4>
    <p class="-mt-5 ml-5">/ {{ total }}</p>
  </span>
</div>
</template>

<script>
export default {
  data() {
    return {
      radius: 339.292,
      total: 50,
      fraction: 10
    };
  },
  computed: {
    strokeOffset() {
      let percentage = this.fraction / this.total;
      let offset = this.radius * percentage;
      return this.radius - offset;
    }
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
