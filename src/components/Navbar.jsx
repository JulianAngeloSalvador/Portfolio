import React, { useRef } from "react"
import ThemeToggler from "./ThemeToggler"
import { StaticImage } from "gatsby-plugin-image"
import Navlinks from "./Navlinks"
import Socials from "./SocialLinks"

export default function Navbar() {
  const indicator = useRef(null)
  const MenuBtn = () => (
    <button
      className="menu-button"
      //   onClick={() => setIsOpen(isOpen => !isOpen)}
    >
      <div className="menu-icon"></div>
      <div className="menu-icon scale-x-75"></div>
      <div className="menu-icon scale-x-50"></div>
    </button>
  )

  const handleLinkIndicator = target => {
    if (indicator.current) {
      indicator.current.style.left = target.offsetLeft + "px"
      indicator.current.style.width = target.offsetWidth + "px"
    }
  }
  return (
    <>
      <nav className="main-nav">
        <div className="hidden md_max:flex md_max:items-center">
          <MenuBtn />
        </div>
        <ul className="navlink-container md_max:hidden gap-x-6 relative">
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
          <ul className="navlink-container md_max:hidden gap-x-3">
            <Socials />
          </ul>
          <ThemeToggler />
        </div>
      </nav>
      <aside className="fixed top-0 left-0 w-60 h-dvh bg-teal-900"></aside>
    </>
  )
}
