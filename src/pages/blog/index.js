import React from "react"

import Seo from "#global/Seo"
import { FiltersProvider } from "#context/ContextFilters"
import BlogHero from "#blog/BlogHero"
import BlogSplash from "#blog/BlogSplash"

const BlogIndex = () => {
  return (
    <FiltersProvider>
      <Seo title="Blog" />
      <BlogHero />
      <BlogSplash />
    </FiltersProvider>
  )
}

export default BlogIndex
