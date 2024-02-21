<template>
  <v-app>
    <v-app-bar app >
      <Navbar />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navigation-Bar'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{Navbar}
};
</script>
