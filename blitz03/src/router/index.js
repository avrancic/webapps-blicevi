import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeComponent.vue'
import ProductList from '@/components/ProductListComponent.vue'
import Product from '@/components/ProductComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    }
  ]
})