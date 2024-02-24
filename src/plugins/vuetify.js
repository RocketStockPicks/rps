import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import '@mdi/font/css/materialdesignicons.css' 

import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import Embed from "v-video-embed";

Vue.use(Vuetify);
Vue.use(Embed);

export default new Vuetify({
  icons: {
    iconfont: "mdi" || "fa" || "md",

  },
});
