import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Layout from "@global/Layout"
import Hero from "@components/Hero"
import Splash from "@components/Splash"

import Post from "@post"

export default function SinglePost({ data }) {
  const image = data.file.childImageSharp.fluid
  const { body, frontmatter } = data.mdx
  return (
    <Layout>
      <Hero
        image={image}
        headline={<span className="bold">{frontmatter.title}</span>}
        showAvailability={false}
      />
      <Splash style={{ backgroundColor: "var(--gray-1)" }}>
        <Post>
          <MDXRenderer>{body}</MDXRenderer>
        </Post>
      </Splash>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $image: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
