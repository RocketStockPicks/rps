<template>
  <div class="main">
    <v-container>
      <v-carousel 
        class="fill-height"
        contain
        show-arrows-on-hover
        hide-delimiter-background 
        cycle="1000"
      >
        <v-carousel-item class="carousel-content">
          <v-row>
            <v-col >
               
                
              <div >
                <h1 class="carousel-title">WELCOME TO ROCKET STOCK PICKS</h1>
                <p class="text-left flex-wrap">
                  One stop solution for equity, future and options. Join us for trading and investment.
                </p>
              </div>
               
            </v-col>
          
          </v-row>
        </v-carousel-item>
        <!-- <v-carousel-item>
          <v-img
            class="fill-height"
            src="../assets/main-carousel-2.jpg"
          ></v-img>

      
        </v-carousel-item> -->

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
  height: 500px;
  background-position: inherit;
}

.carousel-title{
    font-size: 70px;
    text-align: left;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: lightseagreen;
    font-weight: 800;
    
} 
.carousel-content{
    background-image: url("../assets/main-carousel-2.jpg");
    background-size:100%;
    min-width: 100%;
}

p{
    color: grey;
}
</style>