/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}
