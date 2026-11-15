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
        :personatges="personatges"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import SearchBar from '@/components/searchBar.vue';
import llistatPersonatges from '@/components/llistatPersonatges.vue';
import { useFetch } from '@/composables/useFetch';

const cercaAplicada = ref('')

const escaparRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const url = computed(() => {
  const base = 'https://the-one-api.dev/v2/character?race=Hobbit';
  const text = cercaAplicada.value.trim();
  if (!text) return base;
  return `${base}&name=${encodeURIComponent(`/${escaparRegex(text)}/i`)}`;
});

const { data, error, loading, refetch } = useFetch(url);

const personatges = computed(() => data.value?.docs ?? []);

const actualitzarCerca = (nouText) => {
  cercaAplicada.value = nouText;
  refetch();
};
</script>