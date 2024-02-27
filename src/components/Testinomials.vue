<template>
  <div class="main-testimonial" >
    <div>
      <h2  style="color: rgb(70, 0, 7); margin-top: 1%; margin-bottom:3%; letter-spacing: 2px">
        HEAR FROM OUR PREMIUM SUBSCRIBERS
      </h2>
    </div>
    <v-sheet
    
    elevation="8"
    
  >
    <v-slide-group v-model="model" 
      class="">
       <v-slide-group-item v-for="item in items" :key="item.id" >
      
        <v-card
          class="p-card  ma-12"
          elevation="10"
          width="300"
          height="400"
          tile
          style="background-color: transparent"
        >
          <v-list-item-avatar height="100px" width="100px">
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar>
          <div>
            <i class="fa-solid fa-star md-5"></i>
            <i class="fa-solid fa-star md-5"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke" aria-hidden="true"></i>
          </div>
          <v-card-subtitle
            class="p-description"
            color="brown"
            style="color: rgb(70, 0, 7)"
            ><b>{{ item.name }}</b></v-card-subtitle
          >
          <v-card-text class="p-description"
            ><v-icon color="blue"> fa-quote-left</v-icon>
            {{ item.testimonial }}
            <v-icon color="blue"> fa-quote-right</v-icon></v-card-text
          >
        </v-card>
        
      
       </v-slide-group-item>
    </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: "0",
        name: "Mr. Basaiwala (CA)",
        img: require("../assets/Nitesh.png"),
        testimonial:
          "Stock selection and highlighting is an niche expertise, and an important element of Rocket Stock Pick. They showcase Results and Value. They highlight the outcomes they deliver and the value to the clients. Happy Investor under their guidance.",
      },
      {
        id: "1",
        name: "Mrs. Kumari  (Manager in Big 4)",
        img: require("../assets/Kumari.png"),
        testimonial:
          "My first trading experience with your guidance is amazing. You figured out the way to convert loss into profit on quite a few occasions. I would like to thank you for all your efforts. I do hope we share great success together👏👌 , keep up the good work😍",
      },
      {
        id: "2",
        name: "Mr. Sinha (LIC)",
        img: require("../assets/Sinha.png"),
        testimonial:
          "Prediction of Swing well before anyone's prediction is amazing and gives you good RR.Thanks and best wishes @RocketStockPicks",
      },
      {
        id: "3",
        name: "Mr. Sinha (LIC)",
        img: require("../assets/Sinha.png"),
        testimonial:
          "Prediction of Swing well before anyone's prediction is amazing and gives you good RR.Thanks and best wishes @RocketStockPicks",
      },
    ],
  }),
};
</script>

<style scoped>
#top {
  border: 1px solid black;
}

.flexrow {
  display: flex;
  flex-direction: column;
}
.main-testimonial {
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  /* background: rgb(231, 230, 230); */
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
  min-width: 100vw;
  background-color: whitesmoke;

  padding: 3%;
  justify-content: space-between;
  margin-left: 0%;
  margin-top:3% ;
  
}
.content {
  height: 100vh;
  min-width: 100vw;
  direction: flex;
  justify-content: space-evenly;
  margin: 5%;
  background-color: transparent;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
}
.contentrow {
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  background-color: transparent;
  margin-top: 5%;
}
.person {
  border-radius: 50%;
}
.img-class {
  /* background-color: yellow; */
  max-height: 80%;
  max-width: 10%;
}
.comments {
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.p-description {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 18px;
  text-align: center;
}
.v-card__text {
  color: white;
}
i {
  color: #ffa534;
  margin-left: 2%;
}
</style>