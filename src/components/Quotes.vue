<template>
	<div class="bg-grey-darkest rounded text-center pt-10 ml-2">
		<h1 class="font-sans font-hairline">Quote of the day:</h1>
    <h3>{{quotes[randInt].content}}</h3>
    <p>{{quotes[randInt].author}}</p>
	</div>	
</template>

<script>
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
    }
  },
  mounted() {
    this.getRandInt();
  }
};
</script>
