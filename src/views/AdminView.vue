<template>
  <div class="section">
  <div class="container-main">
    <h2>Products Table</h2>
    <input type="text" placeholder="search" />
    <br />
    <label for="button">Filter by Catergory</label>
    <button type="radio">Brand</button>
    <br />
    <button type="radio">batteryCapacity</button>
    <br />
    <button type="radio">Accessories</button>
    <br />
    <button type="radio"></button>
    <br />

    <div class="table-container">
      <div class="newProduct">
        <!-- ADD PRODUCT Modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          Add New Cars
        </button>
        <div
          class="modal fade"
          id="addProductModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add new Car
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="admin-input">
                  <form @submit.prevent="submitProductForm">
                    <input
                      type="number"
                      placeholder="Product ID"
                      v-model="payload.prodID"
                      value="Data"
                      label="id"
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      placeholder="Product Name"
                      v-model="payload.prodName"
                      aria-label="product name"
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      placeholder="Category"
                      v-model="payload.category"
                      value="Data"
                    />
                    <br />
                    <br />
                    <input
                      type="number"
                      placeholder="Quantity"
                      v-model="payload.quantity"
                    />
                    <br />
                    <br />
                    <input
                      type="number"
                      placeholder="price"
                      v-model="payload.amount"
                      value="Data"
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      placeholder="URL"
                      v-model="payload.prodUrl"
                    />
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <!-- BUTTON TO ADD NEW PRODUCT -->
                <button
                  type="button"
                  class="btn btn-primary"
                  @click.prevent="addProduct()"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Catergory</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.prodBrand }}</td>
            <td>{{ product.prodYear }}</td>
            <td>{{ product.batteryCapacity }}</td>
            <td>{{ product.rangeKM }}</td>
            <td>{{ product.chargingTime }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.stockQuantity }}</td>
            <td>{{ product.imageURL }}</td>
            <td>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="`#updateProductModal${product.prodID}`"
              >
                Edit Product
              </button>

              <!-- EDIT PRODUCT  MODAL-->
              <div
                class="modal fade"
                :id="`updateProductModal${product.prodID}`"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Update a product
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="admin-input">
                        <input
                          type="number"
                          :placeholder="product.prodID"
                          v-model="payload.prodID"
                          readonly
                        />
                        <input
                          type="text"
                          :placeholder="product.prodName"
                          v-model="payload.prodName"
                        />
                        <input
                          type="text"
                          :placeholder="product.category"
                          v-model="payload.category"
                        />
                        <input
                          type="text"
                          :placeholder="product.amount"
                          v-model="payload.amount"
                        />
                        <input
                          type="text"
                          :placeholder="product.quantity"
                          v-model="payload.quantity"
                        />
                        <input
                          type="text"
                          :placeholder="product.prodUrl"
                          v-model="payload.prodUrl"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        @click.prevent="
                          updateProduct(JSON.stringify(product.prodID))
                        "
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  class="delete-button"
                  @click="deleteProduct(product.prodID)"
                >
                  <span class="text">Delete</span
                  ><span class="icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                      ></path></svg
                  ></span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <div v-else><Spinner /></div>
      </table>

      <h2>Users Table</h2>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addUserModal"
      >
        Add New User
      </button>
      <!-- ADD NEW USER MODAL -->
      <div class="newUser">
        <!-- ADD USER Modal -->

        <div
          class="modal fade"
          id="addUserModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add new user
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="admin-input">
                  <h5>please fill out all fields</h5>
                  <form @submit.prevent="submitUserForm">
                    <input
                      type="text"
                      placeholder="First Name"
                      v-model="userPayload.firstName"
                      value=""
                      required
                    />
                    <br /><br />
                    <input
                      type="text"
                      placeholder="Last Name"
                      v-model="userPayload.lastName"
                      required
                    />
                    <br /><br />
                    <input
                      type="number"
                      placeholder="User's Age"
                      v-model="userPayload.userAge"
                      value="Data"
                      required
                    />
                    <br /><br />
                    <input
                      type="text"
                      placeholder="Gender"
                      v-model="userPayload.Gender"
                      required
                    />
                    <br /><br />
                    <input
                      type="text"
                      placeholder="User Role"
                      v-model="userPayload.userRole"
                      value="Data"
                      required
                    />
                    <br /><br />
                    <input
                      type="text"
                      placeholder="Email address"
                      v-model="userPayload.emailAdd"
                      required
                    />
                    <br /><br />
                    <input
                      type="text"
                      placeholder="User Profile"
                      v-model="userPayload.userProfile"
                      required
                    />
                    <br /><br />
                    <input
                      type="text"
                      placeholder="Password"
                      v-model="userPayload.userPass"
                      required
                    />
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close</button
                >0
                <!-- BUTTON TO ADD NEW User -->
                <button
                  type="button"
                  class="btn btn-primary"
                  @click.prevent="addUser()"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>User ID Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userProfile }}</td>
            <td>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="`#updateUserModal${user.userID}`"
              >
                Edit User
              </button>
              <!-- EDIT USER  MODAL-->
              <div
                class="modal fade"
                :id="`updateUserModal${user.userID}`"
                tabindex="-1"
                aria-labelledby="updateUserLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="updateUserLabel">
                        Update User
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="admin-input">
                        <input
                          type="text"
                          :placeholder="user.userID"
                          v-model="userPayload.usersID"
                          readonly
                        />
                        <input
                          type="text"
                          :placeholder="user.firstName"
                          v-model="userPayload.firstName"
                          required
                        />
                        <input
                          type="text"
                          :placeholder="user.lastName"
                          v-model="userPayload.lastName"
                          required
                        />
                        <input
                          type="number"
                          :placeholder="user.userAge"
                          v-model="userPayload.userAge"
                          required
                        />
                        <input
                          type="text"
                          :placeholder="user.Gender"
                          v-model="userPayload.Gender"
                          required
                        />
                        <input
                          type="text"
                          :placeholder="user.userRole"
                          v-model="userPayload.userRole"
                          required
                        />
                        <input
                          type="text"
                          :placeholder="user.emailAdd"
                          v-model="userPayload.emailAdd"
                          required
                        />
                        <input
                          type="text"
                          :placeholder="user.userProfile"
                          v-model="userPayload.userProfile"
                          required
                        />
                        <input
                          type="text"
                          :placeholder="user.userPass"
                          v-model="userPayload.userPass"
                          required
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        @click.prevent="updateUser(JSON.stringify(user.userID))"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="delete-button"
                  v-on:click="deleteUser(user.userID)"
                >
                  <span class="text">Delete</span
                  ><span class="icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                      ></path></svg
                  ></span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <div v-else><Spinner /></div>
      </table>
    </div>
  </div>
