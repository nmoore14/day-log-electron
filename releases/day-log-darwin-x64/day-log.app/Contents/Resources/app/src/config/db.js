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
export const db = app.database();
