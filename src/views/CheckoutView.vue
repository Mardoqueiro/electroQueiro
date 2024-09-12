<template>
    <NavBar />
    <section class="checkout-section">
        <div class="container mt-4">
            <h2 class="checkout-title">Cart</h2>
            <div v-if="cart.length === 0" class="text-center mt-4">
                <p>Your cart is empty.</p>
                <router-link to="/products" class="btn btn-primary button">Continue Shopping</router-link>
            </div>
            <div v-else class="checkout-content">
                <div class="checkout-items">
                    <div v-for="item in cart" :key="item.prodID" class="checkout-item">
                        <div class="item-details">
                            <h3>{{ item.prodName }}</h3>
                            <p>Price: R{{ formatPrice(item.price) }}</p>
                        </div>
                        <div class="item-actions">
                            <input 
                                type="number" 
                                v-model.number="item.quantity" 
                                @change="updateQuantity(item.prodID, item.quantity)"
                                min="1"
                                class="form-control quantity-input"
                            >
                            <p>Total: R{{ formatPrice(item.price * item.quantity) }}</p>
                            <button @click="removeItem(item.prodID)" class="btn btn-danger btn-sm">Remove</button>
                        </div>
                    </div>
                </div>
                <div class="checkout-summary">
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

.checkout-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.checkout-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.checkout-item {
    background-color: var(--body-color);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.item-details, .item-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.quantity-input {
    width: 70px;
    background-color: var(--body-color);
    color: var(--text-color);
    border: 1px solid var(--text-color-light);
}

.checkout-summary {
    background-color: var(--body-color);
    border-radius: 8px;
    padding: 1rem;
    text-align: right;
}

.checkout-summary h4 {
    color: var(--title-color);
    margin-bottom: 1rem;
}

@media (min-width: 576px) {
    .item-actions {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

@media (min-width: 768px) {
    .checkout-item {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .item-details {
        flex: 1;
    }

    .item-actions {
        width: 50%;
    }
}

@media (min-width: 992px) {
    .checkout-content {
        flex-direction: row;
        justify-content: space-between;
    }

    .checkout-items {
        flex: 1;
        margin-right: 2rem;
    }

    .checkout-summary {
        width: 300px;
        align-self: flex-start;
    }
}

/* Button styles remain unchanged */
.btn-danger {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    cursor: pointer;
}

.btn-danger:hover {
    background-color: #c82333;
}
</style>