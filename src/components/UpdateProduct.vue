<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-dark modalButton" data-bs-toggle="modal" :data-bs-target="'#updateProductModal'+product.prodID">
      Update Products
    </button>
    <!-- Modal -->
    <div class="modal fade" :id="'updateProductModal'+product.prodID"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Products</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Name" v-model="payload.prodName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Price" v-model="payload.price">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Brand" v-model="payload.prodBrand">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product URL" v-model="payload.imageURL">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-dark" data-bs-dismiss="modal">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateProduct',
    props: ['product'],
    data() {
      return {
        payload: {
          prodID: this.product.prodID,
          prodName: this.product.prodName,
          Price: this.product.price,
          prodBrand: this.product.prodBrand,
          imageURL: this.product.imageURL
        }
      }
    },
    methods: {
      updateProduct() {
        this.$store.dispatch('updateProduct', {id: this.payload.prodID, data: this.payload});
      }
    }
  }
  </script>
  <style scoped>
  </style>