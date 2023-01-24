<template>
  <div>
    <h1>{{ product.name }}</h1>
    <img :src="product.imageUrl" alt="product image" />
    <p>{{ product.description }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  data() {
    return {
      product: {}
    }
  },
  created() {
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    }
  }
}
</script>