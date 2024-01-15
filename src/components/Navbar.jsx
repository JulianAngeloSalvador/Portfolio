import React from "react"
import ThemeToggler from "./ThemeToggler"
import { StaticImage } from "gatsby-plugin-image"
import Navlinks from "./Navlinks"
import Socials from "./SocialLinks"

export default function Navbar() {
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

  return (
    <nav className="guuide1 main-nav">
      <div className="hidden md_max:flex md_max:items-center">
        <MenuBtn />
      </div>
      <ul className="navlink-container md_max:hidden">
        <Navlinks />
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

      <div className="flex justify-end items-center gap-x-2">
        <ul className="navlink-container md_max:hidden">
          <Socials />
        </ul>
        <ThemeToggler />
      </div>
    </nav>
  )
}
