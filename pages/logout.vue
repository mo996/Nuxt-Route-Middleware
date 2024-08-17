<template>
  <div class="logout-page">
    <h2>You have been logged out</h2>
    <p>Redirecting to login page...</p>
  </div>
</template>

<script setup>

// inline middleware
definePageMeta({
  middleware: function (to, from) {
    const user = useCookie('user')
    user.value = null
    
    return navigateTo('/login')
  }
})
</script>

<style scoped>
.logout-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  background-color: #f0f0f5;
  color: #333;
  text-align: center;
}

.logout-page h2 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #1a237e;
}

.logout-page p {
  font-size: 1.2em;
  color: #555;
}
</style>
