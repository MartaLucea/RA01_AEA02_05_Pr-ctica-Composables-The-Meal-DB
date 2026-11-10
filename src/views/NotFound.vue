<script setup>
</script>

<template>
  <main class="notfound-container">
    <div class="card">
      <h3 class="title">Pàgina no trobada</h3>
      <p class="subtitle">Comprova la URL o torna a l'inici</p>
      <RouterLink to="/" class="btn">Torna a la llista</RouterLink>
    </div>
  </main>
</template>

<style scoped>
@import url('https://googleapis.com');

.notfound-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
}

.card {
  background: #1e293b;
  border-radius: 20px;
  padding: 40px;
  max-width: 460px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.icon-badge {
  font-size: 3.5rem;
  margin-bottom: 16px;
}

.title {
  color: #f8fafc;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 12px 0;
}

.subtitle {
  color: #94a3b8;
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0 0 32px 0;
}

.btn {
  display: inline-block;
  background: #3b82f6;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 12px;
  padding: 14px 28px;
  transition: background 0.2s ease;
}

.btn:hover {
  background: #2563eb;
}
</style>
