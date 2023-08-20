<template lang="">
              <router-link to="/admin/add">Add</router-link>
          
              <div class="body" v-if="products">
          <div class="row table-container">
            <div class="col-12">
              <h1>Products</h1>
              
            </div>
            <div class="col">
              <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists"  @submit="deleteProduct">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in products" :key="item.productsID" class="bord">
                    <td>{{ item.productsID }}</td>
                    <td>{{ item.name }}</td>
                    <td>R {{ item.price }}</td>
                    <td>{{ item.category }}</td>
                    <td><img class="tableImg" :src="item.img" alt="" /></td>
                    <td>
                      <button
                        type="button"
                        class="btn bton"
                        data-bs-toggle="modal"
                        data-bs-target="#editProductModal"
                        id="edit-row"
                      >
                        Edit
                      </button>
                      <button
                        type="submit"
                        class="btn btton"
                        @click="deleteProduct(id)"
                        id="delete-row"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    
</template>
<script>
import router from '@/router';
import axios from "axios"

export default {
  props: ["product"],
  computed: {
        products() {
            return this.$store.state.products
        }
    },

    mounted() {
        this.$store.dispatch("getProducts")
    },

    methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`https://e-com-api-68tp.onrender.com/products/${id}`);
        this.$store.dispatch("getProducts")
      } catch (err) {
        alert(err);
      }
    },
  },
}



</script>

<style lang="">
    
</style>