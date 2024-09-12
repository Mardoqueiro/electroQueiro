<template>
  <div></div>
  <div class="container-fluid auth-container imglog">
    <div class="center-container">
      <div class="text-center">
        <h1>Welcome to Luxury Cars</h1>
        <div class="auth-buttons" v-if="!showForm">
          <button @click="showForm = 'login'" class="btn">Login</button>
          <button @click="showForm = 'signup'" class="btn">Sign Up</button>
        </div>
      </div>
      <Login v-if="showForm === 'login'" @close="showForm = null" />
      <SignUp v-if="showForm === 'signup'" @close="showForm = null" />
    </div>
  </div>
  
</template>

<script>

import SignUp from '../components/SignUp.vue';
// import Login from '../components/LoginForm.vue';

export default {
  name: 'AuthOptions',
  components: {
    SignUp,
    // Login,
  },
  data() {
    return {
        showForm: null, 
    };
  },
};
</script>
