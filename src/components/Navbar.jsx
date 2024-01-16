import React, { useEffect, useRef, useState } from "react"
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
const dimmer = {
  inactive: {
    opacity: 0,
    pointerEvents: "none",
  },
  active: {
    opacity: 1,
    pointerEvents: "auto",
  },
}
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [screen, setScreen] = useState("")
  // const email = process.env.GATSBY_CONTACT_EMAIL
  // const encodeEmail = email => window.btoa(email)
  const indicator = useRef(null)

  const handleLinkIndicator = target => {
    if (indicator.current && screen >= 1023) {
      indicator.current.style.left = target.offsetLeft + "px"
      indicator.current.style.width = target.offsetWidth + "px"
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (screen >= 1023) {
      setIsOpen(false)
    }
  }, [screen])

  const [activeLink, setActiveLink] = useState(null)

  const handleActiveLink = index => {
    setActiveLink(index)
    screen <= 1023 && setIsOpen(isOpen => !isOpen)
  }

  return (
    <>
      <motion.div
        className="dimmer"
        variants={dimmer}
        initial="inactive"
        animate={isOpen ? "active" : "inactive"}
        onClick={() => setIsOpen(isOpen => !isOpen)}
      />
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
          <Navlinks
            handleLinkIndicator={handleLinkIndicator}
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
          <div
            className="navlink-indicator hidden lg:block"
            ref={indicator}
          ></div>
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
        transition={{ type: "tween", delay: 0.15 }}
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
        <section className="bg-tertiary h-full flex flex-col justify-center gap-y-20 ">
          <ul className="flex flex-col flex-1 sm:flex-grow-0 justify-center w-full gap-y-7 pt-24">
            <Navlinks
              handleLinkIndicator={handleLinkIndicator}
              handleActiveLink={handleActiveLink}
              activeLink={activeLink}
            />
          </ul>

          <ul className="flex justify-center gap-x-8 w-full md:justify-self-end py-4">
            <Socials />
          </ul>
        </section>
      </motion.aside>
    </>
  )
}

{
  /* <motion.button
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3, type: "spring" }}
  className="landing-buttons-text bg-secondary text-primary py-2 px-4"
  onClick={() => {
    window.location.href = `mailto:${decodeURIComponent(
      window.atob(encodeEmail(email))
    )}`
  }}
>
  Let's Connect
</motion.button> */
}
