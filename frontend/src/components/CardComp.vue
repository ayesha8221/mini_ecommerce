<template>
    <div class="container">
        <div class="card mx-auto my-2">
            <router-link :to="{ name: 'products', params: { id: products.productsID } }">
                <img :src="products.img" :alt="products.name" />
                <h3>{{ products.name }}</h3>
                <p>{{ products.price }}</p>
                <button v-on:click="addToCart" class="addbtn">Add to cart</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  props: ["products"],
};

</script>
<style>

</style>