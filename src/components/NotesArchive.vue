<template>
  <div class="main overflow-scroll">
    <div
      class="flex w-1/2 text-grey-darkest fixed text-center text-grey-lightest p-2 bg-teal rounded"
    >
      <h2 class="flex-1 w-2/3 p-2 font-sans font-light">Notes</h2>
      <template v-if="archivedNotes.length > 5" class="flex-1 w-1/3">
        <p class="pt-3 font-sans font-thin">Scroll to see more</p>
      </template>
    </div>
    <template v-if="archivedNotes.length > 0">
      <div class="listContianer mt-16">
        <ul class="list-reset rounded" v-for="(note, index) in archivedNotes" :key="index">
          <li class="flex-col w-full p-2">
            <h2
              class="flex-1 w-full font-sans font-thin text-3xl text-teal-darker"
            >{{ note.noteDate }}</h2>
            <p
              class="flex-1 w-full font-sans font-light text-lg text-grey-darkest"
            >{{ note.content}}</p>
            <button
              class="bg-red hover:bg-red-dark text-grey-lightest font-thin py-2 px-4 m-2 border border-grey-light rounded shadow"
              @click="removeNote(note['.key'], index)"
            >Remove / Delete</button>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <div class="listContianer mt-16">
        <h2
          class="flex-1 w-full font-sans font-thin text-3xl text-teal-darker"
        >No Archived Notes to list.</h2>
      </div>
    </template>
  </div>
</template>

<script>
import { db } from "../config/db";
import { mapState } from "vuex";

let notesRef = db.ref("notes");

export default {
  firebase: {
    notesDB: notesRef
  },
  computed: {
    ...mapState(["archivedNotes"])
  },
  methods: {
    removeNote(key, index) {
      notesRef.child(key).remove();
      this.archivedNotes.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.main {
  height: 20rem;
}

ul:nth-child(odd) {
  background-color: #b8c2cc;
}
</style>
