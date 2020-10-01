import React from "react"

import Splash from "@components/Splash"
import Tile from "@components/Tile"

import { Grid } from "@components/Common"
import { dislikes, likes, socialLinks } from "@constants"

import styles from "./ContactSplash.module.css"

export default function ContactSplash() {
  return (
    <Splash style={{ backgroundColor: "var(--gray-1)" }}>
      <div className={styles.ContactSplash}>
        <Grid mdCols="2">
          <div>
            <h2 className="h2 secondary-font bold uppercase">Get To Know Me</h2>
            <p>
              I started my career as a visual designer for RevZilla.com in 2013.
              I worked there until June of 2019, moving from design to user
              experience to development. As a visual designer, I created
              promotional graphics and new site features. On the UX team, I
              conducted site audits and built prototypes for user testing.
              Lastly, as a member of the tech team, I helped maintain a Ruby on
              Rails admin and an Elixir/Phoenix eCommerce Application that used
              ES6 JavaScript and SCSS.
            </p>
            <p>
              In June of 2019, I decided to “shake things up” in my life and
              moved to Denver, Colorado to work for the state’s Legislative
              Council Services. While there, I worked as a UI Developer
              designing and building web apps with React and Rails.
            </p>
            <p>
              In March of 2020, I left the Legislative Council (and Denver, due
              to COVID), and began working remotely for O’Reilly Media.
              Currently, I help to maintain and improve the Search experience
              for the O’Reilly Learning Platform in a React/Redux Web
              Application.
            </p>
          </div>
          <div>
            <h2 className="h2 secondary-font bold uppercase">TL;DR Version</h2>
            <p>I can do a really good John Mulaney impression.</p>
            <br />
            <Grid smCols="2">
              <ul>
                <h3 className="h5 uppercase black">Likes</h3>
                {likes.map((like, i) => (
                  <li key={i} className="h5">
                    {like}
                  </li>
                ))}
              </ul>
              <ul>
                <h3 className="h5 uppercase black">Dislikes</h3>
                {dislikes.map((dislike, i) => (
                  <li key={i} className="h5">
                    {dislike}
                  </li>
                ))}
              </ul>
            </Grid>
            <br />
            <h3 className="h5 black uppercase">Where to Find Me</h3>
            <Grid xsCols="2" smCols="3" mdCols="4">
              {socialLinks.map((socialLink, i) => (
                <div key={i}>
                  <Tile content={socialLink} />
                </div>
              ))}
            </Grid>
          </div>
        </Grid>
      </div>
    </Splash>
  )
}
