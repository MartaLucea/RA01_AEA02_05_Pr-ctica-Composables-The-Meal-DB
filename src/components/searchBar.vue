<template>
  <div class="search-bar">
    <input
      v-model="textCerca"
      class="buscador"
      type="text"
      placeholder="Cerca un hobbit..."
    />
    <button @click="enviarCerca">Cercar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['cercar']);

const textCerca = ref('');

const enviarCerca = () => {
  emit('cercar', textCerca.value);
};
</script>