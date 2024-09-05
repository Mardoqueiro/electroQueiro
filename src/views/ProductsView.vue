<template>
  <NavBar />
  <div class="container">
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>
    <div class="row gap-2 justify-content-center my-2" v-if="products && products.length">
      <Card
        v-for="product in products"
        :key="product.prodID"
        class="products"
      >
        <template #cardHeader>
          <img
            :src="product.imageURL"
            loading="lazy"
            class="img-fluid"
            :alt="product.prodName"
          />
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead">
            <span class="text-success fw-bold">Price</span>: R{{ product.price }}
          </p>
          <div class="button-wrapper d-md-flex d-block justify-content-between">
            <router-link :to="{ name: 'products', params: { id: product.prodID } }">
              <button class="btn btn-success">View</button>
            </router-link>
            <button class="btn btn-dark"><i class="ri-shopping-bag-2-line"></i> Cart</button>
          </div>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'

const store = useStore()
const products = ref([])

onMounted(async () => {
  await store.dispatch('fetchProducts')
  products.value = store.state.products
  console.log('Products:', products.value) // Check if products are fetched
})
</script>

<style scoped>
  /* img {
      aspect-ratio: 1;
      object-fit: cover;
      object-position: center;
  } */
</style>