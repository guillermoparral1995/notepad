import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        id: 0,
        currentNote: '',
        notes: []
    }),
    actions: {
        addNote(note) {
            this.notes.push({note, id: this.id++, bookmarked: false})
        },

        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },

        toggleBookmark(id) {
            const note = this.noteById(id)
            note.bookmarked = !note.bookmarked
        }
    },
    getters: {
        noteById(state) { 
            return (id) => state.notes.find(note => note.id === id)
        },
        filteredNotes(state) {
            return (onlyBookmarked) => onlyBookmarked ? state.notes.filter(note => note.bookmarked) : state.notes
        }
    }
})