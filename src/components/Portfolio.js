import './Portfolio.scss'
import React from 'react'
import PortfolioItems from './PortfolioItems'

export default function Portfolio({ data }) {
  const portfolio = [
    {
      title: 'Lexii',
      description:
        'Input some text and get relevant, royalty-free images back — like magic.',
      screenshot: data.lexii.childImageSharp.fluid,
      // technologies: [],
      github: 'https://github.com/morgannewman/lexii',
      demo: 'https://lexii-hack.firebaseapp.com/',
    },
    {
      title: 'Womby',
      description:
        'A daringly-simple notetaking web app that saves as you type.',
      screenshot: data.womby.childImageSharp.fluid,
      // technologies: [],
      github: 'https://github.com/morgannewman/womby',
      demo: 'https://womby-staging.firebaseapp.com/',
    },
    {
      title: 'Womby Backend',
      description: 'Secure data storage and user authentication for Womby.',
      screenshot: data.wombybackend.childImageSharp.fluid,
      // technologies: [],
      github: 'https://github.com/morgannewman/womby-backend',
      demo: 'https://womby-staging.firebaseapp.com/',
    },
  ]

  return (
    <main className="portfolio">
      <h2 className="portfolio-title">Recent Projects</h2>
      <PortfolioItems portfolio={portfolio} />
    </main>
  )
}
