<template>
  <main class="main">
    <div v-if="loading" class="loading-spinner">
      <Spinner />
    </div>
    <div v-else class="admin-container">
      <!-- USERS TABLE -->
      <section class="table-section">
        <h2>Users Table</h2>
        <addUser/>
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
                  <updateUser :user="user" />
                  <button class="btn btn-danger" @click="deleteUser(user.userID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PRODUCTS TABLE -->
      <section class="table-section">
        <h2>Products Table</h2>
        <addProduct/>
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
import updateUser from '@/components/UpdateUser.vue';
import updateProduct from '@/components/UpdateProduct.vue';
import addProduct from '@/components/AddProduct.vue';
import addUser from '@/components/AddUser.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    updateUser,
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
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID);
    },
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
.main {
  padding: 2rem 1rem;
  background-color: var(--container-color);
  color: var(--text-color);
}

.admin-container {
  max-width: 1200px;
  margin: 0 auto;
}

.table-section {
  margin-bottom: 3rem;
}

h2 {
  color: var(--title-color);
  margin-bottom: 1rem;
}

.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.table th,
.table td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.table th {
  background-color: var(--first-color);
  color: var(--white-color);
  font-weight: bold;
  text-align: left;
}

.table tr:nth-child(even) {
  background-color: var(--container-color-alt);
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-danger {
  background-color: var(--first-color);
  color: var(--white-color);
}

.btn-danger:hover {
  background-color: var(--first-color-alt);
}

@media (max-width: 768px) {
  .table th,
  .table td {
    padding: 0.5rem;
  }

  .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 576px) {
  .table {
    font-size: 0.875rem;
  }

  .btn {
    padding: 0.25rem;
    font-size: 0.75rem;
  }
}
</style>
