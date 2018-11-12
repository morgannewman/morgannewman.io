import './index.scss'
import React from 'react'
import { graphql } from 'gatsby'
// Components
import Introduction from '../components/Introduction'
import Portfolio from '../components/Portfolio'
import ContactBar from '../components/ContactBar'

const IndexPage = ({ data }) => {
  return (
    <>
      <ContactBar />
      <Introduction />
      <Portfolio data={data} />
    </>
  )
}
export default IndexPage

export const screenshot = graphql`
  fragment screenshot on File {
    childImageSharp {
      fluid(maxWidth: 2160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const icon = graphql`
  fragment icon on File {
    childImageSharp {
      fluid(maxWidth: 48) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    womby: file(relativePath: { eq: "screenshots/womby.png" }) {
      ...screenshot
    }
    wombybackend: file(relativePath: { eq: "screenshots/womby-backend.png" }) {
      ...screenshot
    }
    lexii: file(relativePath: { eq: "screenshots/lexii.png" }) {
      ...screenshot
    }
    js: file(relativePath: { eq: "technologies/js.svg" }) {
      ...icon
    }
  }
`
