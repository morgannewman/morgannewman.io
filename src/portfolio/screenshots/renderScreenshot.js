import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const screenshots = {
  womby: (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(
            relativePath: { eq: "screenshots/womby.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 2160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          className="portfolio-item-image"
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt={'Screenshot of Womby'}
        />
      )}
    />
  ),
}

export default function renderScreenshot(title) {
  if (screenshots[title]) return screenshots[title]
  throw new Error(`Cannot find screenshot for ${title}`)
}
