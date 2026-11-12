<template>
  <main class="recipe-container">
    <div class="card">
      <h1 class="title">Hobbits de LOTR</h1>

      <p class="subtitle">
        Descobreix, explora i consulta tots els hobbits que surten a l'obra de Tolkien
      </p>

      <SearchBar @cercar="actualitzarCerca" />

      <p v-if="loading">Carregant personatges...</p>

      <p v-else-if="error">
        Error en carregar els personatges: {{ error }}
      </p>

      <llistatPersonatges
        v-else
        :personatges="personatgesFiltrats"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import SearchBar from '@/components/searchBar.vue';
import llistatPersonatges from '@/components/llistatPersonatges.vue';
import { useFetch } from '@/composables/useFetch';

const { data, error, loading } =
  useFetch('https://the-one-api.dev/v2/character?race=Hobbit');

const cercaAplicada = ref('');

const actualitzarCerca = (nouText) => {
  cercaAplicada.value = nouText;
};

const personatgesFiltrats = computed(() => {
  const llista = data.value?.docs ?? [];
  if (!cercaAplicada.value.trim()) return llista;

  return llista.filter(p =>
    p.name.toLowerCase().includes(cercaAplicada.value.toLowerCase().trim())
  );
});
</script>