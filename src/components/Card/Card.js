import React from "react"

import styles from "./Card.module.css"

import { IconChevronRight } from "@components/Icons"

export default function Card({ url, heading, title, categories }) {
  return (
    <div className={styles.CardWrapper}>
      <a className={styles.Card} href={url}>
        <header className={styles.Header} data-flex>
          <div className={styles.Logo} />
          <span className="h6">{heading}</span>
        </header>
        <figure className={styles.Thumbnail}></figure>
        <section className="h5">{title}</section>
        <section className="small">{categories}</section>
        <IconChevronRight className={styles.Icon} />
      </a>
    </div>
  )
}

Card.defaultProps = {
  url: "/",
  heading: "this is the heading",
  title: "this is the card title",
  categories: "Thing 1 | Thing 2",
}
