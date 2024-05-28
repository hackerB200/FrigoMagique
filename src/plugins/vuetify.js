/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import "vuetify/dist/vuetify.min.css";

// Composables
import { createVuetify } from 'vuetify'
import { VNumberInput } from 'vuetify/labs/VNumberInput';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VNumberInput,
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#E0E0E0', // Presque Blanc
          secondary: '#757575', // Gris moyen
          tertiary: '#424242', // Gris foncé
          accent: '#D32F2F', // Rouge
          error: '#B71C1C', // Rouge foncé
          info: '#BDBDBD', // Blanc grisé
          success: '#43A047', // Vert
          warning: '#FFC107' // Jaune
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#212121', // Noir foncé
          secondary: '#757575', // Gris moyen
          tertiary: '#424242', // Gris foncé
          accent: '#D32F2F', // Rouge
          error: '#B71C1C', // Rouge foncé
          info: '#E0E0E0', // Presque Blanc
          success: '#43A047', // Vert
          warning: '#FFC107' // Jaune
        },
      }
    },
  },
})