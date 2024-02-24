<template>
    <div class="courses">
        <div class="section-title">
        <h5>OUR COURSES</h5>

        <h1>We Offer Following Stock Trading Courses</h1>
        </div>
        <div class="content-body">  
        <v-container>
            <v-row justify="end" class="content">
                <v-col >
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/trading-course.jpg" height="200px" cover></v-img>
                    <p class="best-top">Exclusive</p>
                    <v-card-title>
                        Trading
                    </v-card-title>

                    <v-card-subtitle>
                        Learn Trading
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange-lighten-2" variant="text">
                        Buy Now
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show2 = !show2"></v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show2">
                        <v-divider></v-divider>

                        <v-card-text>
                            <ul>
                                <li>Demand & Supply</li>
                                <li>Graph</li>
                            </ul>
                        </v-card-text>
                    </div>
                </v-expand-transition>
            
            </v-card>
            </v-col>
            <v-col >
        <v-card class="mx-auto" max-width="344">
            <v-img src="../assets/investment-course.jpg" height="200px" cover></v-img>
<p class="best-top-2">BestSeller</p>
            <v-card-title>
                Investing
            </v-card-title>

            <v-card-subtitle>
                Learn Investing
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                    Curriculum
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show1 = !show1"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show1">
                    <v-divider></v-divider>

                    <v-card-text>
                        <ul>
                            <li>Long Term Analysis</li>
                            <li>Hedging</li>
                        </ul>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        </v-col>
        </v-row>
        </v-container>
        </div>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        show1: false,
        show2: false,
    }),
}
</script>

<style scoped>
.courses {
    display: flex;
    flex-direction: column;
    column-gap: 30px;
    background: rgb(197, 194, 194);
    min-width: 100vw;
    height: 70vh;
    padding: 3%;
    justify-content: space-between;
    
}

.content-body{
    direction: flex;
    padding-left: 15%;
    padding-right: 15%;
    /* margin-left: 20%;
    margin-right: 20%; */
}
 .best-top{clip-path:polygon(0% 0%,75% 0%,68% 50%,75% 100%,0% 100%);padding:0 57px 0 25px;background:#e91212;height:28px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-family:Roboto,sans-serif;font-weight:400;font-style:italic;margin-left:-10px;position:absolute;top:20px;left:0;border-radius:10px 0 0 0;}
.best-top-2{clip-path:polygon(0% 0%,75% 0%,68% 50%,75% 100%,0% 100%);padding:0 57px 0 25px;background:#0f0e55;height:28px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-family:Roboto,sans-serif;font-weight:400;font-style:italic;margin-left:-10px;position:absolute;top:20px;left:0;border-radius:10px 0 0 0;}

</style>