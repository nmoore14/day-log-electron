<template>
	<div class="bg-grey-darkest rounded text-center pt-10 ml-2">
		<h1 class="font-sans font-hairline">Quote of the day:</h1>
		<h3 class="font-sans font-thin text-5xl">{{ myQuote.content }}</h3>
		<p class="font-sans text-xl font-thin">~ {{ myQuote.author }}</p>
	</div>	
</template>

<script>
export default {
  data() {
    return {
      myQuote: {
        content:
          "Sometimes life hits you in the head with a brick. Don't loose faith.",
        author: "Steve Jobs"
      }
    };
  }
};
</script>
