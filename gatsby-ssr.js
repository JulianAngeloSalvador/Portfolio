import "./src/styles/global.css"
import React from "react"
import ThemeContextProvider from "./src/contexts/theme-context"

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
