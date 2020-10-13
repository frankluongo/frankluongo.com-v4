import React from "react"

import { useBlogPosts } from "@lib"

import ArticleCard from "@components/ArticleCard"

export default function BlogArticles() {
  const posts = useBlogPosts()
  return (
    <>
      <header>
        <h2>
          <span className="black">Articles & Whatnot</span>&nbsp;
          <span>(43)</span>
        </h2>
      </header>
      <ul>
        {posts.map(post => (
          <li key={post.node.id}>
            <ArticleCard post={post.node} />
          </li>
        ))}
      </ul>
    </>
  )
}
