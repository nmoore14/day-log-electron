<template>
	<div class="bg-grey-darkest rounded text-center pt-10 ml-2">
		<h1 class="font-sans font-hairline">Quote of the day:</h1>
		<ul>
      <li v-for="(quote, index) in quotes" :key="index">{{ quote.content }}</li>
    </ul>
	</div>	
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      quoteContent: '',
      quoteAuthor: '',
      quoteIndex: 0
    };
  },
  mounted() {
    this.$store.dispatch('loadQuotes');
  },
  computed: mapState([
    'quotes'
  ])
};
</script>
