<template>
    <div class="card">
        <h3>{{ nom }}</h3>
        <p>{{ race }}</p>
    </div>
</template> 
<script setup>
defineProps({
    nom: String,
    race: String
})
</script>