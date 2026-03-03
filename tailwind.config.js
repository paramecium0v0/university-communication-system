/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'university': {
          'navy': '#1a365d',
          'blue': '#2c5282',
          'light-blue': '#4299e1',
          'cream': '#f7fafc',
          'gold': '#d4af37',
        }
      }
    },
  },
  plugins: [],
}

