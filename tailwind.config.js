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
      boxShadow: {
        'gray': '0 10px 15px -3px rgba(75, 85, 99, 0.1), 0 4px 6px -2px rgba(75, 85, 99, 0.05)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

