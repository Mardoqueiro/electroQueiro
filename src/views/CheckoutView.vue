<template>
    <NavBar />
    <section class="checkout-section">
        <div class="container mt-4">
            <h2 class="checkout-title">Cart</h2>
            <div v-if="cart.length === 0" class="text-center mt-4">
                <p>Your cart is empty.</p>
                <router-link to="/products" class="btn btn-primary button">Continue Shopping</router-link>
            </div>
            <div v-else>
                <table class="table checkout-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart" :key="item.prodID">
                            <td>{{ item.prodName }}</td>
                            <td>R{{ formatPrice(item.price) }}</td>
                            <td>
                                <input 
                                    type="number" 
                                    v-model.number="item.quantity" 
                                    @change="updateQuantity(item.prodID, item.quantity)"
                                    min="1"
                                    class="form-control quantity-input"
                                >
                            </td>
                            <td>R{{ formatPrice(item.price * item.quantity) }}</td>
                            <td>
                                <button @click="removeItem(item.prodID)" class="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-end checkout-summary">
                    <h4>Total: R{{ formatPrice(cartTotal) }}</h4>
                    <button class="btn btn-success mt-2 button">Proceed to Payment</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
const cart = computed(() => store.state.cart)
const cartTotal = computed(() => store.getters.cartTotal)

onMounted(async () => {
    await store.dispatch('fetchCart')
})

const updateQuantity = (productId, quantity) => {
    store.dispatch('updateCartItemQuantity', { productId, quantity })
}

const removeItem = (productId) => {
    store.dispatch('removeFromCart', productId)
}

const formatPrice = (price) => {
    const numPrice = Number(price)
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2)
}
</script>

<style scoped>
.checkout-section {
    padding: 2rem 0;
    background-color: var(--container-color);
    color: var(--text-color);
}

.checkout-title {
    color: var(--title-color);
    margin-bottom: 1.5rem;
}

.checkout-table {
    background-color: var(--body-color);
    border-radius: 8px;
    overflow: hidden;
}

.checkout-table th {
    background-color: var(--first-color);
    color: var(--white-color);
}

.checkout-table td {
    vertical-align: middle;
}

.quantity-input {
    width: 70px;
    background-color: var(--body-color);
    color: var(--text-color);
    border: 1px solid var(--text-color-light);
}

.checkout-summary {
    margin-top: 2rem;
}

.checkout-summary h4 {
    color: var(--title-color);
}

.btn-success {
    background-color: var(--first-color);
    border-color: var(--first-color);
}

.btn-success:hover {
    background-color: var(--first-color-alt);
    border-color: var(--first-color-alt);
}

/* From Uiverse.io by adamgiebl */ 
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