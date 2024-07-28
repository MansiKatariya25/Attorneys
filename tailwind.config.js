/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '320px',  // Custom small breakpoint
      md: '640px',  // Custom medium breakpoint
      xl: '1280px', // Custom extra-large breakpoint
    },
  },
  plugins: [],
}

