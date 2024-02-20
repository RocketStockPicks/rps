<template>
  <v-app>
    <div id="app">
      <Navbar />


      <!-- <v-container fluid>
      <v-col cols="12">
        <v-card class="mx-auto rounded-xl" flat>
          <v-img src="Logo.jpeg" max-height="20px" max-width="20px" contain>
            <v-card-title class="top ml-10">
              <h2 class="title1">Order your</h2>
            </v-card-title>
            <v-card-title class="ml-10 mt-n8">
              <h2 class="title2">Daily Groceries</h2>
            </v-card-title>
            <v-card-text class="ml-10">
              <h3 class="green--text">#Free Delivery</h3>
            </v-card-text>

          </v-img>
        </v-card>
        <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
          <div style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              ">
            <h3>Free Youtube Videos</h3>
          </div>

        </v-card>

      </v-col>

    </v-container> -->
      <h3>Free Youtube Videos</h3>
      <div>
        <FreeYoutubeVideos />
      </div>


      <h3>Blogs</h3>

      <div class="blogs">
        <Blog />
      </div>
      <h3>Courses</h3>
      <div>
        <Courses />
      </div>
      <br>
      <h3>Testinomials</h3>
      <div>
        <Testinomials />
      </div>
      <div class="footer">
        <Foot />
      </div>


    </div>
  </v-app>
</template>

<script>
import Navbar from '../components/Navigation-Bar'
import Blog from '../components/Blogs-Page'
import FreeYoutubeVideos from '../components/Free-Youtube-Videos'
import Foot from '../components/Footer'
import Courses from '../components/Courses'
import Testinomials from '@/components/Testinomials.vue'
//import Modal from '../components/Modal.vue'
export default {
  name: 'Home-page',

  components: {
    Navbar,
    FreeYoutubeVideos,
    Blog,
    Foot,
    Courses,
    Testinomials
    //Modal
  },
}
</script>

<style>
.fytv {

  background-color: yellow;
  flex-grow: 1;
}

.marginLeft {
  margin-left: -90px;
}

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

@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }

  h2.title2 {
    font-size: 15px;
  }

  .top {
    margin-top: 20px;
  }
}

@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}

@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}

#app {
  background-image: url("/Users/tanuj/Documents/rocket-stock-picks/public/wallpaper2.jpg");
  font-family: 'Red Rose', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  display: flex;
  flex-direction: column;
  /* z-index:100; */
  /* position:relative; */
  /* fallback for old browsers */

  min-height: 100vh;
  width: 100%;
}

.footer {
  background-color: pink;
}
</style>