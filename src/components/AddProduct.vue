<template lang="">
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
    </div>
  
    <div class="field">
      <label class="label">Category</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Category"
          v-model="productCategory"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Image URL</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="url"
          v-model="productImg"
        />
      </div>
    </div>
  
    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
    
</template>
<script>
import router from '@/router';

export default {
  name: "AddProduct",
  data() {
    return {
      name: "",
      category: "",
      price: "",
      img: ""
    }
  },
  methods: {
    async saveProduct() {
      try {
        await app.post("https://e-com-api-68tp.onrender.com/products", {
          name: this.productName,
          category: this.productCategory,
          price: this.productPrice,
          img: this.productImg,
        });
        this.productName = "";
        this.productCategory = "";
        this.productPrice = "";
        this.productImg= "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
}

</script>
<style lang="">
    
</style>