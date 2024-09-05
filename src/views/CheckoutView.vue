<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Checkout</h2>
        </div>
        <div class="row">
            <div v-for="item in cartItems" :key="item.id" class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">Price: ${{ item.price }}</p>
                        <button @click="removeFromCart(item)" class="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h3>Total: ${{ cartTotal }}</h3>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cartItems = ref([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
])

const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price, 0)
})

const removeFromCart = (item) => {
    cartItems.value = cartItems.value.filter(i => i.id !== item.id)
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>