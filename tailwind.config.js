/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      tablet: "960px",
      desktop: "1248px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        tablet: "1.5rem",
      },
    },
    colors: {
      white: "#fff",
      brand: "#3f3cbb", //purple
      midnight: "#121063",
      metal: "#565584",
      "tahiti-blue": "#3ab78f",
      "cool-white": "#ecebff",
      "bubble-gum": "#ff77e9",
      "copper-rust": "#78dcca",
    },
    boxShadow: {
      sm: "0 2px 4px 0 rgba(11, 10, 55, 0.15)",
      lg: "0 8px 20px 0 rgba(18, 16, 99, 0.06)",
    },
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80 px", letterSpacing: "-0.032em" }],
    },
    fontFamily: {
      satoshi: "Satoshi, sans-serif",
      inter: "Inter, sans-serif",
    },
    extend: {
      backgroundImage: {
        "body-bg":
          "linear-gradient(125deg, hsl(326deg 53% 62%) 0%, hsl(328deg 55% 72%) 5%, hsl(329deg 57% 82%) 13%, hsl(330deg 60% 91%) 30%, hsl(0deg 0% 100%) 58%, hsl(174deg 99% 94%) 81%, hsl(174deg 97% 87%) 92%, hsl(175deg 96% 79%) 98%, hsl(176deg 95% 68%) 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
