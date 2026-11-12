<template>
    <div class="card">
        <h3>{{ nom }}</h3>
        <p>{{ race }}</p>
        <RouterLink :to="`/personatges/${id}`" class="nav-link">Mes informació</RouterLink>
    </div>
</template> 
<script setup>
defineProps({
    id: String,
    nom: String,
    race: String,
})
</script>