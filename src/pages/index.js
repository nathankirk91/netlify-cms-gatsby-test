import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  let featuredImgFluid =
    data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Img fluid={featuredImgFluid} />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "My Favorite Doggos" } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
