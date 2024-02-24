<template>
<v-container   fluid ma-0 >
      
  <div class="main-container">
  <v-toolbar elevation="0" class="main-toolbar" >
   <img 
        class="round"
        src="../assets/Logo-1.png"
        height="64px"
        width="70px"
      />
    <v-spacer></v-spacer>
    <v-toolbar-items class="toolbar-items">
      <v-btn text> Home </v-btn>
      <v-btn text> About </v-btn>
      <v-btn text> Contact </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</v-container>
</template>

<script>
</script>

<style>
.round {
  border-radius: 100%;
    margin-left:20% ;
 
  
}
.toolbar-items{
    margin-right: 10%;
    padding: 20px;
  
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     font-weight:900;
}
.main-toolbar{
    box-shadow: none;
    height: 100px;
   

}
.main-container{
    background-image: url("../assets/header-g.png");
}

</style> 