module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9333ea",

          "secondary": "#2563eb",

          "accent": "#1e40af",

          "neutral": "#f3f4f6",

          "base-100": "#ffff",

          "info": "#ABDEE8",

          "success": "#74E7AB",

          "warning": "#EDAE0C",

          "error": "#F5193A",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  