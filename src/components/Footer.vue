<template>
  <div class="foot-r">
    <v-row class="foot-row">
      <v-col>
        <strong>
          <v-icon class="mx-4 white--text">mdi-copyright </v-icon> All Right
          Reserved - RocketStockPicks</strong
        >
      </v-col>
      <v-col>
        <v-btn
          :href="icon.url"
          target="_blank"
          v-for="icon in icons"
          :key="icon.id"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="20px">
            {{ icon.id }}
          </v-icon>
        </v-btn>
      </v-col>

      <v-col>
        <strong> info@rocketstockpicks.co.in </strong>
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
export default {
  data: () => ({
    icons: [
      {
        id: "fab fa-facebook",
        url: "https://www.instagram.com/rocketstockpicks/",
      },
      {
        id: "fab fa-twitter",
        url: "https://www.instagram.com/rocketstockpicks/",
      },
      {
        id: "mdi-linkedin",
        url: "https://www.instagram.com/rocketstockpicks/",
      },
      {
        id: "mdi-instagram",
        url: "https://www.instagram.com/rocketstockpicks/",
      },
    ],
  }),
};
</script>

<style scoped>
.foot-r {
  background-size: fill;
  background-color: #1da1f2;
  width: 100%;
}
.col {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
strong {
  color: white;
}
</style>