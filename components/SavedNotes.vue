<template>
    <section>
        <h1>Notas pasadas</h1>
        <input v-model="onlyBookmarked" type="checkbox" name="bookmarked">
        <label for="bookmarked">Mostrar sólo favoritos</label>
        <div class="card" v-for="note in store.filteredNotes(onlyBookmarked)">
            <div @click="() => bookmarkNote(note.id)" v-bind:class="note.bookmarked ? 'star bookmark' : 'star'">&#9734;</div>
            <div @click="() => selectNote(note.id)" class="text-container">
                <span class="text">{{note.note}}</span>
            </div>
            <div class="close-container">
                <span @click.stop="() => deleteNote(note.id)" class="close">&#x2715</span>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import { useNotesStore } from '../store/notes'

    const onlyBookmarked = ref(false)
    const store = useNotesStore()

    const deleteNote = (id) => {
        store.deleteNote(id)
    }

    const selectNote = (id) => {
        store.currentNote = store.noteById(id).note
    }

    const bookmarkNote = (id) => {
        store.toggleBookmark(id)
    }
</script>

<style>
    .star {
        width: 10%;
    }

    .bookmark {
        font-weight: bold;
        color: gold;
    }

    .card {
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        width: 500px;
        display: flex;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 2px 2px 1px; 
        font-weight: bold;
    }

    .text-container {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        width: 95%
    }

    .close-container {
        width: 5%;
    }

    .close {
        float: right;
    }
</style>