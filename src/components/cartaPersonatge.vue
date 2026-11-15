<template>
    <div class="card">
        <h3>{{ personatge.name }}</h3>
        <p>{{ personatge.race }}</p>
        <RouterLink :to="`/personatges/${personatge._id}`" class="nav-link">Mes informació</RouterLink>
    </div>
</template> 
<script setup>
defineProps({
  personatge: {
        type: Object,
        required: true,
  },
})
</script>