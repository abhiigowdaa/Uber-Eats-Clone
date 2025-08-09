/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uber-green': '#00AA44',
        'uber-dark': '#000000',
        'uber-gray': '#F5F5F5',
        'uber-light-gray': '#FAFAFA',
        'uber-text-gray': '#545454'
      },
      fontFamily: {
        'uber': ['Uber Move Text', 'system-ui', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'uber': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'uber-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
