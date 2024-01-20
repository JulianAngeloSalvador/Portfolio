import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Stack from "../sections/Stack"

export default function Index() {
  const [screen, setScreen] = useState("")

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

  const email = process.env.GATSBY_CONTACT_EMAIL
  const encodeEmail = email => window.btoa(email)
  return (
    <Layout>
      <section className="parallax-grid h-dvh text-secondary flex flex-col items-center justify-center md:text-center text-left gap-y-4 relative isolate">
        <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
        <header className="w-fluid_80 sm:w-fluid 2xl:w-fluid_xl">
          <h1 className="text-4xl 2xl:text-7xl font-bold font-revalia py-4 ipad_lg:text-6xl">
            Julian Salvador
          </h1>
          <h2 className="xs_max:text-2xl text-4xl 2xl:text-6xl text-fade font-semibold">
            I bring visionary concepts to life.
          </h2>
        </header>
        <main className="lead-content sm:w-fluid w-fluid_80 md:w-fluid_80 ipad_lg:w-fluid_xl 2xl:w-fluid_xl">
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
            className="landing-buttons bg-secondary text-primary shadow-shadowClr shadow-md md:shadow-lg"
            onClick={() => {
              window.location.href = `mailto:${decodeURIComponent(
                window.atob(encodeEmail(email))
              )}`
            }}
          >
            Let's Connect
          </motion.button>
          <motion.button
            className="landing-buttons bg-primary outline outline-secondary outline-2 shadow-shadowClr shadow-md md:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.15, type: "tween" }}
          >
            Download CV
          </motion.button>
        </div>
      </section>

      <section
        className={`flex justify-center min-h-dvh items-center ${
          screen > 1390 ? "bg-primary" : "parallax-grid"
        } relative isolate`}
        id="about"
      >
        <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
        <main className="grid grid-cols-1 md:grid-cols-2 bg-tertiary w-fluid_2xl xl:w-[1400px]">
          <div
            className={`col-start-1 col-end-2 ${
              screen >= 800 && screen < 1400
                ? "col-start-1 col-end-3 row-start-2 row-end-3"
                : "md:row-start-1 md:row-end-2 row-start-2 row-end-3"
            } bg-primary`}
          >
            <article className="lead-content-md bg-primary p-8 pt-0 sm:px-20 md:p-8 md:pb-16 text-fade flex flex-col gap-y-4 md:px-12 2xl:px-20 h-full relative -translate-y-12 md:translate-y-0 z-30">
              <h1 className="article-headline text-secondary py-2">About Me</h1>
              <p className="">
                Hey there! <span className="inline-block">👋</span> I'm Julian,
                a Web Developer based in the Philippines, dedicated to crafting
                aesthetically pleasing, functional, and user-centric digital
                experiences.
              </p>
              <p>
                My journey in web development began with the foundational trio
                of HTML, CSS, and JavaScript. Subsequently, I further honed my
                skills through an intensive 3-month Full-Stack Development
                program at{" "}
                <a
                  href="https://zuitt.co/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Zuitt Coding Bootcamp"
                  title="Visit Zuitt Coding Bootcamp"
                  className="highlighted"
                >
                  Zuitt Coding Bootcamp
                </a>
                , where I received multiple awards.
              </p>

              <p className="">
                In every project I take on, I'm all about achieving design
                excellence. As a Web Developer, my journey is fueled by my
                passion for constant learning and keeping up with the latest
                trends and tech. This way, I can create visually captivating,
                user-friendly solutions that adapt to ever-changing user
                demands.
              </p>
            </article>
          </div>
          <section
            className={`bg-primary shadowed md:filter-none w-full ${
              screen >= 800 && screen < 1400 ? "col-start-1 col-end-3 pt-6" : ""
            }`}
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="rounded-full flex justify-center items-center w-fluid_80 aspect-square md:neumorph-outer relative -translate-y-16 md:translate-y-0 bg-primary ">
                <div className="w-[92.5%] aspect-square rounded-full  overflow-hidden md:neumorph-inner bg-tertiary ">
                  <StaticImage
                    src="../images/temp_photo.png"
                    alt="Julian Salvador"
                    layout="constrained"
                    formats={["auto", "avif", "webp"]}
                    loading="eager"
                    placeholder="dominantColor"
                    style={{ bottom: "-.325rem", left: ".425rem" }}
                    class="image-shadow"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
      <Stack />
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </>
  )
}
export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
