<template>
  <main class="recipe-container">
    <div class="card">
      <h1 class="title">Index d'alguns personatges de LOTR</h1>
      <p class="subtitle">Descobreix, explora i consulta alguns dels personatges creats per Tolkien</p>
      <llistatPersonatges/>
    </div>
  </main>
</template>

<script setup>
  import llistatPersonatges from '@/components/llistatPersonatges.vue';
  import { useFetch } from '@/composables/useFetch';
  const {data, error, loagin, refetch} = useFetch('https://the-one-api.dev/v2/character?race=Hobbit')
</script>
