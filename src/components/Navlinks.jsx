import React from "react"

export default function Navlinks({
  handleLinkIndicator,
  activeLink,
  handleActiveLink,
}) {
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

  return (
    <>
      {navlinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.tabIndex}
            onClick={e => {
              handleActiveLink(index)
              handleLinkIndicator(e.target)
            }}
            className={
              activeLink === index
                ? "normal-fs navlink active"
                : "normal-fs navlink"
            }
          >
            {link.title}
          </a>
        </li>
      ))}
    </>
  )
}
