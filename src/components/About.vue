<template>
  <v-container  style="color:white;  background-color: rgb(10, 10, 39); border-radius:10%;">
  
    <h2 style="margin-top:5%; letter-spacing:2px;">KNOW MORE ABOUT US</h2>
      <hr/>
    <v-row class="navy" >
      <v-col cols="12" sm="6" style="border-radius:2%">
        <v-img style="border-radius:20px" src="../assets/about-us.jpeg"> </v-img>
      </v-col>

      <v-col cols="12" sm="6" class="About-class">
      
        <div class="about-content">
          <p>
            We have been following the financial markets and geopolitics for
            combined <b style="font-size: 30px">15+ </b> years now and have a solid understanding of technical analysis using candlestick chart pattern and Python/Pinescript programming languages. 
          </p>
       
          <p>
            Our  <b style="font-size: 30px">'RamBaan Strategy'</b> coded on TradingView is a one stop shop for identifying the best entry, re-entry and exit for trading and investing positions.* 

          </p>

         <div class="copy-right d-flex" >
            <i class="fa fa-copyright fa-2x"></i>
             <div style="color: #1da1f2 height:30px"> Application number to
            copyright RamBaan Strategy: 202231038788
          </div>
         </div>

         <div class="social-media-icons d-flex">

          <p>
            <a href="https://twitter.com/bittu_grd" target="_blank"
              ><i class="fab fa-twitter fa-2x" style="color: #1da1f2"></i
            ></a>
           
          </p>
          <p>
            <a href="https://www.youtube.com/@RocketStockPicks" target="_blank"
              ><i class="fab fa-youtube fa-2x" style="color: red"></i
            ></a>
           
          </p>
         </div>

          
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.row {
  align-items: center;
}

p.small {
  line-height: 0.8;
}

p.big {
  line-height: 1.8;
}
h2 {
  margin-bottom: 5%;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
 
}

.fa-twitter:hover {
  transform: scale(1.2);
  
}

.fa-youtube:hover {
  transform: scale(1.2);
  
}
.about-content{
 align-content: center;
 font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 font-size: 25px;
 
 
}
.social-media-icons{
  margin-top: 4%;
 justify-content: space-around;
}

.copy-right{
  border-style: solid;
  border-color: white;
  border-width: 4px;
  border-radius: 5%;
  align-items: center;
  
}

</style>