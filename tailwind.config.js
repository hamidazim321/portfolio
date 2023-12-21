/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headshot': "url(./src/assets/HeadShot.png)",
        'hardware': "url(./src/assets/hardware.jpg)",
        'laptop': "url(./src/assets/laptop.jpg)"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

