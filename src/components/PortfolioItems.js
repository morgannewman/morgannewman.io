import './PortfolioItems.scss';
import React from 'react';
import Img from 'gatsby-image';

export default function PortfolioItems({ portfolio }) {
  return portfolio.map(item => {
    const { title, description, screenshot, github, demo, technologies } = item;
    return (
      <section className="portfolio-item" key={title}>
        <h3 className="emphasis portfolio-item-title">{title}</h3>
        <Img fluid={screenshot} className="portfolio-item-image" />
        <p>{description}</p>
        <div className="portfolio-item-information">
          <ul className="portfolio-item-technologies">
            {technologies.length > 0 && <li>{technologies.join(' / ')}</li>}
          </ul>
          <div className="portfolio-item-link-container">
            <a
              href={github}
              target="blank"
              tabIndex="1"
              className="portfolio-item-link portfolio-item-link-secondary"
            >
              GitHub
            </a>
            <a
              href={demo}
              target="blank"
              tabIndex="1"
              className="portfolio-item-link portfolio-item-link-primary"
            >
              Demo
            </a>
          </div>
        </div>
      </section>
    );
  });
}
