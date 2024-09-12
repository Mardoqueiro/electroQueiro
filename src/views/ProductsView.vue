<template>
  <main class="main">
    <div class="section">
      <section class="featured-section" id="featured">
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
        <div v-if="!filteredProducts || filteredProducts.length === 0">
          <Spinner />
        </div>
      </section>

      <div class="row mt-4 checkout-row">
        <div class="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <router-link to="/checkout" class="btn btn-primary btn-lg button mb-3 mb-md-0">
            Go to Checkout ({{ cartItemCount }} items)
          </router-link>
          <h3 class="total-text">Total: R{{ cartTotal.toFixed(2) }}</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// import NavBar from '@/components/NavBar.vue'
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
  if (!products.value) return []
  if (currentFilter.value === 'all') return products.value
  return products.value.filter(product => product.prodBrand === currentFilter.value)
})

const setFilter = (brand) => {
  currentFilter.value = brand
}

onMounted(async () => {
  if (!products.value || products.value.length === 0) {
    await store.dispatch('fetchProducts')
  }
})

const addToCart = (product) => {
  store.dispatch('addToCart', product)
  toast.success(`${product.prodName} added to cart!`, {
    autoClose: 2000,
  })
}
</script>

<style scoped>
main {
    padding: 2rem 0;
    background-color: var(--container-color);
    color: var(--text-color);
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

.featured__container {
  padding: 1rem;
}

.featured__filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.featured__content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.featured__card {
  width: 100%;
}

.checkout-row {
  padding: 1rem;
}

.total-text {
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .featured__container {
    padding: 2rem;
  }

  .featured__filters {
    justify-content: flex-start;
  }

  .total-text {
    margin-top: 0;
  }
}

</style>