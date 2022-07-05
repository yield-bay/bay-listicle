const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F6FF",
          100: "#E0EDFF",
          200: "#C2DBFF",
          300: "#A3C9FF",
          400: "#85B8FF",
          500: "#67A7FF",
          600: "#1F7CFF",
          700: "#0059D6",
          800: "#003B8F",
          900: "#001E47",
        },
        // secondary: {
        //   50: "#FFF9F0",
        //   100: "#FFF2E0",
        //   200: "#FFE6C2",
        //   300: "#FFD9A3",
        //   400: "#FFCC85",
        //   500: "#FFC067",
        //   600: "#FFA21F",
        //   700: "#D67D00",
        //   800: "#8F5300",
        //   900: "#472A00",
        // },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
