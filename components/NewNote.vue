<template>
    <section>
        <h1>Escribe una nueva nota</h1>
        <textarea v-model="store.currentNote" placeholder="Escribe una nueva nota"></textarea>
        <div>
            <button @click="submit">Guardar</button>
        </div>
    </section>
</template>

<script setup>
    import { watchEffect } from 'vue'
    import { useNotesStore } from '../store/notes'
    const store = useNotesStore()
    
    const submit = () => {
        store.addNote(store.currentNote)
        store.currentNote = ''
    }
</script>

<style>
    section {
        flex-direction: column;
    }

    textarea {
        height: 50vh;
        width: 80%;
    }
</style>