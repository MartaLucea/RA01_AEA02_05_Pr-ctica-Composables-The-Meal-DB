<template>
    <div v-if="personatges.lenght === 0">
        <p>No hi han personatges amb aquest nom</p>
    </div>
    <div v-else>
        <CartaPersonatge
            v-for="p in personatges"
            :key="p.id"
            :nom="p.name"
            :race="p.race"
        />
    </div>
</template>

<script setup>
import CartaPersonatge from './cartaPersonatge.vue';

    defineProps({
        personatges: JSON
    })
</script>