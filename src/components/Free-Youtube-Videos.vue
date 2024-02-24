<template>
  <div class="main">
    <div>
        <v-text style="color:green small ligten-5" >WANT TO LEARN STOCK MARKET</v-text>
      <h1>Watch The Video Below</h1>
    </div>
    <div class="content">
      <v-container class="container" height="400">
        <v-row >
          <v-col class="column">
            <v-card class="card">
              <v-card-title class="yellow lighten-5" style="color:green">Option Trading</v-card-title>
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
          <v-col class="column">
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
          <v-col class="column">
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
    </div>
  </div>
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
.main {
  display: flex;
  flex-direction: column;
  column-gap: 30px;
 
  min-width: 100vw;
  height: 70vh;
  padding: 3%;
  justify-content: space-between;
}

.content {
  height: 100vh;
  min-width: 100vw;
  direction: flex;
  justify-content: space-evenly;
  margin-top: 5%;
}
.card {
  height: 100%;
  width: 100%;
  background-color: rgb(207, 205, 205);
}
.column {
  height: 100%;
}
.row {
  height: 100%;
}
.container {
  height: 100%;
}
</style>