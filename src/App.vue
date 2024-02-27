<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navigation-Bar";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: { Navbar },
};
</script>
<style >
body,
html {
  height: 100%;
  margin: 0;
}
</style>
