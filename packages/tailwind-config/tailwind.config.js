const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "2.5rem", // 40px
      "7xl": "4.8125rem", // 77px
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      dark: "#0A0C0E",
      "dark-90": "#101214",
      "dark-85": "#15171A",
      "dark-80": "#1A1C20",
      "dark-70": "#383C45",
      "dark-60": "#4A4F5B",
      "dark-50": "#A4ACBD",
      "dark-10": "#D4DAE6",
      "brown-50": "#271C19",
      "brown-30": "#55423D",
      "light-green": "#BEC5AD;",
      "green-40": "#3B5249",
      "orange-40": "#FFC0AD",
      "orange-80": "#F87E33",
      purple: "#AB7BFF",
      yellow: "#FEEA38",
      pink: "#E77ABB",
      red: "#E43F40",
      orange: "#FFA44E",
      blue: "#81D4FA",
    },
    extend: {
      backgroundImage: {
        gradient: `linear-gradient(135deg, #FFF6F5 0%, #FDDEDB 23.96%, #FEB3E3 50.56%, #F9B1F5 70.16%, #76EDFD 100%)`,
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
