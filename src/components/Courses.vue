<template>
    <div class="courses">
        <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

            <v-card-title>
                Trading
            </v-card-title>

            <v-card-subtitle>
                Learn Trading
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                    Curriculum
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
        <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

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
    flex-direction: row;
}
</style>