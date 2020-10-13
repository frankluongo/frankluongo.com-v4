import React from "react"
import { Link } from "gatsby"

import Card from "@components/Card"
import Splash from "@components/Splash"
import { useProjects } from "@lib"

import { Button, Grid } from "@components/Common"

import styles from "./ProjectsPreview.module.css"

export default function ProjectsPreview() {
  const projects = useProjects();
  const projectsList = projects.slice(0, 4);
  return (
    <Splash
      style={{ backgroundColor: "var(--yellow)" }}
      header="Check The Technique"
    >
      <div className={styles.ProjectsPreview}>
        <p className={styles.PreviewIntro}>
          My life is <span className="bold italic">dope</span> and I do{" "}
          <span className="bold italic">dope things</span>. Check out some
          highlights
          <br className={styles.TextBreak} /> below or head over to my{" "}
          <Link to="/projects">Projects Page</Link> to see it all.
        </p>
        <Grid smCols="2" mdCols="3" lgCols="4">
        {projectsList.map(project => <Card {...project} key={project.id} />)}
        </Grid>
        <div className={styles.CallToAction}>
          <Button Tag={Link} data-theme="dark" to="/projects">
            See 'Em All
          </Button>
        </div>
      </div>
    </Splash>
  )
}
