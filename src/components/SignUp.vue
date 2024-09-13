<!-- <template>
  <div class="signup-container">
    <form @submit.prevent="registerUser">
      <label for="firstName">First Name:</label>
      <input v-model="firstName" type="text" required />

      <label for="lastName">Last Name:</label>
      <input v-model="lastName" type="text" required />

      <label for="emailAdd">Email:</label>
      <input v-model="emailAdd" type="email" required />

      <label for="userPass">Password:</label>
      <input v-model="userPass" type="password" required />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      emailAdd: '',
      userPass: '',
    };
  },
  methods: {
    async registerUser() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        userPass: this.userPass,
      };
      try {
        const response = await this.$store.dispatch('registerUser', user);
        if (response) {
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  width: 25rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

</style> -->


<template>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            v-model="payload.firstName"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="payload.lastName"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Gender"
            v-model="payload.Gender"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Role e.g. user"
            v-model="payload.userRole"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Email Address"
            v-model="payload.emailAdd"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="payload.userPass"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Profile Picture URL"
            v-model="payload.userProfile"
            required
          />
        </div>
      </div>
      <div class="form-footer">
        <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
    </form>

    <div v-if="loading" class="loading-spinner">
      <Spinner />
    </div>

    <div v-if="showModal" class="modal fade show d-block" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="successModalLabel">Success</h5>
          </div>
          <div class="modal-body">
            <p>You have successfully signed up! Click the button below to log in.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
            <button type="button" class="btn btn-primary" @click="redirectToLogin">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'SignUp',
  components: {
    Spinner
  },
  data() {
    return {
      payload: {
        firstName: "",
        lastName: "",
        userAge: null,
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      },
      showModal: false,
      loading: false,
    };
  },
  methods: {
    async register() {
      this.loading = true;
      try {
        await this.$store.dispatch('register', this.payload);
        this.showModal = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    redirectToLogin() {
      this.showModal = false;
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.signup-container {
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

.form-control {
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.form-footer {
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

.modal-content {
  background-color: #f8f9fa;
  border-radius: 8px;
}

.modal-header {
  border-bottom: none;
  padding: 1.5rem 1.5rem 0.5rem;
}

.modal-footer {
  border-top: none;
  padding: 0.5rem 1.5rem 1.5rem;
}

.modal-title {
  color: #333;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.loading-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
</style>