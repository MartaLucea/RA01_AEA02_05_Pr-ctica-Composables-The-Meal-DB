<script setup></script>

<template>
  <div class="app-layout">
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Inici</RouterLink>
    </nav>

    <main class="main-content">
      <RouterView :key="$route.fullPath" />
    </main>
  </div>
</template>

<style scoped>
</style>
