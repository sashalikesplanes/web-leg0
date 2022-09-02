const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: { }
	},

	plugins: [forms, typography, daisyui],
	daisyui: {
    themes: [
      {
        mytheme: {
         "primary": "#facc15",
         "secondary": "#9333ea",
         "accent": "#e879f9",
         "neutral": "#f472b6",
         "base-100": "#1f2937",
         "info": "#2AAAF4",
         "success": "#126954",
         "warning": "#FA820A",
         "error": "#EC6974",
          },
        },
      ],
    },
};

module.exports = config;
