import React from "react"
import Seo from "#global/Seo"
import { PageHero } from "../components/PageHero/PageHero"
import { Box, boxOptions } from "#components/Box/Box"

import Card from "#components/Card"

import { useHomeImage } from "#lib"

import { useProjects } from "#lib"
import { useCutout } from "#lib/useCutout"
import { OffsetImage } from "../components/OffsetImage/OffsetImage"

const IndexPage = () => {
  const heroImg = useHomeImage()
  const projects = useProjects()
  const projectsList = projects.slice(0, 4)
  const image = useCutout()
  return (
    <>
      <Seo title="Home" />
      <PageHero
        showAvailability={true}
        showButton={true}
        offset={true}
        image={heroImg}
      >
        <div className="gc:1 mx900:display:none" />
        <div className="gc:4 mn900:gc:5 color:white flex fd:column gap:1">
          <h2 className="fs:32 mn900:fs:64">
            <strong className="bold">Oh, hello!</strong>
            <br />
            I'm Frank Luongo
          </h2>
          <p className="fs:14 mn900:fs:24">
            Your friendly internet Web Developer
          </p>
        </div>
      </PageHero>
      <section className="container grid">
        <div className="gc:1 mx900:display:none" />
        <div className="gc:4 mn900:gc:5 pos:rel">
          <section className="flex fd:column gap:0.5 gap:1 color:white pos:rel z2 up:4 ptop:1 mn900:ptop:2.5 mn900:pbottom:0">
            <h2 className="fs:24 bold uppercase">Check the technique</h2>
            <p className="fs:14 pgmw">
              My life is <span className="bold italic">dope</span> and I do{" "}
              <span className="bold italic">dope things</span>. Check out some
              highlights below or head over to my projects page to see it all.
            </p>
          </section>
          <Box
            extraClasses="pos:abs inset:0 pull:0.5 push:1 up:4 down:4 mn900:pull:1 mn900:push:0 color:white rounded:left"
            style={boxOptions.styles.gradientRed}
          ></Box>
        </div>
        <div className="gc:1 mx900:display:none" />
        {projectsList.map(project => (
          <Card
            extraClasses="gc:2 mn900:gc:1 pos:rel z2"
            {...project}
            key={project.id}
          />
        ))}
      </section>
      <section className="container grid margin-top:6 mn1200:margin-top:9">
        <div className="gc:1:1 gr:1 mx900:display:none" />
        <div className="gc:1:2 mn900:gc:2:2 gr:1 color:white padding-block:0.5 flex align:center">
          <h2 className="pos:rel fs:24 mn600:fs:48 mn1200:fs:64 xbold pos:rel z3 uppercase">
            A little bit about me
          </h2>
        </div>
        <div className="pos:rel z2 gc:3:2 mn900:gc:4:2 gr:1 flex align:end">
          <OffsetImage
            image={image}
            alt="A little bit about me"
            id="about-me-cutout"
            style={{ borderRadius: "0 0 0.5rem 0" }}
          />
        </div>
        <Box
          extraClasses="pos:rel gr:1 pull:1 mn900:gc:1:5 gc:1:4 inset:0 color:white rounded:right"
          style={boxOptions.styles.gradientBlue}
        ></Box>
      </section>
      <section className="container grid margin-top:1">
        <div className="gc:1 mx900:display:none" />
        <div className="gc:4 mn900:gc:2 flex fd:column gap:1">
          <p className="fs:14 mn700:fs:16 bold line-height:1.6">
            I started slinging code in 2012, and haven't stopped since.
          </p>
          <p className="fs:14 mn700:fs:16 line-height:1.6">
            Currently, I'm a one-man one-stop-shop for your design, user
            experience, and web development needs located in the always sunny
            Philadelphia. Whether you need a blog, eCommerce store, personal
            website, or something more (or less), chances are I can lend a hand.
          </p>
        </div>
        <div className="gc:4 mn900:gc:2 flex fd:column gap:1">
          <h3 className="fs:16 mn700:fs:24 uppercase bold">
            All of the things
          </h3>
          <ul className="list fs:14 mn700:fs:16">
            <li className="line-height:1.6">
              WordPress Theme & Plugin Development
            </li>
            <li className="line-height:1.6">
              Shopify Theme, App and Store Development
            </li>
            <li className="line-height:1.6">
              Static Site Building via HTML, CSS, and Vanilla JavaScript
            </li>
            <li className="line-height:1.6">
              Web Application creation with React Js and MongoDB
            </li>
            <li className="line-height:1.6">Modern JAMStack Websites</li>
            <li className="line-height:1.6">Electron Desktop Apps</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default IndexPage
