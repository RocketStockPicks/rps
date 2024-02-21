<template>
<v-container class="grey lighten-2">
 <v-row >
     <v-col>
         <v-card class="pa-2">

             <iframe height="100%"
                :src="'https://www.youtube.com/embed/' + video + '?autoplay=0&origin=http://example.com'"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""></iframe>
                <v-card-text>Swing trading</v-card-text>
                
         </v-card>
     </v-col>
      <v-col class="pa-2" >
         <v-card shaped class="pa-2">
             <iframe 
                :src="'https://www.youtube.com/embed/' + video + '?autoplay=0&origin=http://example.com'"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""></iframe>
                <v-card-text>Swing trading</v-card-text>
         </v-card>
     </v-col>
      <v-col class="pa-2">
         <v-card class="pa-2"> 
             <iframe 
                :src="'https://www.youtube.com/embed/' + video + '?autoplay=0&origin=http://example.com'"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""></iframe>
                 <v-card-text>Positional trading</v-card-text>
         </v-card>
     </v-col>
 </v-row>
    <!-- <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">{{ slide }} Slide</div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel> -->
</v-container>
</template>
  
<script>
export default {
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
        }
    },
}
</script>
  