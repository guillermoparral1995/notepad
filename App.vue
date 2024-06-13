<template>
    <main>
        <div class="column"><NewNote></NewNote></div>
        <div class="column"><SavedNotes></SavedNotes></div>
    </main>
</template>

<script setup>
    import NewNote from './components/NewNote.vue'
    import SavedNotes from './components/SavedNotes.vue'
</script>

<style>
    main {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: space-between;
    }

    .column {
        width: 50%;
        text-align: center;
    }
</style>