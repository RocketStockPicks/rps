<template>
  <div class="containers">
    <v-btn class="mx-2" large style="color: white" text> <h3>Home</h3> </v-btn>
    <v-btn style="color: white" text> <h3>About</h3> </v-btn>
     <v-btn style="color: white" text> <h3>Success Stories</h3> </v-btn>
    <v-btn style="color: white" text> <h3>CONTACT</h3> </v-btn>
    <div class="nav-bar">
      <img class="rocket-image" src="../assets/rocker-logo.gif" />
    </div>
  </div>
</template>

<script>
</script>

<style>
.round {
  border-radius: 100%;
  /* margin-left:20% ; */
}
.containers {
  background-color: black;
  background-size: cover;
  justify-content: center;
}

.main-contents {
  background-color: rgb(46, 45, 45);
}
.rocket-image {
  height: 100%;
  width: 100%;
  max-height: 600px;
  object-fit: fill;
}
.nav-bar {
  object-fit: fill;
}
</style> 