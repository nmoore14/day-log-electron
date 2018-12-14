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
    quotes: db.ref("quotes")
  },
  components: {
    sidebar: Sidebar
  },
  data() {
    return {
      quotesStored: [],
      notesStored: []
    };
  },
  methods: {
    ...mapMutations(["GET_QUOTES"]),
    mergeQuotes() {
      this.GET_QUOTES(this.quotesStored);
    }
  },
  mounted() {
    this.quotesStored = this.quotes;
  },
  watch: {
    quotesStored: function() {
      if (this.quotesStored.length > 0) {
        this.mergeQuotes();
      }
    }
  }
};
</script>


<style src="./assets/main.css">

