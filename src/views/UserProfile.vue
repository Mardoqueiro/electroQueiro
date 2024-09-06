<template>
  <div class="register-form">
    <form @submit.prevent="handleSubmit">
      <!-- Form fields with v-model and validation -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit" :disabled="!isFormValid">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const isFormValid = computed(() => {
  // Implement validation logic
  return username.value && email.value && password.value;
});

const handleSubmit = async () => {
  try {
    await store.dispatch('register', { username: username.value, email: email.value, password: password.value });
    router.push('/dashboard');
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Registration failed';
  }
};
</script>

<style scoped>
@media (max-width: 768px) {

}
</style>