module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: "#f1eef4",
        pinklight: "#FEF7FF",
        pinky:"#EADDFF",
        pink: "#E8DEF8",
        purplelight: "#DFD5EC",
        purple: "#65558F",
        darkPurple: "#21005D",

      },
      screens: {
        "max-lg": { max: "850px" },
        "max-xl": { max: "1200px" },
      },
    },
  },
  plugins: [],
};
