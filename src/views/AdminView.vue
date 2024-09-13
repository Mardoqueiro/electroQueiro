<template>
  <main class="admin-main">
    <div v-if="loading" class="loading-spinner">
      <Spinner />
    </div>
    <div v-else class="admin-container">
      <h1 class="admin-title">Admin Dashboard</h1>
      
      <!-- USERS TABLE -->
      <section class="table-section">
        <h2>Users</h2>
        <addUser class="mb-4"/>
        <div class="table-responsive">
          <table class="table users-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Email</th>
                <th>Profile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }} {{ user.lastName }}</td>
                <td>{{ user.Gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>
                  <a :href="user.userProfile" target="_blank">
                    <img :src="user.userProfile" alt="User Profile" width="50">
                  </a>
                </td>
                <td>
                  <button class="btn btn-primary" @click="editUser(user)">Edit</button>
                  <button class="btn btn-danger" @click="deleteUser(user.userID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PRODUCTS TABLE -->
      <section class="table-section">
        <h2>Products</h2>
        <addProduct class="mb-4"/>
        <div class="table-responsive">
          <table class="table products-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Car Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.prodID">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>R {{ product.price }}</td>
                <td>{{ product.prodBrand }}</td>
                <td>
                  <a :href="product.imageURL" target="_blank">
                    <img :src="product.imageURL" alt="Product Image" width="50">
                  </a>
                </td>
                <td>
                  <updateProduct :product="product"/>
                  <button class="btn btn-danger" @click.prevent="deleteProduct(product.prodID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// import updateUser from '@/components/UpdateUser.vue';
import updateProduct from '@/components/UpdateProduct.vue';
import addProduct from '@/components/AddProduct.vue';
import addUser from '@/components/AddUser.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    // updateUser,
    updateProduct,
    addProduct,
    addUser,
    Spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    }
  },
  mounted() {
    this.loadData();
    console.log('Users:', this.users);
  },
  methods: {
    async loadData() {
      try {
        await Promise.all([
          this.$store.dispatch('fetchProducts'),
          this.$store.dispatch('fetchUsers')
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
    async deleteUser(userID) {
      if (confirm('Are you sure you want to delete this user?')) {
        try {
          await this.$store.dispatch('deleteUser', userID);
          // Optionally refresh the users list
          await this.$store.dispatch('fetchUsers');
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      }
    },
    editUser(user) {
      // You can implement this method to open a modal or navigate to an edit page
      console.log('Editing user:', user);
      // For example, you could use a modal component:
      // this.$refs.updateUserModal.openModal(user);
    },
    // deleteUser(user) {
    //   this.$store.dispatch('deleteUser', user.userID);
    // },
    deleteProduct(prodID) {
      this.$store.dispatch('deleteProduct', prodID);
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
    updateProduct(product) {
      let editProduct = {
        productID: product.prodID,
        productName: product.prodName,
        price: product.price,
        prodBrand: product.prodBrand,
        imageURL: product.imageURL,
      };
      this.$store.dispatch('updateProduct', { id: product.prodID, data: editProduct });
    }
  }
}
</script>

<style scoped>
.admin-main {
  padding: 2rem;
  background-color: var(--container-color);
  min-height: 100vh;
}

.admin-container {
  max-width: 1400px;
  margin: 0 auto;
}

.admin-title {
  font-size: 2.5rem;
  color: var(--first-color);
  margin-bottom: 2rem;
  text-align: center;
}

.table-section {
  background-color: var(--white-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 3rem;
}

h2 {
  color: var(--first-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--first-color);
  padding-bottom: 0.5rem;
}

.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.table th,
.table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.table th {
  background-color: var(--first-color);
  color: var(--white-color);
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
}

.table tr:last-child td {
  border-bottom: none;
}

.table tr:hover {
  background-color: var(--container-color-alt);
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.btn-primary {
  background-color: var(--first-color);
  color: var(--white-color);
}

.btn-primary:hover {
  background-color: var(--first-color-alt);
}

.btn-danger {
  background-color: #dc3545;
  color: var(--white-color);
}

.btn-danger:hover {
  background-color: #c82333;
}

@media (max-width: 768px) {
  .admin-main {
    padding: 1rem;
  }

  .table-section {
    padding: 1rem;
  }

  .table th,
  .table td {
    padding: 0.75rem;
  }

  .btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .admin-title {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .table {
    font-size: 0.9rem;
  }

  .btn {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
}
</style>
