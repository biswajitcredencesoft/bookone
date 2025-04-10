/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skyCustom: "#BFE9FF",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },


      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },

      keyframes: {
        wordFlyIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        cardRise: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        wordFlyIn: 'wordFlyIn 0.5s ease forwards',
        cardRise: 'cardRise 0.6s ease-out forwards',
      },

    },
  },
  plugins: [],
};
