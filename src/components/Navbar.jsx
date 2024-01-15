import React, { useRef, useState } from "react"
import ThemeToggler from "./ThemeToggler"
import { StaticImage } from "gatsby-plugin-image"
import Navlinks from "./Navlinks"
import Socials from "./SocialLinks"
import { motion } from "framer-motion"

const variants = {
  closed: {
    x: "-100%",
  },
  open: {
    x: "0",
  },
}

const closeMenu = {
  hidden: {
    scale: [1, 1.1, 0],
  },
  displayed: {
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
}

const menuToggler = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    when: "beforeChildren",
  },
}

const menuIcon = {
  hidden: { opacity: 0, x: "-100%" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      delay: 0.35,
    },
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const indicator = useRef(null)

  const handleLinkIndicator = target => {
    if (indicator.current) {
      indicator.current.style.left = target.offsetLeft + "px"
      indicator.current.style.width = target.offsetWidth + "px"
    }
  }
  return (
    <>
      <nav className="main-nav">
        <div className="flex lg:hidden items-center">
          <motion.button
            variants={menuToggler}
            initial="show"
            animate={isOpen ? "hidden" : "show"}
            transition={{
              duration: 1,
              staggerChildren: 1,
              staggerDirection: -1,
            }}
            className="menu-button overflow-hidden"
            onClick={() => setIsOpen(isOpen => !isOpen)}
          >
            <motion.div variants={menuIcon} className="menu-icon"></motion.div>
            <motion.div
              variants={menuIcon}
              className="menu-icon"
              initial={{ scaleX: ".75" }}
            ></motion.div>
            <motion.div
              variants={menuIcon}
              className="menu-icon"
              initial={{ scaleX: ".5" }}
            ></motion.div>
          </motion.button>
        </div>
        <ul className="navlink-container  gap-x-6 relative">
          <Navlinks onLinkClick={handleLinkIndicator} />
          <div className="navlink-indicator" ref={indicator}></div>
        </ul>
        <header className="flex justify-center items-center">
          <a href="/">
            <StaticImage
              src="../images/Logo.png"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt="Portfolio Logo"
              className="brand-logo"
            />
          </a>
        </header>

        <div className="flex justify-end items-center gap-x-4">
          <ul className="navlink-container  gap-x-3">
            <Socials />
          </ul>
          <ThemeToggler />
        </div>
      </nav>
      <motion.aside
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="aside-nav"
        transition={{ type: "tween", delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      >
        <motion.button
          className="absolute top-4 right-4 w-7 aspect-square"
          variants={closeMenu}
          animate={isOpen ? "displayed" : "hidden"}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(isOpen => !isOpen)}
        >
          <span className="absolute w-full h-0.5 left-0 bg-secondary rounded-md rotate-45"></span>
          <span className="absolute w-full h-0.5 left-0 bg-secondary rounded-md -rotate-45"></span>
        </motion.button>
      </motion.aside>
    </>
  )
}
