<template>
	<div class="bg-grey-darkest text-center ml-2">
		<h1 class="font-sans font-hairline">Quotes</h1>
		<p v-for="(data, index) in myQuotes" :key="index" class="p-3">{{ data }}</p>
	</div>	
</template>

<script>
import sayings from "../assets/inspQuotes.json";
export default {
  data() {
    return {
      myQuotes: sayings
    };
  }
};
</script>
