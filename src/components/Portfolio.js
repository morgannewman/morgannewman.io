import './Portfolio.scss'
import React from 'react'
import PortfolioItems from './PortfolioItems'

export default function Portfolio({ data }) {
  const portfolio = [
    {
      title: 'Womby',
      description:
        'A daringly-simple notetaking web app that saves as you type.',
      screenshot: data.womby.childImageSharp.fluid,
      // technologies: renderTechnologies([
      //   'JavaScript',
      //   // 'React',
      //   // 'Sass',
      //   // 'Git',
      //   // 'Firebase',
      // ]),
      github: 'https://google.com',
      demo: 'https://google.com',
    },
    {
      title: 'Womby Backend',
      description: 'Secure data storage and user authentication for Womby.',
      screenshot: data.wombybackend.childImageSharp.fluid,
      // technologies: renderTechnologies([
      //   'JavaScript',
      //   // 'React',
      //   // 'Sass',
      //   // 'Git',
      //   // 'Firebase',
      // ]),
      github: 'https://google.com',
      demo: 'https://google.com',
    },
  ]

  console.log(data)
  return (
    <main className="portfolio">
      <h2 className="portfolio-title">Recent Projects</h2>
      <PortfolioItems portfolio={portfolio} />
    </main>
  )
}
