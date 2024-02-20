<template>
    <div class="blogs">
        <v-container>
            <v-carousel>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-container>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        model: null,
    }),
}
</script>
<style>
.blogs {
    flex-grow: 1;
    background-color: pink;
}
</style>