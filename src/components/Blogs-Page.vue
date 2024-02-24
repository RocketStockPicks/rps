<template>
<div class = "main" >
  <v-container>
    <v-carousel class="fill-height" contain  show-arrows-on-hover hide-delimiter cycle>
      <v-carousel-item 
      >
      <v-img class ="fill-height" src="../assets/main-carousel-2.jpg" ></v-img>
     
        <!-- <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2 text-white">Become A Trader with Us</div> 
        </v-row> -->
      </v-carousel-item>

      <v-carousel-item class="fill-height"
        src="../assets/investment-course.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item class="fill-height"
        src="../assets/trading-course.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>
  </div>
</template>
  
<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
<style scoped>
.text-white {
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.main{
    background-color:white;
}
.fill-height{
    
    flex-shrink: 0;
    min-width:1vw;
    height: 500px;
    background-position:inherit;
}
</style>