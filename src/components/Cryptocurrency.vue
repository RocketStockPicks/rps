<template>
  <div class="courses">
    <div class="section-title mt-10">
      <h5>Cryptocurrency</h5>

      <h1>Get Started</h1>
    </div>
    <div class="content-body">
      <v-container>
        <v-row>
          <v-col class = "block-col">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="../assets/trading-course.jpg"
                height="200px"
                cover
              ></v-img>
              <p class="best-top">Exclusive</p>
              <v-card-title> Blockchaing </v-card-title>

              <v-card-subtitle> Learn Basics </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text"> Buy Now </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="show2 = !show2"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show2">
                  <v-divider></v-divider>

                  <v-card-text>
                    <ul>
                      <li>Fundamentals</li>
                      <li>How Blockchain works</li>
                    </ul>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col class = "block-col" >
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="../assets/investment-course.jpg"
                height="200px"
                cover
              ></v-img>
              <p class="best-top-2">BestSeller</p>
              <v-card-title> Digital Currency </v-card-title>

              <v-card-subtitle> Fundamentals </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                  Curriculum
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  :icon="show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="show1 = !show1"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show1">
                  <v-divider></v-divider>

                  <v-card-text>
                    <ul>
                      <li>Long Term Analysis</li>
                      <li>Bitcoin vs Etherium</li>
                    </ul>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
  
<script>
export default {
  data: () => ({
    show1: false,
    show2: false,
  }),
};
</script>

<style scoped>
.courses {
  display: flex;

  flex-direction: column;
  column-gap: 30px;

  min-width: 100vw;

  padding: 3%;
  justify-content: space-between;
}

.content-body {
  direction: flex;
  padding-left: 15%;
  padding-right: 15%;
  margin-top:4%;
}

.block-col:hover{
  background-color: rgb(206, 205, 205);
  box-shadow: 0 5px 15pc rgba(0,0,0,0.8);
  transition: all .4s ease-in;
}

.best-top {
  clip-path: polygon(0% 0%, 75% 0%, 68% 50%, 75% 100%, 0% 100%);
  padding: 0 57px 0 25px;
  background: #e91212;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-style: italic;
  margin-left: -10px;
  position: absolute;
  top: 20px;
  left: 0;
  border-radius: 10px 0 0 0;
}
.best-top-2 {
  clip-path: polygon(0% 0%, 75% 0%, 68% 50%, 75% 100%, 0% 100%);
  padding: 0 57px 0 25px;
  background: #0f0e55;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-style: italic;
  margin-left: -10px;
  position: absolute;
  top: 20px;
  left: 0;
  border-radius: 10px 0 0 0;
}
</style>