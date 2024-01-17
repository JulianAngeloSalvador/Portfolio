import * as React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../components/Layout"

export default function Index() {
  const email = process.env.GATSBY_CONTACT_EMAIL
  const encodeEmail = email => window.btoa(email)
  return (
    <Layout>
      <section className="bg-primary h-dvh text-secondary flex flex-col items-center justify-center text-center sm_max:text-left gap-y-4">
        <header className="text-balance w-fluid_80 sm:w-fluid 2xl:w-fluid_2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl 2xl:text-7xl font-bold font-revalia py-4">
            Julian Salvador
          </h1>
          <h2 className="text-4xl xs_max:text-2xl md:text-4xl 2xl:text-5xl text-fade font-semibold">
            I bring visionary concepts to life.
          </h2>
        </header>
        <main className="text-base md:text-2xl lg:text-lg 2xl:text-2xl w-fluid sm_max:w-fluid_80 lg:w-fluid_80">
          <p className="text-fade">
            Crafting seamless user experiences with expertise in{" "}
            <span className="highlighted">front-end</span> web development, and
            a versatile skill set spanning{" "}
            <span className="highlighted">full-stack</span> capabilities.
          </p>
        </main>
        <div className="text-xs md:text-xl w-fluid flex xs_max_mid:flex-col flex-row items-center justify-center gap-4 py-4">
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
          <button className="landing-buttons outline outline-secondary outline-2 ">
            Download CV
          </button>
        </div>
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
