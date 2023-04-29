/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey':'#606060',
        'custom-white':'#F8F8F8',
        'custom-orange':'#ED9276',
        'custom-yellow':'#DDDD7B',
        'custom-blue':'#AEDBE0',
      },
      backgroundImage: {
        'pic1':"url('/src/Images/vector1.png')",
        'pic2':"url('/src/Images/vector2.png')",
        'pic3':"url('/src/Images/vector3.png')",
      },
    },
  },
  plugins: [],
}

