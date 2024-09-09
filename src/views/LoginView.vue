<template>
  <div class="section">
  <div class="auth-form">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" class="btn">Login</button>
    </form>
    <button @click="$emit('close')" class="btn secondary">Back</button>
  </div>
</div>
</template>

<script>
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
</script>

<style scoped>
/* Add your styles here */
.auth-form {
  /* styling for the form */
}
.form-group {
  margin-bottom: 15px;
}
</style>



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