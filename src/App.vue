<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> 
  </nav>
  <router-view/>
  <Footercomp/>
</template>

<script>
import Navbarcomp from './components/Navbarcomp.vue'
import Footercomp from './components/Footercomp.vue'
export default {
  components: {
    Navbarcomp , Footercomp
  },
};
</script>

<style>
 ::-webkit-scrollbar {
  display: none;
}
body {
  background-color: antiquewhite;
}
</style>
