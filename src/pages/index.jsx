import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Landing from "../sections/Landing"
import About from "../sections/About"

export default function Index() {
  return (
    <Layout>
      <Landing />
      <About />
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
