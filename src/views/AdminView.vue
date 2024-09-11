<template>
  <div>
    <NavBar/>
    <!-- Loading Spinner -->
    <div v-if="loading" class="loading-spinner">
      <Spinner />
    </div>
    <!-- USERS TABLE -->
    <h2>Users Table</h2>
    <addUser/>
    <div class="container table-responsive">
      <div class="col"></div>
      <table class="table users-table" v-if="!loading && users">
        <thead class="table-danger">
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>User Role</th>
            <th>Email Address</th>
            <th>User Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
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
              <button class="btn btn-danger deleteButton" @click="deleteUser(user.userID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PRODUCTS TABLE -->
    <h2>Products Table</h2>
    <addProduct/>
    <div class="container table-responsive">
      <table class="table products-table" v-if="!loading && products">
        <thead class="table-danger">
          <tr>
            <th>Product ID</th>
            <th>Car Name</th>
            <th>Price</th>
            <th>Car Brand</th>
            <th>Car URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>R {{ product.price }}</td>
            <td> {{ product.prodBrand }}</td>
            <td>
              <a :href="product.imageURL" target="_blank">
                <img :src="product.imageURL" alt="Product Image" width="50">
              </a>
            </td>
            <td>
              <updateProduct :product="product"/>
              <button class="btn btn-danger deleteButton button" @click.prevent="deleteProduct(product.prodID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import updateUser from '@/components/UpdateUser.vue';
import updateProduct from '@/components/UpdateProduct.vue';
import addProduct from '@/components/AddProduct.vue';
import addUser from '@/components/AddUser.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    NavBar,
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
        this.loading = false; // Hide spinner when data is loaded
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
main {
  padding: 2rem 0;
  background-color: var(--container-color);
  color: var(--text-color);
}
 
.button {
  --green: #1BFD9C;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--green);
  background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
}

.button:hover {
  color: #82ffc9;
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
}

.button:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform .4s ease-in-out;
  background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
}

.button:hover:before {
  transform: translateX(15em);
}

</style>
