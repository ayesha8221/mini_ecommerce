<template lang="">
    <div>
        <h2>Admin Page</h2>
    </div>
    <AdminTable/>
    <AddProduct/>
</template>
<script>

import AddProduct from '@/components/AddProduct.vue';
import AdminTable from '@/components/AdminTable.vue';

export default {
    components : {
        AdminTable, AddProduct
    }
}
</script>
<style lang="">
    
</style>