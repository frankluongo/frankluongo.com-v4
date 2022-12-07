import React from "react"

import { useBlogPosts } from "#lib"
import { useFiltersContext } from "#context/ContextFilters"
import { useFilter } from "#hooks"

import ArticleCard from "#components/ArticleCard"

export default function BlogArticles() {
  const { activeFilters } = useFiltersContext()
  const posts = useBlogPosts()
  const postsList = useFilter({
    activeFilters,
    itemsList: posts,
    value: "tags",
  })

  return (
    <>
      <header>
        <h2>
          <span className="black">Articles & Whatnot</span>&nbsp;
          <span>({posts.length})</span>
        </h2>
      </header>
      <ul>
        {postsList.map(post => (
          <li key={post.id}>
            <ArticleCard post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
