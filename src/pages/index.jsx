import * as React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Index() {
  const email = process.env.GATSBY_CONTACT_EMAIL
  const encodeEmail = email => window.btoa(email)
  // sm:text-6xl
  return (
    <Layout>
      <section className="parallax-grid h-dvh text-secondary flex flex-col items-center justify-center md:text-center text-left gap-y-4 relative isolate">
        <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
        <header className="w-fluid_80 sm:w-fluid 2xl:w-fluid_xl">
          <h1 className="text-4xl 2xl:text-7xl font-bold font-revalia py-4">
            Julian Salvador
          </h1>
          <h2 className="xs_max:text-2xl text-4xl 2xl:text-6xl text-fade font-semibold">
            I bring visionary concepts to life.
          </h2>
        </header>
        <main className="lead-content sm:w-fluid w-fluid_80 md:w-fluid_80 2xl:w-fluid_xl">
          <p className="text-fade">
            Crafting seamless user experiences with expertise in{" "}
            <span className="highlighted">front-end</span> web development, and
            a versatile skill set spanning{" "}
            <span className="highlighted">full-stack</span> capabilities.
          </p>
        </main>
        <div className="text-xs md:text-xl w-fluid md:w-fluid_80 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-8  py-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.15, type: "tween" }}
            className="landing-buttons bg-secondary text-primary "
            onClick={() => {
              window.location.href = `mailto:${decodeURIComponent(
                window.atob(encodeEmail(email))
              )}`
            }}
          >
            Let's Connect
          </motion.button>
          <motion.button
            className="landing-buttons outline outline-secondary outline-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.15, type: "tween" }}
          >
            Download CV
          </motion.button>
        </div>
      </section>

      <section className="flex justify-center items-center bg-primary">
        <main className="grid grid-cols-1 md:grid-cols-2 bg-tertiary w-fluid_2xl xl:w-[1400px]">
          <div className="col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-2 row-end-3 bg-primary">
            <article className="lead-content-md bg-primary p-8 pt-0 md:p-8 text-secondary flex flex-col gap-y-4 md:px-12 2xl:px-20 h-full relative -translate-y-12 md:translate-y-0 z-30">
              <h1 className="article-headline">About Me</h1>
              <p className="">
                Hey there! <span className="inline-block">👋</span> I'm{" "}
                <span className="highlighted">Julian</span>, a Web Developer
                based in the Philippines, dedicated to crafting aesthetically
                pleasing, functional, and user-centric digital experiences.
              </p>

              <p>
                My journey in web development began with the foundational trio
                of HTML, CSS, and JavaScript. Subsequently, I further honed my
                skills through an intensive 3-month Full-Stack Development
                program at Zuitt Coding Bootcamp, where I received multiple
                awards.
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
          <section className="bg-primary shadowed md:filter-none">
            <div className="w-full h-full flex justify-center items-center">
              <div className="rounded-full flex justify-center items-center w-fluid_80 aspect-square md:neumorph-outer relative -translate-y-16 md:translate-y-0 bg-primary ">
                <div className="w-[92.5%] aspect-square rounded-full  overflow-hidden md:neumorph-inner bg-tertiary">
                  <StaticImage
                    src="../images/temp_photo.png"
                    alt="Julian Salvador"
                    layout="constrained"
                    formats={["auto", "avif", "webp"]}
                    loading="eager"
                    placeholder="dominantColor"
                    style={{ bottom: "-.325rem", left: ".425rem" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
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
