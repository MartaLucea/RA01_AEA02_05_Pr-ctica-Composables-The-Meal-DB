import { ref, onMounted } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const fetchData = async () => {
    console.log("hola")
    loading.value = true;
    error.value = null;

    try {
    const token = '4nd0ZXeMcwvmzN4Pee8U';

    const res = await fetch(url,{ 
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
      if (!res.ok) {
        throw new Error('Error en la peticio: ' + res.status);
      }

      data.value = await res.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);

  return { data, error, loading, refetch: fetchData };
  //return { data, error, loading, fetchData };
}
