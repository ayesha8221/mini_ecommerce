import { createStore } from 'vuex'
const miniURL = "http://localhost:3010/"
export default createStore({
  state: {
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch(`${miniURL}/products`)
      .then((res) => res.json())
      .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch(`${miniURL}/products` + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product))
    },  
  },
  modules: {
  }
})
