<template>
    <div v-if="personatges.length === 0">
        <p>No hi ha personatges amb aquest nom</p>
    </div>

    <div v-else class="llistat">
        <CartaPersonatge
            v-for="p in personatges"
            :key="p._id"
            :personatge="p"
        />
    </div>
</template>

<script setup>
import CartaPersonatge from './cartaPersonatge.vue';

defineProps({
    personatges: {
        type: Array,
        default: () => []
    }
});
</script>
