<template>
  <v-app>
   
      <Navbar />
    <v-divider></v-divider>

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
