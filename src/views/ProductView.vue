<template>
  <NavBar/> 
  <div class="container-fluid mb-5">
    <div class="row">
      <h2 class="display-2 text-center">Product Details</h2>
    </div>
    <div class="row my-2 justify-content-center" v-if="product()">
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card mt-5 text-center">
          <img :src="$store.state.product.prodURL" class="card-img-top mx-auto">
          <div class="card-body">
            <div class="prodName">
              <h5 class="card-title">{{$store.state.product.prodName}}</h5>
            </div>
            <div>
              <h6> Category: {{$store.state.product.prodBrand}}</h6>
              <h6 class="card-text">Price: R{{$store.state.product.price}}</h6>
            </div>
            <div class="button-wrapper d-md-flex d-block justify-content-between">
            <!-- Add to Cart Button -->
            <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
            <!-- Back Button -->
            <button class="btn btn-dark" @click="goBack">Back to Products</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  methods: {
    fetchProduct() {
      this.$store.dispatch('fetchProduct', this.$route.params.id);
    },
    product() {
      return this.$store.state.product;
    },
    addToCart(product) {
      const cartItem = {
        ...product,
        quantity: 1 // Default quantity is 1
      };
      this.$store.dispatch('addToCart', cartItem);
    },
    goBack() {
      this.$router.push('/products'); // Navigates back to ProductsView.vue
    }
  },
  mounted() {
    this.fetchProduct();
  },
  components: {
    Spinner,
    NavBar
  }
}
</script>

<style scoped>
main {
  padding: 2rem 0;
  background-color: var(--container-color);
  color: var(--text-color);
}
</style>
