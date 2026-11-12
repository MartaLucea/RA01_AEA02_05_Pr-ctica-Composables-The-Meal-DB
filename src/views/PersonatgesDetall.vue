<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useFetch } from '@/composables/useFetch';
import { watch } from 'vue';

const route = useRoute()
const router = useRouter()
const id = String(route.params.id)

const { data, error, loading, refetch } =
  useFetch(`https://the-one-api.dev/v2/character/${id}`);

const { data:frases, error:errorFrases} =
  useFetch(`https://the-one-api.dev/v2/character/${id}/quote`);

const { data:movies, error:errorMovies} =
  useFetch(`https://the-one-api.dev/v2/movie`);

watch(data, (nuevoValor) =>{
  if (nuevoValor && nuevoValor.docs?.length === 0) {
    router.replace({ name: 'notfound' })
  }
})

const trobarPeli = (id) => {
  if (!movies.value?.docs) return 'Carregant...'

  const peli = movies.value.docs.find(n => n._id === id)

  return peli ? peli.name : 'Pel·lícula desconeguda'
}

</script>

<template>
  <div v-if="error">
    <h2>Hi ha hagut un error al buscar al personatge</h2>
    <RouterLink :to="`/`" class="back-link">Torna enrere</RouterLink>
  </div>
  <p v-else-if="loading">Carregant el personatge...</p>
  <div v-else class="card">
      <h1 class="title">{{ data.docs[0].name }}</h1>
      <RouterLink :to="`/`" class="back-link">Torna enrere</RouterLink>

      <p v-if="data.docs[0].race != null">
        Raça - {{ data.docs[0].race }}
      </p>
      <p v-if="data.docs[0].birth != null">
        Data de naixement - {{ data.docs[0].birth }}
      </p>
      <p v-if="data.docs[0].gender != null">
        Genere - {{ data.docs[0].gender }}
      </p>
      <p v-if="data.docs[0].death != null">
        Mort - {{ data.docs[0].death }}
      </p>
      <p v-if="data.docs[0].hair != null">
        Color de cabell - {{ data.docs[0].hair }}
      </p>
      <p v-if="data.docs[0].realm != null">
          Regne - {{ data.docs[0].realm }}
      </p>
      <p v-if="data.docs[0].spouse != null">
          Esposa - {{ data.docs[0].spouse }}
      </p>

      <div v-if="!errorFrases && !errorMovies">
        <div v-for="f in frases?.docs" :key="f._id">
            <p>{{ f.dialog }} </p>
            <p>{{ trobarPeli(f.movie) }}</p>
        </div>
      </div>
    </div>
</template>
