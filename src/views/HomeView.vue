<template>
  <v-app>
    
    <div class="mall">

      
    
  

      <div>
        <FreeYoutubeVideos />
      </div>

      <div>
        <Courses />
      </div>

    <div>
      <About/>
    </div>

      <Premium />

      <div class="block outlined">
        <Testinomials />
      </div>

      <!-- <h3>Blogs</h3> -->
     
      <div >
        <v-footer>
          <Foot />
        </v-footer>
      </div>
    </div>
  </v-app>
</template>

<script>

import FreeYoutubeVideos from "../components/Free-Youtube-Videos";
import Foot from "../components/Footer";
import Courses from "../components/Courses";
import Testinomials from "@/components/Testinomials.vue";
import Premium from "@/components/Premium.vue";

import About from '../components/About.vue'
export default {
  name: "Home-page",

  components: {
    FreeYoutubeVideos,
    Foot,
    Courses,
    Testinomials,
    Premium,
    About
  },
};
</script>

<style>

.blogs {
  margin-top: 20px;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30%;
}

.mtop {
  margin-top: 100px;
}

.mbottom {
  margin-bottom: 100px;
}

.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}



#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  display: flex;
  flex-direction: column;
  /* z-index:100; */
  /* position:relative; */
  /* fallback for old browsers */


}
</style>