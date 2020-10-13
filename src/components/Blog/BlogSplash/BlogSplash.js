import React from "react"

import Splash from "@components/Splash"

import { Grid } from "@components/Common"
import BlogArticles from "../BlogArticles"
import BlogFilters from "../BlogFilters"

export default function BlogSplash() {
  return (
    <Splash style={{ backgroundColor: "var(--gray-1)" }}>
      <Grid mdCols="3/1">
        <div>
          <BlogArticles />
        </div>
        <div>
          <BlogFilters />
        </div>
      </Grid>
    </Splash>
  )
}
