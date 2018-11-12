import './index.scss'
import React from 'react'
import { graphql } from 'gatsby'
// Components
import Introduction from '../components/Introduction'
import Portfolio from '../components/Portfolio'

const IndexPage = ({ data }) => {
  return (
    <>
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
    js: file(relativePath: { eq: "technologies/js.svg" }) {
      ...icon
    }
  }
`
