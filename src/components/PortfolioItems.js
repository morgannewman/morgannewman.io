import './PortfolioItems.scss'
import React from 'react'
import portfolio from '../portfolio'

export default function PortfolioItems() {
  return portfolio.map((item, index) => {
    const { title, description, screenshot, technologies, github, demo } = item
    return (
      <section className="portfolio-item">
        <h3 className="emphasis portfolio-item-title">{title}</h3>
        {screenshot}
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
