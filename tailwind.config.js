/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")
const { createThemes } = require("tw-colors")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        revalia: ["Revalia", ...defaultTheme.fontFamily.sans],
        comfortaa: ["Comfortaa", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        questrial: ["Questrial", ...defaultTheme.fontFamily.sans],
      },
      transitionTimingFunction: {
        "swift-ease-out": "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
        "swift-out-ease": "cubic-bezier(0.4, 0, 0.2, 0.5)",
      },
      screens: {
        // "3xl": { min: "2500px" },
        // "2xl_max": { max: "1535px" },
        // xl_max: { max: "1279px" },
        // lg_max: { max: "1023px" },
        // md: { min: "800px" },
        // sm_max: { max: "639px" },
        // xs_max_mid: { max: "380px" },
        // xs_max: { max: "280px" },
        // ipad_lg: {
        //   raw: "only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (hover: none)",
        // },
        // tall: { raw: "(min-height: 800px)" },
        sm: "530px",
        sm_mid: { min: "700px" },
        md: "800px",
        xs_max: { max: "350px" },
        ipad_air: {
          raw: "only screen and (min-width: 820px) and (max-height: 1200px)",
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
      width: {
        fluid_2xl: "min(900px, 80%)",
        fluid: "min(700px, 80%)",
        fluid_80: "min(420px, 80%)",
        fluid_60: "min(320px, 80%)",
        fluid_40: "min(220px, 80%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"])
    }),
    createThemes({
      dark: {
        primary: "#202020",
        secondary: "#ededed",
        tertiary: "#242424",
        fade: "#9a9a9a",
        highlight: "#A8DADC",
        primary_transparent: "rgba(32, 32, 32, 0.75)",
      },
      light: {
        primary: "#ededed",
        secondary: "#202020",
        tertiary: "#DBDBDB",
        fade: "#505050",
        highlight: "#457B9D",
        primary_transparent: "rgba(237, 237, 237, 0.75)",
      },
    }),
  ],
}
