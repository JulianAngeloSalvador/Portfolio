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
      <section className="bg-primary h-dvh text-secondary flex flex-col items-center justify-center md:text-center text-left gap-y-4">
        <header className="w-fluid_80 sm:w-fluid 2xl:w-fluid_2xl">
          <h1 className="text-4xl 2xl:text-7xl font-bold font-revalia py-4">
            Julian Salvador
          </h1>
          <h2 className="xs_max:text-2xl text-4xl 2xl:text-6xl text-fade font-semibold">
            I bring visionary concepts to life.
          </h2>
        </header>
        <main className="lead-content sm:w-fluid w-fluid_80 md:w-fluid_80 2xl:w-fluid_2xl">
          <p className="text-fade">
            Crafting seamless user experiences with expertise in{" "}
            <span className="highlighted">front-end</span> web development, and
            a versatile skill set spanning{" "}
            <span className="highlighted">full-stack</span> capabilities.
          </p>
        </main>
        <div className="text-xs md:text-xl w-fluid md:w-fluid_80 flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
          <motion.button
            // whileHover={{ scale: 1.1 }}
            // initial={{ scale: 1 }}
            // transition={{ duration: 0.3, type: "tween" }}
            className="landing-buttons bg-secondary text-primary"
            onClick={() => {
              window.location.href = `mailto:${decodeURIComponent(
                window.atob(encodeEmail(email))
              )}`
            }}
          >
            Let's Connect
          </motion.button>
          <button className="landing-buttons outline outline-secondary outline-2">
            Download CV
          </button>
        </div>
      </section>

      <section className="">
        <div className="">
          <article className="">
            <p className="">
              Hey there! <span className="inline-block">👋</span> My name is{" "}
              <span className="highlighted">Julian</span>, a Web Developer
              deeply devoted to crafting aesthetically pleasing, functional and
              digital experiences that prioritize users.
            </p>
            <p className="">
              In every project I take on, I'm all about achieving design
              excellence. As a Web Developer, my journey is fueled by my passion
              for constant learning and keeping up with the latest trends and
              tech. This way, I can create visually captivating, user-friendly
              solutions that adapt to ever-changing user demands.
            </p>
          </article>
        </div>
        <section className="">
          <div className="">
            <div className="">
              <div className=""></div>
              <div className="">
                <StaticImage
                  src="../images/temp_photo.png"
                  alt="Julian Salvador"
                  layout="constrained"
                  formats={["auto", "avif", "webp"]}
                  loading="eager"
                  placeholder="dominantColor"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <section className="guide1 p-8 grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div className="flex lg:justify-center">
          <article className="lead-content-md about-content text-secondary p-8 rounded-md shadow-md shadow-tertiary bg-primary w-full md:w-fluid">
            <p className="">
              Hey there! <span className="inline-block">👋</span> My name is{" "}
              <span className="highlighted">Julian</span>, a Web Developer
              deeply devoted to crafting aesthetically pleasing, functional and
              digital experiences that prioritize users.
            </p>
            <p className="">
              In every project I take on, I'm all about achieving design
              excellence. As a Web Developer, my journey is fueled by my passion
              for constant learning and keeping up with the latest trends and
              tech. This way, I can create visually captivating, user-friendly
              solutions that adapt to ever-changing user demands.
            </p>
          </article>
        </div>
        <section className="guide2 row-start-1 row-end-2">
          <div className="display w-fluid_40 md_max:w-56 md:w-80">
            <div className="image-display-container">
              <div className="clip">
                <div className="rounded-full w-full h-full"></div>
              </div>
              <div className="image-display">
                <StaticImage
                  src="../images/temp_photo.png"
                  alt="Julian Salvador"
                  layout="constrained"
                  formats={["auto", "avif", "webp"]}
                  loading="eager"
                  placeholder="dominantColor"
                  blurredOptions={5}
                />
              </div>
            </div>
          </div>
        </section>
      </section> */}
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
