import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function Index() {
  return (
    <Layout>
      <section className="bg-primary h-dvh text-secondary flex flex-col items-center justify-center text-center sm_max:text-left gap-y-4">
        <header className="text-balance w-fluid_80 md:w-fluid 2xl:w-fluid_2xl">
          <h1 className="xs_max_mid:text-xl text-2xl md:text-6xl lg:text-4xl 2xl:text-7xl font-bold font-revalia">
            Julian Salvador
          </h1>
          <h2 className="xs_max_mid:text-lg text-xl md:text-6xl lg:text-4xl 2xl:text-7xl text-fade font-semibold">
            I bring visionary concepts to life.
          </h2>
        </header>
        <main className=" text-base md:text-3xl lg:text-xl w-fluid_80">
          <p className="text-fade">
            Crafting seamless user experiences with expertise in{" "}
            <span className="highlighted">front-end</span> web development, and
            a versatile skill set spanning{" "}
            <span className="highlighted">full-stack</span> capabilities.
          </p>
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
