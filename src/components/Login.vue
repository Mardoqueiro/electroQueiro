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

  <!-- <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="email" id="email" v-model="emailAdd" required placeholder="Email Address" />
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="userPass" required placeholder="Password" />
      </div>
      <div class="button-group">
        <button type="submit" class="btn btn-primary">Login</button>
        <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
      </div>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div> -->
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
  //   login() {
  //     this.$store.dispatch('login', {
  //       emailAdd: this.emailAdd, userPass: this.userPass
  //     }).catch(error => {
  //       this.error = `Login failed: ${error.message}`;
  //     });
  //   }
  // }

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
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.form-group {
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex: 1;
  margin: 0 0.5rem;
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
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error {
  color: #dc3545;
  text-align: center;
  margin-top: 1rem;
}

@media (max-width: 480px) {
  .login-container {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  .button-group {
    flex-direction: column;
  }

  .btn {
    margin: 0.5rem 0;
  }
}
</style>