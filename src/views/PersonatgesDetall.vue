<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useFetch } from '@/composables/useFetch';
import { computed, watch } from 'vue';

const route = useRoute()
const router = useRouter()

const { data, error, loading, refetch } =
  useFetch(() => `https://the-one-api.dev/v2/character/${route.params.id}`)

const { data: frases, error: errorFrases, refetch: refetchFrases } =
  useFetch(() => `https://the-one-api.dev/v2/character/${route.params.id}/quote`)

const { data: movies, error: errorMovies } =
  useFetch('https://the-one-api.dev/v2/movie')

const personatge = computed(() => data.value?.docs?.[0] ?? null)

watch(() => route.params.id, (nouId, vell) => {
  if (nouId && nouId !== vell) {
    refetch()
    refetchFrases()
  }
})

watch(data, (nouValor) => {
  if (nouValor && nouValor.docs?.length === 0) {
    router.replace({ name: 'notfound' })
  }
})

const trobarPeli = (idPeli) => {
  if (!movies.value?.docs) return 'Carregant...'
  const peli = movies.value.docs.find(n => n._id === idPeli)
  return peli ? peli.name : 'Pel·lícula desconeguda'
}

const camps = [
  ['race', 'Raça'],
  ['birth', 'Data de naixement'],
  ['gender', 'Gènere'],
  ['death', 'Mort'],
  ['hair', 'Color de cabell'],
  ['realm', 'Regne'],
  ['spouse', 'Esposa'],
]
</script>

<template>
  <div v-if="error">
    <h2>Hi ha hagut un error al buscar al personatge</h2>
    <RouterLink to="/" class="back-link">Torna enrere</RouterLink>
  </div>
  <p v-else-if="loading">Carregant el personatge...</p>
  <div v-else-if="personatge" class="card">
    <h1 class="title">{{ personatge.name }}</h1>
    <RouterLink to="/" class="back-link">Torna enrere</RouterLink>

    <template v-for="[clau, etiqueta] in camps" :key="clau">
      <p v-if="personatge[clau]">{{ etiqueta }} - {{ personatge[clau] }}</p>
    </template>

    <div v-if="!errorFrases && !errorMovies">
      <div v-for="f in frases?.docs" :key="f._id">
        <p>{{ f.dialog }}</p>
        <p>{{ trobarPeli(f.movie) }}</p>
      </div>
    </div>
  </div>
</template>