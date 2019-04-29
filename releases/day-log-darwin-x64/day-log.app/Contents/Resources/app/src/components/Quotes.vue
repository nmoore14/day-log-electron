<template>
	<div class="bg-grey-darkest rounded text-center pt-10 ml-8 w-full">
		<h1 class="font-sans font-hairline text-3xl">Inspiration:</h1>
    <h3 class="font-sans font-thin text-5xl">{{ quotes[randInt].content }}</h3>
    <p class="font-serif font-light text-xl">{{ quotes[randInt].author }}</p>
	</div>	
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      randInt: 0
    };
  },
  computed: {
    ...mapState(["quotes"]),
    ...mapGetters(["quoteCount"])
  },
  methods: {
    getRandInt() {
      let randIntGen = Math.floor(Math.random() * this.quoteCount) + 1 - 1;
      this.randInt = randIntGen;
    }
  },
  mounted() {
    this.getRandInt();
  }
};
</script>
