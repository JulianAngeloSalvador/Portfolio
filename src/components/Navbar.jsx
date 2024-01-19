import React, { useEffect, useRef, useState } from "react"
import ThemeToggler from "./ThemeToggler"
import Navlinks from "./Navlinks"
import Socials from "./SocialLinks"
import { motion } from "framer-motion"
import Logo from "./Logo"
import { FaArrowUp } from "react-icons/fa"

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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [screen, setScreen] = useState("")
  const [activeLink, setActiveLink] = useState(null)
  const [scrollDown, setScrollDown] = useState(false)
  const scrollerTop = useRef(null)
  const indicator = useRef(null)

  const handleLinkIndicator = target => {
    if (indicator.current && screen >= 800) {
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

  // Scroll Handler
  useEffect(() => {
    let prevScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > prevScroll) {
        console.log(currentScroll)
        setScrollDown(true)
      } else {
        setScrollDown(false)
      }

      prevScroll = currentScroll

      if (currentScroll < 650) {
        scrollerTop.current.classList.add("opacity-0", "translate-y-full")
        scrollerTop.current.classList.remove("opacity-50", "translate-y-0")
      } else {
        scrollerTop.current.classList.add("opacity-50", "translate-y-0")
        scrollerTop.current.classList.remove("opacity-0", "translate-y-full")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (screen >= 800) {
      setIsOpen(false)
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = isOpen ? "hidden" : "auto"
    }
  }, [screen, isOpen])

  const handleActiveLink = index => {
    setActiveLink(index)
    screen <= 800 && setIsOpen(isOpen => !isOpen)
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
      <nav
        className={`main-nav ${
          scrollDown ? "-translate-y-full" : "-translate-y-0"
        }`}
      >
        <div className="flex md:hidden items-center">
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
        <ul className="navlink-container gap-x-6 relative">
          <Navlinks
            handleLinkIndicator={handleLinkIndicator}
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
          <div
            className="navlink-indicator hidden md_mid:block"
            ref={indicator}
          ></div>
        </ul>
        <header className="flex justify-center items-center">
          <a href="/">
            <Logo />
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
      <button
        onClick={scrollToTop}
        ref={scrollerTop}
        className={`fixed right-3 bottom-3 z-[80]  w-8 aspect-square opacity-0 translate-y-full text-secondary rounded-full outline outline-secondary outline-2 grid place-items-center transition-all duration-[.3s] ease-in-out hover:opacity-100 hover:bg-primary`}
      >
        <FaArrowUp
          style={{ width: "100%", height: "100%", padding: ".5rem" }}
        />
      </button>
    </>
  )
}
