/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")
const { createThemes } = require("tw-colors")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      transitionTimingFunction: {
        "swift-ease-out": "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
      },
      screens: {
        "3xl": { min: "2500px" },
        "2xl_max": { max: "1535px" },
        xl_max: { max: "1279px" },
        lg_max: { max: "1023px" },
        md_max: { max: "767px" },
        sm_max: { max: "639px" },
        xs_max_mid: { max: "400px" },
        xs_max: { max: "280px" },
        ipad_lg: {
          raw: "only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (hover: none)",
        },
      },
      boxShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        facebook: "#0A66FF",
        linkedin: "#0A66C2",
        github: "#29303d",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"])
    }),
    createThemes({
      dark: {
        primary: "#181818",
        secondary: "#ededed",
        tertiary: "#242424",
      },
      light: {
        primary: "#ededed",
        secondary: "#181818",
        tertiary: "#DBDBDB",
      },
    }),
  ],
}
