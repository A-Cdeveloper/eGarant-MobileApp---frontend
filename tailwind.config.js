/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular"],
        "inter-semibold": ["Inter_600SemiBold"],
        "inter-bold": ["Inter_700Bold"],
        roboto: ["Roboto_400Regular"],
        "roboto-semibold": ["Roboto_600SemiBold"],
        "roboto-bold": ["Roboto_700Bold"],
      },
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 24,
      "4xl": 36,
      "5xl": 48,
      "6xl": 60,
    },
    colors: {
      primary: {
        DEFAULT: "#394559",
        light: "#5b6580",
        dark: "#252d3e",
      },

      secondary: {
        DEFAULT: "#f1492a",
        light: "#f57a5c",
        dark: "#b0321f",
      },

      background: "#fdf8f5",
      textPrimary: "#212121",
      success: "#27BD6DFF",
      warning: "#f2b705",
      danger: "#d72638",
      info: "#368fc3",
      white: "#ffffff",
    },
  },
  plugins: [],
};
