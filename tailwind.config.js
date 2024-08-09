const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        div: 'linear-gradient(130deg, rgb(86, 86, 235), rgb(5, 5, 199))',
      },
      backgroundColor: {
        body: 'rgb(116, 125, 255)'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
