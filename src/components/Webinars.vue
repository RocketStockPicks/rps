<template>
 
   
 
      <v-container class="container" >
           <div class="mt-10">
        <v-text style="color:green small ligten-5" >In-Depth-Analysis</v-text>
      <h1 class="sm-12 xs-10">Recent Webinars</h1>
    </div>
        <v-row class="mt-10">
          <v-col cols="12" sm="4" >
            <v-card class="card">
              <v-card-title  class="yellow lighten-5" style="color:green">Option Trading</v-card-title>
              <iframe
                height="75%"
                width="90%"
                src="https://www.youtube.com/embed/AvUYV-klssw?si=13vziJ7mrs8yZgh1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" >
            <v-card class="card">
              <v-card-title class="yellow lighten-5" style="color:green"> Swing Trading</v-card-title>
              <iframe
               
               height="75%"
                width="90%"
                src="https://www.youtube.com/embed/2LlKm5ldIr8?si=k_6_lbUa81X-jg9v"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" >
            <v-card class="card">
                 <v-card-title class="yellow lighten-5" style="color:green">Positional Trading</v-card-title>
              <iframe
                height="75%"
                width="90%"
                src="https://www.youtube.com/embed/AvUYV-klssw?si=13vziJ7mrs8yZgh1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
             
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
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style scoped>

.card{
    min-width: 90%;
}


.main-row {
  height: 100%;
  justify-content: space-evenly ;
}
.container {
  height: 100%;
}
</style>