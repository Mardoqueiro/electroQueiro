<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="emailAdd" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="userPass" required />
      </div>
      <div class="button-group">
        <button type="submit">Login</button>
        <button class="btn" @click="$emit('close')">Close</button>
      </div>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      emailAdd: '',
      userPass: '',
      error: ''
    };
  },
  methods: {

    login() {
      this.$store.dispatch('login', {
        emailAdd: this.emailAdd , userPass: this.userPass
      })
    }

  }
};
</script> 

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button-group button {
  flex: 1;
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-group button:hover {
  background-color: #ddd; 
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>