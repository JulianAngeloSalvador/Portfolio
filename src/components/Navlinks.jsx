import React, { useState } from "react"

export default function Navlinks({ onLinkClick }) {
  const navlinks = [
    {
      title: "About",
      tabIndex: "#about",
    },
    {
      title: "Stack",
      tabIndex: "#stack",
    },
    {
      title: "Projects",
      tabIndex: "#projects",
    },
    {
      title: "Contact",
      tabIndex: "#contact",
    },
  ]
  const [activeLink, setActiveLink] = useState(null)

  const handleActiveLink = index => {
    setActiveLink(index)
  }

  return (
    <>
      {navlinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.tabIndex}
            onClick={e => {
              handleActiveLink(index)
              onLinkClick(e.target)
            }}
            className={activeLink === index ? "navlink-active" : ""}
          >
            {link.title}
          </a>
        </li>
      ))}
    </>
  )
}
