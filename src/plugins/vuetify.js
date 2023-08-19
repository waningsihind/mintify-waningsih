import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#3d6647",
        secondary: "#fff1f9",
        accent: "#9fa630",
        error: "#ff5252",
        info: "#2196f3",
        success: "#4caf50",
        warning: "#ffc107",
        background: "#f0f8ff"
      },
      dark: {
        primary: "#3d6647",
        secondary: "#fff1f9",
        accent: "#9fa630",
        error: "#ff5252",
        info: "#2196f3",
        success: "#4caf50",
        warning: "#ffc107",
        background: "#f0f8ff"
      },
    },
  },
});
