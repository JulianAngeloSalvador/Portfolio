import React, { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext = createContext(null)

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      "useThemeContext must be used within the ThemeContextProvider"
    )
  }

  return context
}
