import React from "react"
import { Link } from "gatsby"

import { Button } from "#components/Common"

// import "./GitHubMarkdown.css"
import * as styles from "./Post.module.css"

export default function Post({ children }) {
  return (
    <>
      <section className={`${styles.Post} markdown-body`}>{children}</section>
      <div className={styles.CallToAction}>
        <Button Tag={Link} to="/blog" data-theme="dark">
          Back to Blog
        </Button>
      </div>
    </>
  )
}
