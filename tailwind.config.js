/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // NunSans: ['Nunito Sans', 'serif'],
        // Paprika: ['Paprika', 'serif'],
        // Oswald: ['Oswald', 'serif'],

        Red_Hat: ['Red Hat Display', 'serif'] 
      },
    },
  },
  plugins: [],
}
