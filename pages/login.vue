<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="Username" v-model="username" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
const user = useCookie('user')
const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')

const hardcodedUsers = {
  user: { password: 'user', role: 'user' },
  admin: { password: 'admin', role: 'admin' }
};

const login = () => {
  if (hardcodedUsers[username.value] && hardcodedUsers[username.value].password === password.value) {
    user.value = { username: username.value, role: hardcodedUsers[username.value].role };
    router.push('/');
  } else {
    errorMessage.value = 'Invalid username or password';
  }
};
</script>

<style scoped>
.login-form {
  width: 100%;
  max-width: 400px;
  margin: 80px auto;
  padding: 30px 40px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-form h2 {
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #1a237e;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  box-sizing: border-box;
}

.error-message {
  color: red;
  margin-bottom: 20px;
  font-size: 0.9em;
}

button {
  width: 100%;
  padding: 12px;
  background: #1a237e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3949ab;
}
</style>
