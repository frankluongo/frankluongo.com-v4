import React from "react"

import Seo from "@global/Seo"
import { FiltersProvider } from "@context"
import Layout from "@global/Layout"
import BlogHero from "@blog/BlogHero"
import BlogSplash from "@blog/BlogSplash"

const BlogIndex = () => {
  return (
    <>
      <Seo title="Blog" />
      <FiltersProvider>
        <Layout>
          <BlogHero />
          <BlogSplash />
        </Layout>
      </FiltersProvider>
    </>
  )
}

export default BlogIndex
