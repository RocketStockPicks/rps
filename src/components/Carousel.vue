<template>
  <div class="main">
    <div>
      <video autoplay muted loop id="myVideo">
  <source src="rain.mp4" type="video/mp4">
</video>
    </div>
    <v-container>
      <v-carousel 
       
        contain
        show-arrows-on-hover
        hide-delimiter-background 
        cycle="1000"
      >
        <!-- <v-carousel-item class="carousel-content">
          <v-row>
            <v-col cols="6">
               
                
              <div >
                <h1 class="carousel-title">WELCOME TO ROCKET STOCK PICKS</h1>
                <p class="text-left flex-wrap">
                  One stop solution for equity, future and options. Join us for trading and investment.
                </p>
              </div>
               
            </v-col>

             <v-col cols="6" >
               
                
              <v-img
            class="fill-height-img"
            src="../assets/main-carousel-2.jpg"
          ></v-img>
            </v-col>
          
          </v-row>
        </v-carousel-item> -->
        <!-- <v-carousel-item>
          <v-img
            class="fill-height"
            src="../assets/carousel-col.jpeg"
          ></v-img>

      
        </v-carousel-item>  -->

        <v-carousel-item
          class="fill-height"
          src="../assets/investment-course.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          class="fill-height"
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.main {
  background-color: white;
}
.fill-height {
  flex-shrink: 0;
  height: 100%;
  background-position: inherit;
  justify-self: stretch;
}

.carousel-title{
    font-size: 70px;
    text-align: left;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: lightseagreen;
    font-weight: 800;
    
} 
.carousel-content{
   
    background-size:100%;
    min-width: 100%;
    justify-items: stretch;
}

p{
    color: grey;
}
</style>