</div>

</template>

<script setup>
import Spinner from "@/components/Spinner.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const payload = ref({
  prodName: "",
  prodBrand: "",
  prodModel: "",
  prodYear: "",
  batteryCapacity: "",
  rangeKM: "",
  chargingTime: "",
  amount: 0,
  imageURL: "",
  category: "",
  stockQuantity: 0,
});

const userPayload = ref({
  firstName: "",
  lastName: "",
  Gender: "",
  userRole: "",
  emailAdd: "",
  userProfile: "",
  userPass: "",
});

// Initialize products and users as empty arrays
const products = ref([]);
const users = ref([]);

onMounted(() => {
  store.dispatch("fetchProducts").then(() => {
    products.value = store.state.products;
  });
  store.dispatch("fetchUsers").then(() => {
    users.value = store.state.users;
  });
});

// Define your methods here
const addProduct = async () => {
  console.log("adding product:", payload.value);
  try {
    await store.dispatch("addAProduct", payload.value);
    console.log("Product added to store!");
    // Reset the form
    payload.value = {
      prodName: "",
      prodBrand: "",
      prodModel: "",
      prodYear: "",
      batteryCapacity: "",
      rangeKM: "",
      chargingTime: "",
      amount: 0,
      imageURL: "",
      category: "",
      stockQuantity: 0,
    };
    // Optionally, you can refresh the products list
    store.dispatch("fetchProducts");
  } catch (error) {
    console.error("Error adding product:", error);
    // Optionally, you can show an error message to the user here
  }
};

const updateProduct = (id) => {
  const productPayload = {
    prodID: JSON.parse(id),
    ...payload.value,
  };
  store.dispatch("updateProduct", productPayload).then(() => {
    console.log("Product updated in store!");
    location.reload();
  });
};

const deleteProduct = (prodID) => {
  store.dispatch("deleteProduct", prodID).then(() => {
    console.log("Product deleted from store!");
  });
};

const addUser = () => {
  const result = store.dispatch("addUser", userPayload.value);
  if (result && typeof result.then === 'function') {
    result.then(() => {
      console.log("User added to store!");
      // Optionally refresh the users list
      store.dispatch("fetchUsers");
      // Reset the form
      userPayload.value = {
        firstName: "",
        lastName: "",
        Gender: "",
        userRole: "",
        emailAdd: "",
        userProfile: "",
        userPass: "",
      };
    }).catch((error) => {
      console.error("Error adding user", error);
    });
  } else {
    console.log("User addition dispatched, but no promise returned");
    // Optionally refresh the users list
    store.dispatch("fetchUsers");
  }
};

const updateUser = (id) => {
  const userPayload = {
    userID: JSON.parse(id),
    ...userPayload.value,
  };
  store.dispatch("updateUser", userPayload).then(() => {
    console.log("User updated");
    location.reload();
  });
};

const deleteUser = (userID) => {
  store.dispatch("deleteUser", userID).then(() => {
    console.log("User deleted from store!");
  });
};

const submitProductForm = async () => {
  const errors = {};
  for (const [key, value] of Object.entries(payload.value)) {
    if (!value) {
      errors[key] = `${key} is required`;
    }
  }
  if (Object.keys(errors).length === 0) {
    await store.dispatch("addAProduct", payload.value);
    payload.value = {
      name: "",
      price: "",
      category: "",
      description: "",
    };
  } else {
    console.log(errors); // Handle errors appropriately
  }
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>
