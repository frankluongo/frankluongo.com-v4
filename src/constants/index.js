import * as i from "@components/Icons"

// BUSINESS
export const businessName = "Frank Luongo Design Co."
export const emailAddress = "frank@frankluongo.com"
export const phoneNumber = "570-972-6641"
export const location = "Philadelphia, PA"
export const status = {
  Icon: i.IconCheck,
  color: "var(--green)",
  fill: "var(--white)",
  text: "Available for freelance",
}
// FILTERS
export const types = [
  { id: "client-work", name: "client-work", title: "Client Work" },
  { id: "for-fun", name: "for-fun", title: "Just For Fun" },
]
export const tech = [
  { id: "gatsby", name: "gatsby", title: "Gatsby" },
  { id: "graphql", name: "graphql", title: "GraphQL" },
  { id: "react", name: "react", title: "React" },
  { id: "sass", name: "sass", title: "Sass" },
  { id: "shopify", name: "shopify", title: "Shopify" },
  { id: "squarespace", name: "squarespace", title: "Squarespace" },
  { id: "webpack", name: "webpack", title: "Webpack" },
  { id: "wordpress", name: "wordpress", title: "WordPress" },
]
export const work = [
  { id: "design", name: "design", title: "Design" },
  { id: "development", name: "development", title: "Development" },
]
export const tags = [
  { id: "personal", name: "personal", title: "Personal" },
  { id: "productivity", name: "productivity", title: "Productivity" },
  { id: "weekly-notes", name: "weekly-notes", title: "Weekly Notes" },
  { id: "work", name: "work", title: "Work" },
]
// INSTAGRAM
export const PHOTOS = "photos"
export const TIME = "currentTime"
export const HOUR = 3600000
export const FEED =
  'https://www.instagram.com/graphql/query/?query_hash=18a7b935ab438c4514b1f742d8fa07a7&variables={"id":"306341923","first":6}'
// NAVIGATION
export const navLinks = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Contact", url: "/contact" },
  { title: "Blog", url: "/blog" },
]
// PERSONAL DETAILS
export const dislikes = ["Cherries", "Hermit Crabs", "IE11", "Carrot Cake"]
export const likes = [
  "Rap Music",
  "Godzilla",
  "Dragon Ball Z",
  "Marvel Movies",
  "Classic Cars",
  "Running",
  "The musical Hamilton",
]
// SOCIAL
export const instagramUrl = `https://www.instagram.com/frankluongo92/`
export const socialLinks = [
  {
    title: "Email",
    tileTitle: "My Email",
    Icon: i.IconEnvelope,
    url: `mailto:${emailAddress}`,
  },
  {
    title: "GitHub",
    tileTitle: "GitHub",
    Icon: i.IconGitHub,
    url: `https://github.com/frankluongo`,
  },
  {
    title: "Instagram",
    tileTitle: "Insta",
    Icon: i.IconInstagram,
    url: instagramUrl,
  },
  {
    title: "Twitter",
    tileTitle: "Twitter",
    Icon: i.IconTwitter,
    url: `https://twitter.com/frankluongo92`,
  },
  {
    title: "LinkedIn",
    tileTitle: "LinkedIn",
    Icon: i.IconLinkedIn,
    url: `https://www.linkedin.com/in/frankluongo92/`,
  },
  {
    title: "Spotify",
    tileTitle: "Spotify",
    Icon: i.IconSpotify,
    url: `https://open.spotify.com/user/frankluongo92?si=iT8oYekuRHyxyaVlmtSMMg`,
  },
]
