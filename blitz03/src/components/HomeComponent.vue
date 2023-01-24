<template>
  <div>
    <h1>Welcome to our webshop</h1>
    <p>Here you can find our latest products:</p>
    <product-list :products="latestProducts" />
  </div>
</template>

<script>
//import ProductListComponent from './ProductListComponent.vue'

export default {
  name: 'HomeComponent',
  components: {
    //ProductListComponent
  },
  data() {
    return {
      latestProducts: []
    }
  },
  created() {
  }
}
</script>
