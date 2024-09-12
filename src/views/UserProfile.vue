<template>
  <div v-if="user">
    <h2>User Profile</h2>
    <p><strong>First Name:</strong> {{ user.firstName }}</p>
    <p><strong>Last Name:</strong> {{ user.lastName }}</p>
    <p><strong>Email:</strong> {{ user.emailAdd }}</p>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
// import Spinner from '@/components/Spinner.vue';
import { useCookies } from 'vue3-cookies';
// import updateUser from '@/components/UpdateUser.vue';
const { cookies } = useCookies();

export default {
  components: {
    // NavBar,
    // Spinner,
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
main {
  padding: 2rem 0;
  background-color: var(--container-color);
  color: var(--text-color);
}

@media (max-width: 768px) {

}
</style>