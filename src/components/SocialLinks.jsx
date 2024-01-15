import React, { useState } from "react"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { TbBrandGithubFilled } from "react-icons/tb"
import { motion } from "framer-motion"

export default function Socials() {
  const [socials] = useState([
    {
      social: "facebook",
      link: "https://www.facebook.com/jaslvdr0618",
    },
    {
      social: "linkedin",
      link: "https://www.linkedin.com/in/julian-salvador-751a24266/",
    },
    {
      social: "github",
      link: "https://github.com/JulianAngeloSalvador",
    },
  ])

  return (
    <>
      {socials.map(link => {
        let social_icon

        switch (link.social) {
          case "facebook":
            social_icon = <FaFacebookF style={{ fontSize: "1.25rem" }} />
            break
          case "linkedin":
            social_icon = <FaLinkedinIn style={{ fontSize: "1.25rem" }} />

            break
          case "github":
            social_icon = (
              <TbBrandGithubFilled style={{ fontSize: "1.25rem" }} />
            )

            break
          default:
            break
        }

        return (
          <motion.li
            key={link.social}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 15,
              delay: 0.1,
            }}
          >
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="block p-2 rounded-md hocus:bg-secondary hocus:text-primary transition-all duration-[.1s] ease-linear"
            >
              {social_icon}
            </a>
          </motion.li>
        )
      })}
    </>
  )
}
