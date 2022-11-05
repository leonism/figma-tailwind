/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {

    }
  },
  plugins: [],
}

// content: ["./*.{html}"],
// content: ["./*.html"],
// content: ["./*.{html}"],
// content: ["./**/*.{html,js}"],