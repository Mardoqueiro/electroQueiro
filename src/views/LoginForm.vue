<template>
  <main class="main">
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
  </main>
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
</script>


<!-- <script>
import axios from "axios";

export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post("/api/login", {
          emailAdd: this.email,
          userPass: this.password,
        });

        if (response.data.token) {
          // Handle successful login
          localStorage.setItem("token", response.data.token);
          this.$emit("close");
          // Redirect or update UI accordingly
        } else {
          alert(response.data.msg || "Login failed.");
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        alert("Failed to login. Please check your credentials.");
      }
    },
  },
};
</script> -->




<!-- <template>
  <div></div>
  <div class="container-fluid auth-container imglog">
    <div class="center-container">
      <div class="text-center">
        <h1>Electro Quéiro</h1>
        <div class="auth-buttons" v-if="!showForm">
          <button @click="showForm = 'login'" class="btn">Login</button>
          <button @click="showForm = 'signup'" class="btn">Register</button>
        </div>
      </div>
      <Login v-if="showForm === 'login'" @close="showForm = null" />
      <SignUp v-if="showForm === 'signup'" @close="showForm = null" />
    </div>
  </div>
  
</template>

<script>

import SignUp from '../components/SignUp.vue';
import Login from '../components/LoginComp.vue';

export default {
  name: 'AuthOptions',
  components: {
    SignUp,
    Login,
  },
  data() {
    return {
        showForm: null, 
    };
  },
};
</script>

<style scoped>

</style> -->