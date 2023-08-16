<template>
    <div>
        <h2>Products</h2>
    </div>
 
</template>
<script>
import CardComp from '@/components/CardComp.vue';
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },

    mounted() {
        this.$store.dispatch("getProducts")
    },

    components: {CardComp},
}
</script>
<style>
</style>