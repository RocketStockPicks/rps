<template>
<div class = "blogs-main" >
  <v-container>
     <div class="mt-10">
        <v-text style="color:green small ligten-5" >Keep Yourself Up-to-date</v-text>
      <h1 class="sm-12 xs-10">Blogs</h1>
    </div>
    <v-carousel class="fill-height mt-10" contain  show-arrows-on-hover hide-delimiter cycle>
      <v-carousel-item 
      >
      <v-img class ="fill-height" src="../assets/main-carousel-2.jpg" ></v-img>
     
       
      </v-carousel-item>
      <v-carousel-item>
          <v-img
            class="fill-height"
            src="../assets/carousel-col.jpeg"
          ></v-img>
      
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
.blogs-main{
    background-color:white;
}
.fill-height{
    
    flex-shrink: 0;
    min-width:1vw;
    height: 500px;
    background-position:inherit;
}
</style>