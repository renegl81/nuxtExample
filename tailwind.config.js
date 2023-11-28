/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      minHeight: {
        '600': '600px',
      },
      maxWidth: {
        '90': '90%',
        '8xl': '1440px',
      },
      borderRadius: {
        'lg-2': '0.625rem',
        '4xl': '7rem'
      },
      height: {
        '05': '2px'
      },
      rotate: {
        '135': '135deg',
      },
      spacing: {
        '98': '26rem',
        '1/5': '20%',
        '3/5': '60vh',
      }
    },
  },
  plugins: [require("daisyui")],
}
