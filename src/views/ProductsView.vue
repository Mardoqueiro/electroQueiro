<template>
  <NavBar/>
  
  <section class="featured section" id="featured">
    <h2 class="section__title">Featured Luxury Cars</h2>

    <div class="featured__container container">
      <ul class="featured__filters">
        <li>
          <button class="featured__item" :class="{ 'active-featured': currentFilter === 'all' }" @click="setFilter('all')">
            <span>All</span>
          </button>
        </li>
        <li v-for="brand in uniqueBrands" :key="brand">
          <button class="featured__item" :class="{ 'active-featured': currentFilter === brand }" @click="setFilter(brand)">
            <span>{{ brand }}</span>
          </button>
        </li>
      </ul>

      <div class="featured__content grid">
        <Card
          v-for="product in filteredProducts"
          :key="product.prodID"
          class="featured__card mix"
        >
          <template #cardHeader>
            <img
              :src="product.imageURL"
              :alt="product.prodName"
              class="featured__img"
            />
          </template>
          <template #cardBody>
            <h1 class="featured__title">{{ product.prodBrand }}</h1>
            <h3 class="featured__subtitle">{{ product.prodName }}</h3>
            <h3 class="featured__price">R{{ product.price }}</h3>
          </template>
          <template #cardFooter>
            <button class="featured__button" @click="addToCart(product)">
              Add to Cart
            </button>
          </template>
        </Card>
      </div>
    </div>
    <div v-if="!products || products.length === 0">
      <Spinner />
    </div>
  </section>

  <div class="row mt-4">
    <div class="col-12 d-flex justify-content-between align-items-center">
      <router-link to="/checkout" class="btn btn-primary btn-lg">
        Go to Checkout ({{ cartItemCount }} items)
      </router-link>
      <h3>Total: R{{ cartTotal.toFixed(2) }}</h3>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const store = useStore()
const products = computed(() => store.state.products)
const currentFilter = ref('all')
const cartItemCount = computed(() => store.getters.cartItemCount)
const cartTotal = computed(() => store.getters.cartTotal)

const uniqueBrands = computed(() => {
  if (!products.value) return []
  return [...new Set(products.value.map(product => product.prodBrand))]
})

const filteredProducts = computed(() => {
  if (currentFilter.value === 'all') return products.value
  return products.value.filter(product => product.prodBrand === currentFilter.value)
})

const setFilter = (brand) => {
  currentFilter.value = brand
}

onMounted(async () => {
  await store.dispatch('fetchProducts')
})

const addToCart = (product) => {
  store.dispatch('addToCart', product)
  toast.success(`${product.prodName} added to cart!`, {
    autoClose: 2000,
  })
}
</script>

<style scoped>
  .checkout-section {
    padding: 2rem 0;
    background-color: var(--container-color);
    color: var(--text-color);
}
</style>