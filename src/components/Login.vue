<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log('Login:', this.email, this.password);
    }
  }
}
</script>

<!-- 
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
// import axios from 'axios';

export default {
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
</script> -->