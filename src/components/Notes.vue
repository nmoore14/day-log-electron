<template>
  <div class="flex-col p-3">
    <div class="flex-1">
      <h3 class="text-left font-sans font-thin">Notes:</h3>
    </div>
    <div class="flex-1">
      <textarea
        name="notes_home"
        id="notes-home"
        cols="112"
        rows="12"
        class="bg-grey-light font-sans font-thin text-xl rounded p-2"
        placeholder="Note Content..."
        v-model="newNote.content"
      ></textarea>
    </div>
    <div class="flex-1 w-full h-12">
      <button
        class="h-12 w-full bg-teal rounded text-white font-sans font-thin hover:bg-teal-darker"
        @click="addNote()"
      >Add Note</button>
    </div>
  </div>
</template>

<script>
import { db } from "../config/db";
import { mapMutations } from "vuex";
import toastr from "toastr";

let notesRef = db.ref("notes");

export default {
  firebase: {
    notes: notesRef
  },
  data() {
    return {
      newNote: {
        content: "",
        noteDate: ""
      },
      notesStored: this.notesRef
    };
  },
  methods: {
    ...mapMutations(["ADD_NOTE", "GET_NOTES"]),
    mergeNotes() {
      this.GET_NOTES(this.notesStored);
    },
    addNote() {
      let d = new Date();
      let month = d.getMonth();
      let day = d.getDay();
      let year = d.getFullYear();
      let now = `${month}-${day}-${year}`;

      if (this.newNote.content != "") {
        this.newNote.noteDate = now;
        notesRef.push(this.newNote);
        this.ADD_NOTE(this.newNote);
        toastr.success("Note added successfully!", "Note Success");
        this.newNote.content = "";
        this.newNote.noteDate = "";
      } else {
        toastr.error("Note content cannot be empty", "Note Error");
      }
    }
  },
  mounted() {
    if (this.notes.length > 0) {
      this.notesStored = this.notes;
    }
  },
  watch: {
    notesStored: function() {
      if (this.notesStored.length > 0) {
        this.mergeNotes();
      }
    }
  }
};
</script>
