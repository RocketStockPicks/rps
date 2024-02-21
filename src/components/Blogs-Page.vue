<template>
  <v-container  fluid>
    <v-carousel contain  show-arrows-on-hover hide-delimiter cycle>
      <v-carousel-item class="fill-height"    src="../assets/carousel-1.jpg">
     
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2 text-white">Become A Trader with Us</div>
        </v-row>
      </v-carousel-item>

      <v-carousel-item class="fill-height"
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item class="fill-height"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>
  
<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
<style>
.text-white {
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>