<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


</script>

<template>
  <div v-if="recepta" class="recipe-detail-view">
    <div class="recipe-container-detail">
      <div class="image-section">
        <img :src="recepta.imatge" :alt="recepta.nom" class="recipe-img">
      </div>
      
      <div class="content-section">
        <h1 class="recipe-title">{{ recepta.nom }}</h1>
        <p class="recipe-description">{{ recepta.descripcio }}</p>
        
        <div class="info-block">
          <p class="section-subtitle">Ingredients</p>
          <ul class="ingredients-list">
            <li v-for="(ingredient, index) in recepta.ingredients" :key="index" class="ingredient-item">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        
        <div class="info-block">
          <p class="section-subtitle">Pas a pas</p>
          <ol class="steps-list">
            <li v-for="(pas, index) in recepta.pasAPas" :key="index" class="step-item">
              {{ pas }}
            </li>
          </ol>
        </div>

        <div class="actions">
          <RouterLink :to="`/receptes`" class="back-link">Torna enrere</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://googleapis.com');

.recipe-detail-view {
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.recipe-container-detail {
  background: #1e293b;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.image-section {
  width: 100%;
  height: 350px;
  background: #334155;
}

.recipe-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-section {
  padding: 40px;
}

.recipe-title {
  color: #f8fafc;
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0 0 12px 0;
}

.recipe-description {
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 32px 0;
}

.info-block {
  margin-bottom: 32px;
}

.section-subtitle {
  color: #f8fafc;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.ingredient-item {
  color: #cbd5e1;
  background: #273549;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
}

.steps-list {
  padding-left: 20px;
  margin: 0;
}

.step-item {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.step-item::marker {
  color: #3b82f6;
  font-weight: 700;
}

.actions {
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 24px;
}

.back-link {
  display: inline-block;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #f8fafc;
}
</style>
