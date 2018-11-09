import './Portfolio.scss'
import React from 'react'

export default function Portfolio() {
  return (
    <main className="portfolio">
      <h2 className="portfolio-title">Recent Projects</h2>
      <div className="portfolio-items">
        <section className="portfolio-item">
          <h3 className="emphasis portfolio-item-title">Womby</h3>
          <img src={require('./Test.png')} className="portfolio-item-image" />
        </section>
      </div>
    </main>
  )
}
