import React from "react"
import { useState } from "react"
import { useThemeContext } from "../contexts/theme-context"
import { motion } from "framer-motion"
import { IoMdSunny, IoMdMoon } from "react-icons/io"

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

export default function ThemeToggler() {
  const { theme, setTheme } = useThemeContext()
  const [isToggled, setIsToggled] = useState(false)

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    setIsToggled(!isToggled)
  }

  return (
    <div className="flex justify-between items-center gap-x-2 p-2 theme-toggler">
      <button
        onClick={handleTheme}
        className={`relative rounded-full w-12 h-6 bg-secondary flex justify-start py-0.5 ${
          isToggled && "justify-end"
        } `}
      >
        <motion.div
          className="w-1/2 h-full bg-primary rounded-full mx-0.5 flex justify-between relative"
          layout
          transition={spring}
        >
          <motion.div key={theme} className="toggler-icon">
            {theme === "dark" ? <IoMdMoon /> : <IoMdSunny />}
          </motion.div>
        </motion.div>
      </button>
    </div>
  )
}
