<template>
  <!--Start of slide-->
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://i.postimg.cc/66gJSL7W/horizontal-banner-cosmetic-product-with-jade-roller-gua-sha.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://i.postimg.cc/qRQnqv3w/horizontal-banner-cosmetic-product-with-jade-roller-gua-sha-2.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://i.postimg.cc/hvzjnDbf/horizontal-banner-cosmetic-product-with-jade-roller-gua-sha-1.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying "
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!--End of slide-->

  <!--Start of trending catergories-->
  <h2 class="dd">Shop Specialist-Curated</h2>
  <P class="dd">Peace of mind care</P>
  
  
  <!-- <div class="card" style="width: 18rem;">
    <h1 class="card-text">Serums</h1>
  </div> -->
 <div class="lisa">
  <div class="card mb-3" style="width: 18rem;">
  <div class="card-body">
    <h1 class="card-title">Serums</h1>
   
  </div>
</div>

  <div class="card mb-3" style="width: 18rem;">
  <div class="card-body">
    <h1 class="card-title">Moisturer</h1> 
  </div>
</div>

  <div class="card mb-3" style="width: 18rem;">
  <div class="card-body">
    <h1 class="card-title">Scrub</h1>
   
  </div>
</div>

  <div class="card mb-3" style="width: 18rem;">
  <div class="card-body">
    <h1 class="card-title">Mask</h1>
   
  </div>
</div>
</div>
  <!--end of trending catergories-->
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Navbarcomp.vue";
import footer from "@/components/Footercomp.vue";

export default {
  name: "HomeView",
  components: {
    navbar,
    footer,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.lisa{
  display: flex;
}
.carousel-item {
  width: 800px;
  height: 400px;
}
.carousel {
  width: 800px;
  margin: auto;
  height: 500px;
}
.dd {
  justify-content: center;
  margin-left: 500px;
}
/* .card-body {
  width: 200px;
  height: 200px;
  border: 8000px !important;
  background-color: transparent;
  margin: auto; 
  background-image:url(https://i.postimg.cc/k4SfD7h6/images.jpg);
} */

.card {
  width: 200px;
  height: 250px;
  border-radius: 100%; 
  background-image:url(https://i.postimg.cc/k4SfD7h6/images.jpg); 
  background-repeat: no-repeat;
  position:relative;
  background-size: cover ;
}
.card-title {
  margin-left:50px;
  margin-top: 50px;
  color: aliceblue;
}
.card:hover {
  transform: translateY(-5px); /* Lift the card slightly on hover */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}
</style> 