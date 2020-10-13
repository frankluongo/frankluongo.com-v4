import React from "react"

import Layout from "@global/Layout"
import BlogHero from "@blog/BlogHero"
import BlogSplash from "@blog/BlogSplash"

const BlogIndex = () => {
  return (
    <Layout>
      <BlogHero />
      <BlogSplash />
    </Layout>
  )
}

export default BlogIndex
