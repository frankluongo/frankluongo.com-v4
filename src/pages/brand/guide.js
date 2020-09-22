import React from "react"

import { Heading, ColorSwatch, Section, Tray } from "@components/BrandGuide"

export default function Guide() {
  return (
    <div>
      <Section>
        <Heading>Brand</Heading>
        <Tray>
          <ColorSwatch backgroundColor="var(--yellow)" title="Yellow" />
          <ColorSwatch backgroundColor="var(--red)" title="Red" />
          <ColorSwatch backgroundColor="var(--blue)" title="Blue" />
          <ColorSwatch backgroundColor="var(--teal)" title="teal" />
          <ColorSwatch backgroundColor="var(--green)" title="Green" />
        </Tray>
      </Section>
      <Section>
        <Heading>Typography</Heading>
        <Tray>
          <ColorSwatch backgroundColor="var(--text-black)" title="Black" />
          <ColorSwatch backgroundColor="var(--link-dark)" title="Dark Link" />
          <ColorSwatch backgroundColor="var(--link-light)" title="Light Link" />
          <ColorSwatch backgroundColor="var(--subtext-dark)" title="Dark Sub" />
          <ColorSwatch
            backgroundColor="var(--subtext-light)"
            title="Light Sub"
          />
          <ColorSwatch backgroundColor="var(--text-white)" title="White" />
        </Tray>
      </Section>
      <Section>
        <Heading>Surfaces</Heading>
        <Tray>
          <ColorSwatch backgroundColor="var(--black)" title="Black" />
          <ColorSwatch backgroundColor="var(--gray-5)" title="Gray 5" />
          <ColorSwatch backgroundColor="var(--gray-4)" title="Gray 4" />
          <ColorSwatch backgroundColor="var(--gray-3)" title="Gray 3" />
          <ColorSwatch backgroundColor="var(--gray-2)" title="Gray 2" />
          <ColorSwatch backgroundColor="var(--gray-1)" title="Gray 1" />
          <ColorSwatch backgroundColor="var(--white)" title="White" />
        </Tray>
      </Section>
      <Section>
        <Heading>Gradients</Heading>
        <Tray>
          <ColorSwatch background="var(--gradient-cool)" title="Cool" />
          <ColorSwatch background="var(--gradient-warm)" title="Warm" />
          <ColorSwatch background="var(--gradient-alt)" title="Alt" />
          <ColorSwatch
            background="var(--gradient-grayscale)"
            title="Grayscale"
          />
        </Tray>
      </Section>
      <hr />
      <Section>
        <Heading>Heading Font Sizes</Heading>
        <h1>This is an H1</h1>
        <h2>This is an H2</h2>
        <h3>This is an H3</h3>
        <h4>This is an H4</h4>
        <h5>This is an H5</h5>
        <h6>This is an H6</h6>
      </Section>
      <Section>
        <Heading>Text Font Sizes</Heading>
        <p>This is a paragraph</p>
        <small>This is a smol</small>
      </Section>
      <Section>
        <Heading>Font Styles and Weights</Heading>
        <p>This is silka regular</p>
        <p className="bold">This is silka bold</p>
        <p className="black">This is silka black</p>
        <p className="black secondary-font">This is knile black</p>
        <p className="secondary-font">This is knile regular</p>
        <p className="black uppercase">This is silka black all caps</p>
        <p className="black uppercase secondary-font">
          This is knile black all caps
        </p>
      </Section>
    </div>
  )
}
