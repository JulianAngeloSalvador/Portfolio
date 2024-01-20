import theme from "tailwindcss/defaultTheme"

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
        "2xl": "1390px",
        xl_max: { max: "1279px" },
        // lg_max: { max: "1023px" },
        // md: { min: "800px" },
        // sm_max: { max: "639px" },
        // xs_max_mid: { max: "380px" },
        // xs_max: { max: "280px" },
        //
        // tall: { raw: "(min-height: 800px)" },
        sm: "530px",
        sm_mid: { min: "700px" },
        md: "800px",
        sm_less: { max: "389px" },
        xs_max: { max: "350px" },
        ipad_air: {
          raw: "only screen and (min-width: 820px) and (max-height: 1200px)",
        },
        ipad_lg: {
          raw: "only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (hover: none)",
        },
      },
      boxShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 10px 16px var(--tw-shadow-color)",
      },
      colors: {
        darkTertiary: "#242424",
        darkObject: "#303030",
        lightTertiary: "#DBDBDB",
        facebook: "#0A66FF",
        linkedin: "#0A66C2",
        github: "#29303d",
        htmlStart: "#E44D26",
        htmlEnd: "#F16529",
        cssStart: "#214CE5",
        cssEnd: "#2465F1",
        js: "#F3DD55",
        node1: "#569D4B",
        node2: "#6BC045",
        node3: "#3C873A",
        mongo1: "#001E2B",
        mongo2: "#27FF82",
        react: "#61DBFB",
        bootstrap1: "#8A12FB",
        bootstrap2: "#7811F7",
        tailwind: "#38BDF8",
        gsap1: "#0AE04F",
        gsap2: "#74EF84",
        figma1: "#EA4C1D",
        figma2: "#F76E5F",
        figma3: "#9D56F7",
        figma4: "#19B6F6",
        figma5: "#0AC97F",
        illustrator1: "#310000",
        illustrator2: "#F79500",
        blender1: "#F69455",
        blender2: "#3E76A2",
      },
      width: {
        fluid_3xl: "min(1200px, 100%)",
        fluid_2xl: "min(1100px, 100%)",
        fluid_xl: "min(900px, 80%)",
        fluid: "min(700px, 80%)",
        fluid_90: "min(600px, 100%)",
        fluid_80: "min(420px, 80%)",
        fluid_60: "min(320px, 80%)",
        fluid_40: "min(220px, 80%)",
        fluid_desktop: "min(350px, 80%)",
        fluid_laptop: "min(250px, 50%)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
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
        shadowClr: "#181818",
        highlight: "#99dee0",
        interact: "#A8DADC",
        primary_transparent: "rgba(32, 32, 32, 0.75)",
      },
      light: {
        primary: "#ededed",
        secondary: "#202020",
        tertiary: "#DBDBDB",
        fade: "#505050",
        shadowClr: "#aeaeae",
        highlight: "#455c9d",
        interact: "#457B9D",
        primary_transparent: "rgba(237, 237, 237, 0.75)",
      },
    }),
  ],
}
