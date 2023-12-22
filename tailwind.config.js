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
        'headshot': "url('/HeadShot.jpg')",
        'laptop': "url('/laptop.jpg')",
        'hardware': "url('/hardware.jpg')"
      }
    }
  },
  plugins: [
  ],
}

