module.exports = {
  content: ["./pages/**/*.{js,ts,tsx,jsx}","./comps/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "ll":"2500px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
