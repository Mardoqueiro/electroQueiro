<template>
  <div class="auth-page">
    <div class="container-fluid auth-container imglog">
      <div class="center-container">
        <div class="text-center">
          <h1 class="welcome-title">Welcome to Luxury Cars</h1>
          <div class="auth-buttons" v-if="!showForm">
            <button @click="showForm = 'login'" class="btn btn-primary">Login</button>
            <button @click="showForm = 'signup'" class="btn btn-secondary">Sign Up</button>
          </div>
        </div>
        <Login v-if="showForm === 'login'" @close="showForm = null" />
        <SignUp v-if="showForm === 'signup'" @close="showForm = null" />
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';

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
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://mardoqueiro.github.io/Capstone.Image/Landscape.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.auth-container {
  max-width: 400px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.welcome-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.auth-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border: none;
}

.btn:hover {
  opacity: 0.9;
}
</style>
