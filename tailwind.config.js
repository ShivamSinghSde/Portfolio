/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': {transform: 'scale(1)'},
          '33%': {transform: 'scale(1.2)'},
          '66%': {transform: 'scale(0.8)'},
          '100%': {transform: 'scale(1)'},
        },
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "0.6" },
          "100%": { transform: "translateY(-800px)", opacity: "0" },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        blob: 'blob 15s infinite',
        float: "floatUp 30s linear infinite",
        fadeInUp: "fadeInUp 1.5s ease-out both",
        fadeInLeft: "fadeInLeft 1.5s ease-out both",
        fadeInRight: "fadeInRight 1.5s ease-out both",

      }
    },
  },
  plugins: [],
}
