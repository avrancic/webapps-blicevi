import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Product from './components/ProductComponent.vue'
import ProductList from './components/ProductListCOmponent.vue'
import Navbar from './components/NavbarComponent.vue'
//import './assets/css/styles.css'

Vue.config.productionTip = false

new Vue({
    components: {
    ProductList,
    Product,
    Navbar
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')