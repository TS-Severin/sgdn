/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        "roboto": "var(--font-roboto)",
        "roboto-condensed": "var(--font-roboto-condensed)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sgdn-theme": "url('../public/sgdn-background.jpg')",
      },
      colors: {
        'green': '#a0ff00',
        'pink': '#b400a5',
      }
    },
  },
  plugins: [],
};
