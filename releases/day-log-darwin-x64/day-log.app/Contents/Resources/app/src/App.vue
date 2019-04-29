<template>
  <div id="app" style="-webkit-app-region: drag" class="font-sans flex min-h-screen">
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import { db } from "./config/db";
import { mapMutations } from "vuex";

export default {
  firebase: {
    quotes: db.ref("quotes"),
    todoDB: db.ref("todos"),
    notesDB: db.ref("notes")
  },
  components: {
    sidebar: Sidebar
  },
  data() {
    return {
      quotesStored: [],
      notesStored: [],
      todosStored: []
    };
  },
  methods: {
    ...mapMutations(["GET_QUOTES", "GET_TODOS", "GET_NOTES"]),
    mergeQuotes() {
      this.GET_QUOTES(this.quotesStored);
    },
    mergeTodos() {
      this.GET_TODOS(this.todosStored);
    },
    mergeNotes() {
      this.GET_NOTES(this.notesStored);
    }
  },
  mounted() {
    this.quotesStored = this.quotes;
    this.todosStored = this.todoDB;
    this.notesStored = this.notesDB;
  },
  watch: {
    quotesStored: function() {
      if (this.quotesStored.length > 0) {
        this.mergeQuotes();
      }
    },
    todosStored: function() {
      if (this.todosStored.length > 0) {
        this.mergeTodos();
      }
    },
    notesStored: function() {
      if (this.notesStored.length > 0) {
        this.mergeNotes();
      }
    }
  }
};
</script>


<style src="./assets/main.css">

