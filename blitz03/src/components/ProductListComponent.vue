<template>
  <div>
    <div v-for="product in products" :key="product._id">
      <router-link :to="`/products/${product._id}`">{{ product.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListComponent',
  data() {
    return {
      products: []
    }
  },
  created() {
    // dohvati iz baze
  }
}
</script>