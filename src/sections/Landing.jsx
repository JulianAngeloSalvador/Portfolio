import React from "react"
import { motion } from "framer-motion"

export default function Landing() {
  const email = process.env.GATSBY_CONTACT_EMAIL
  const encodeEmail = email => window.btoa(email)

  return (
    <section className="parallax-grid min-h-dvh text-secondary flex flex-col items-center justify-center md:text-center text-left gap-y-4 relative isolate">
      <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
      <header className="w-fluid_80 sm:w-fluid_xl 2xl:w-fluid_xl">
        <h1 className="font-bold font-revalia py-4 pt-20 2xl:pt-4 landing-headline">
          Julian Salvador
        </h1>

        <h2 className="font-semibold text-fade landing-subheadline">
          I bring visionary concepts to life.
        </h2>
      </header>

      <main className="lead-content w-fluid_80 sm:w-fluid_xl 2xl:w-fluid_xl">
        <p className="text-fade">
          Crafting seamless user experiences with expertise in front-end web
          development, and a versatile skill set spanning full-stack
          capabilities.
        </p>
      </main>
      <div className="text-xs md:text-xl w-fluid md:w-fluid_80 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-8  py-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15, type: "tween" }}
          className="landing-buttons bg-secondary text-primary shadow-shadowClr shadow-md md:shadow-lg normal-fs"
          onClick={() => {
            window.location.href = `mailto:${decodeURIComponent(
              window.atob(encodeEmail(email))
            )}`
          }}
        >
          Let's Connect
        </motion.button>
        <motion.button
          className="landing-buttons bg-primary outline outline-secondary outline-2 shadow-shadowClr shadow-md md:shadow-lg normal-fs"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.15, type: "tween" }}
        >
          Download CV
        </motion.button>
      </div>
    </section>
  )
}
