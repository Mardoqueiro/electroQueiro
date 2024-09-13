<template>
  <div class="user-profile">
    <NavBar />
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else-if="user" class="profile-container">
      <h2>User Profile</h2>
      <div class="profile-info">
        <p><strong>First Name:</strong> {{ user.firstName }}</p>
        <p><strong>Last Name:</strong> {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.emailAdd }}</p>
        <p><strong>Gender:</strong> {{ user.Gender }}</p>
        <p><strong>Role:</strong> {{ user.userRole }}</p>
      </div>
      <button @click="editProfile" class="edit-button">Edit Profile</button>
    </div>
    <div v-else class="error-message">
      <p>Unable to load user profile. Please try again later.</p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Spinner from '@/components/Spinner.vue';
import { useCookies } from 'vue3-cookies';
// import updateUser from '@/components/UpdateUser.vue';
const { cookies } = useCookies();

export default {
  components: {
    NavBar,
    Spinner,
    // updateUser,
  },
  data() {
    return {
      loading: true,
      user: null,
    };
  },
  async mounted() {
    await this.loadUserProfile();
  },
  methods: {
    async loadUserProfile() {
      try {
        // Retrieve user data from cookies
        const userData = cookies.get('LegitUser');
        
        if (!userData || !userData.user) {
          throw new Error('User not authenticated');
        }

        this.user = userData.user;
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        this.loading = false;
      }
    },
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID);
    },
    updateUser(user) {
      let editUser = {
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        Gender: user.Gender,
        userRole: user.userRole,
        emailAdd: user.emailAdd,
        userPass: user.userPass,
        userProfile: user.userProfile,
      };
      this.$store.dispatch('updateUser', { id: user.userID, data: editUser });
    },
    async fetchUserProfile() {
      try {
        const response = await this.$store.dispatch('fetchUserProfile');
        this.user = response;
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    },
  },
};
</script>

<style scoped>
.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--container-color);
  color: var(--text-color);
}

.profile-container {
  background-color: var(--card-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: var(--title-color);
  margin-bottom: 1.5rem;
}

.profile-info p {
  margin-bottom: 0.5rem;
}

.edit-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: var(--primary-color-dark);
}

.error-message {
  color: var(--error-color);
  text-align: center;
}

@media (max-width: 768px) {
  .user-profile {
    padding: 1rem;
  }

  .profile-container {
    padding: 1rem;
  }
}
</style>