import * as i from "@components/Icons"

export const businessName = "Frank Luongo Design Co."
export const emailAddress = "frank@frankluongo.com"
export const phoneNumber = "570-972-6641"
export const location = "Philadelphia, PA"
export const status = {
  Icon: i.IconCheck,
  color: "var(--green)",
  text: "Available for freelance",
}

export const navLinks = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Contact", url: "/contact" },
  { title: "Blog", url: "/blog" },
]

export const socialLinks = [
  { title: "Email", Icon: i.IconEnvelope, url: `mailto:${emailAddress}` },
  {
    title: "GitHub",
    Icon: i.IconGitHub,
    url: `https://github.com/frankluongo`,
  },
  {
    title: "Instagram",
    Icon: i.IconInstagram,
    url: `https://www.instagram.com/frankluongo92/`,
  },
  {
    title: "Twitter",
    Icon: i.IconTwitter,
    url: `https://twitter.com/frankluongo92`,
  },
  {
    title: "LinkedIn",
    Icon: i.IconLinkedIn,
    url: `https://www.linkedin.com/in/frankluongo92/`,
  },
  {
    title: "Spotify",
    Icon: i.IconSpotify,
    url: `https://open.spotify.com/user/frankluongo92?si=iT8oYekuRHyxyaVlmtSMMg`,
  },
]
