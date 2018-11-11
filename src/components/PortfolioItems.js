import './PortfolioItems.scss'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const portfolio = [
  {
    title: 'Womby',
    description: 'A daringly-simple notetaking web app that saves as you type.',
    technologies: [],
    github: 'https://google.com',
    demo: 'https://google.com',
  },
]

function renderImage(index) {
  const images = [
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "portfolio/womby.png" }) {
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
        />
      )}
    />,
  ]
  return images[index]
}

export default function PortfolioItems() {
  return portfolio.map((item, index) => {
    const { title, description, technologies, github, demo } = item
    return (
      <section className="portfolio-item">
        <h3 className="emphasis portfolio-item-title">{title}</h3>
        {renderImage(index)}
        <p>{description}</p>
        <div className="portfolio-item-information">
          <ul className="portfolio-item-technologies">
            <li className="portfolio-item-technologies-image" />
            <li className="portfolio-item-technologies-image" />
            <li className="portfolio-item-technologies-image" />
            <li className="portfolio-item-technologies-image" />
            <li className="portfolio-item-technologies-image" />
            <li className="portfolio-item-technologies-image" />
          </ul>
          <div className="portfolio-item-link-container">
            <a
              href={github}
              target="blank"
              tabindex="1"
              className="portfolio-item-link portfolio-item-link-secondary"
            >
              GitHub
            </a>
            <a
              href={demo}
              target="blank"
              tabindex="1"
              className="portfolio-item-link portfolio-item-link-primary"
            >
              Demo
            </a>
          </div>
        </div>
      </section>
    )
  })
}
