<template>
  <div class="index-page">
    <h2>Welcome to Nuxt Middleware</h2>
    <p v-if="user">Logged in as {{ user.username }} with role: {{ user.role }}</p>
    <p v-else>Please log in to access your account and explore.</p>
  </div>
</template>

<script setup>
const user = useCookie('user')

// named middleware
definePageMeta({
  middleware: []
})
</script>

<style scoped>
.index-page {
  text-align: center;
  padding: 40px 20px;
  background-color: #f0f0f5;
  color: #333;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.index-page h2 {
  font-size: 2.2em;
  margin-bottom: 20px;
  color: #1a237e;
}

.index-page p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
}
</style>