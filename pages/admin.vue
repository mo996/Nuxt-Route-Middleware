<template>
  <div class="admin-page">
    <div class="admin-card">
      <h2>🚨 Highly Secret Admin Page 🚨</h2>
      <p>This page is strictly for authorized admin users only.</p>
    </div>
  </div>
</template>

<script setup>
// named middleware
definePageMeta({
  middleware: ['admin']
})
</script>

<style scoped>
.admin-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background: #1a237e;
  color: #ffffff;
}

.admin-card {
  background: #ffffff;
  color: #333333;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.admin-card h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #d32f2f;
}

.admin-card p {
  font-size: 1.2em;
  margin-bottom: 15px;
}

.logout-button {
  background-color: #d32f2f;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #b71c1c;
}
</style>
