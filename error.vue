<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout>
    <div v-if="error" class="error-container">
      <h2>{{ error.statusCode }}</h2>
      <p>{{ error.statusMessage }}</p>
      <NuxtLink to="/" class="home-link">Go back home</NuxtLink>
    </div>
    <div v-else class="error-container">
      <h2>500</h2>
      <p>An unexpected error occurred</p>
      <NuxtLink to="/" class="home-link">Go back home</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.error-container {
  max-width: 500px;
  margin: 100px auto;
  padding: 30px;
  background-color: #fff3f3;
  border: 1px solid #f44336;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.error-container h2 {
  font-size: 3em;
  color: #d32f2f;
  margin: 0 0 10px;
}

.error-container p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1a237e;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #3949ab;
}
</style>
