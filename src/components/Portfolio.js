import './Portfolio.scss'
import React from 'react'
import PortfolioItems from './PortfolioItems'

export default function Portfolio() {
  return (
    <main className="portfolio">
      <h2 className="portfolio-title">Recent Projects</h2>
      <PortfolioItems />
    </main>
  )
}
