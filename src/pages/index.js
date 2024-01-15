import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => <Layout></Layout>

export default IndexPage

// <StaticImage
//   src="../images/example.png"
//   loading="eager"
//   width={64}
//   quality={95}
//   formats={["auto", "webp", "avif"]}
//   alt=""
//   style={{ marginBottom: `var(--space-3)` }}
// />

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
