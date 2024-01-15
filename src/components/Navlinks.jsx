import React, { useState } from "react"

export default function Navlinks() {
  const [navlinks] = useState([
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
  ])

  return (
    <>
      {navlinks.map((link, index) => (
        <li key={index}>
          <a href={link.tabIndex}>{link.title}</a>
        </li>
      ))}
    </>
  )
}
