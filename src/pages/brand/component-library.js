import React from "react"

import Layout from "@global/Layout"
import Hero from "@components/Hero"
import Card from "@components/Card"
import Instagram from "@components/Instagram"

import { useHomeImage } from "@lib"

import { Wrapper, Container } from "@components/Common"

import { emailAddress } from "@constants"

export default function ComponentLibrary() {
  const image = useHomeImage()
  return (
    <Layout>
      <Hero
        image={image}
        button={{
          text: emailAddress,
          props: {
            href: `mailto:${emailAddress}`,
          },
        }}
      />
      <Wrapper>
        <Container>
          <div style={{ display: "flex" }} data-flex>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Instagram />
        </Container>
      </Wrapper>
    </Layout>
  )
}
