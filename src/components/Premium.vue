<template>

  <v-container  class="lighten-5" xs="6" 
  sm="12" 
  md="3">
    <div class="content col-sm-6" >
    <h2 class="lighten-5" style="color:black;margin-bottom:2%;margin-top:2%">WHAT YOU EXPECT FROM US</h2>
    <v-divider></v-divider>
    <v-row max-width="100%" >
      <v-col class="">
        <v-card class=" mx-auto" max-width="100%" tile>
          <v-list lines="two">
            <h3 style="color:green;"> WHAT TO EXPECT</h3>
            <v-list-item
              class="text-black"
              v-for="item in items"
              :key="item.expected"
            >
              <v-list-item-icon style="margin-right:0%">
                <v-icon color="green"> fa fa-flag</v-icon>
              </v-list-item-icon>
              <v-list-item-content style="margin-left:0%">
                <v-list-item-title>{{ item.expected }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="100%" tile>
          <v-list lines="two">
            <h3 style="color:orange;"> WHAT NOT TO EXPECT</h3>
            <v-list-item
              class="text-black"
              v-for="item in items"
              :key="item.expected"
            >
              <v-list-item-icon style="margin-left:0%"> 
                <v-icon color="red" style="margin-left:0%"> fa fa-flag</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> {{ item.unexpected }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="join-button" max-width="100%" height="40px"  align="center" justify="space-around" >
      <v-btn href="https://t.me/RocketStockPicks" large class="blue" min-height="100%" style="color: white; align : centre" >
        <b>JOIN OUR TELGRAM GROUP</b> <v-icon>fab fa-telegram </v-icon></v-btn
      >
    </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          expected:
            "Focus on learning price-action and simple trading strategy 1",
          unexpected: "No Portfolio Management at any stage ",
        },
        {
          expected:
            "Focus on learning price-action and simple trading strategy 2",
          unexpected: "No Portfolio Management at any stage ",
        },
        {
          expected:
            "Focus on learning price-action and simple trading strategy 3",
          unexpected: "No Portfolio Management at any stage ",
        },
        {
          expected:
            "Focus on learning price-action and simple trading strategy 4",
          unexpected: "No Portfolio Management at any stage ",
        },
        {
          expected:
            "Focus on learning price-action and simple trading strategy 5",
          unexpected: "No Portfolio Management at any stage ",
        },
      ],
    };
  },
};
</script>
<style scoped>
.join-button{
    margin-top: 30px;
}
</style>