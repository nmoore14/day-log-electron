<template>
	<div class="bg-grey-darkest rounded text-center pt-10 ml-8 w-full">
		<h1 class="font-sans font-hairline text-3xl">Quote of the day:</h1>
    <h3 class="font-sans font-thin text-5xl">{{quotes[randInt].content}}</h3>
    <p class="font-serif font-light text-xl">{{quotes[randInt].author}}</p>
	</div>	
</template>

<script>
import { eventBus } from '../main.js';
import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyACdz4Ho9nb98MiMXt1vWeG0VrvO-7CZuo",
  authDomain: "day-log-aa5a4.firebaseapp.com",
  databaseURL: "https://day-log-aa5a4.firebaseio.com",
  projectId: "day-log-aa5a4",
  storageBucket: "day-log-aa5a4.appspot.com",
  messagingSenderId: "921245673762"
};

let app = Firebase.initializeApp(config);
let db = app.database();
let quoteRef = db.ref("quotes");
console.log(quoteRef);

export default {
  data() {
    return {
      quoteContent: "",
      quoteAuthor: "",
      randInt: 0
    }
  },
  firebase: {
    quotes: db.ref("quotes")
  },
  methods: {
    getRandInt() {
      let randIntGen = Math.floor(Math.random() * 4) + 1 - 1;
      this.randInt = randIntGen;
    },
    sendQuotes() {
      eventBus.$emit('quotesLoad', db.ref("quotes"));
    }
  },
  mounted() {
    this.getRandInt();
  },
};
</script>
