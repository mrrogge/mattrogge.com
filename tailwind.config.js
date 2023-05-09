/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "retro",
      {
        mrr_dark: {
          "primary": "#38bdf8",
          "secondary": "#fdba74",
          "accent": "#fde047",
          "neutral": "#191D24",
          "base-100": "#292524",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ]
  }
}