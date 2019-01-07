import Img from 'gatsby-image';
import React from 'react';

export default function Portfolio({ data }) {
  const portfolio = [
    {
      accent: '#A5DC87',
      demo: 'https://knowted.netlify.com/',
      description: [
        'For all the nerds out there like us, my team and I made Knowted. The idea is simple: group your learning resources by topic to stay organized, while also keeping notes on each topic.',
        'I was the tech lead on this project with 3 other engineers, and I authored major portions of the frontend code using React. I also contributed to the RESTful backend using Node.',
      ],
      github: 'https://github.com/morgannewman/knowted',
      screenshot: data.knowted.childImageSharp.fluid,
      technologies: [ 'JavaScript', 'React', 'Node', 'PostgreSQL' ],
      title: 'Knowted',
    },
    {
      accent: '#596EE6',
      demo: 'https://womby-staging.firebaseapp.com/',
      description: [
        'I found myself wanting a simple notetaking app that works equally well on desktop and mobile, so I made Womby. Womby automatically saves your notes to the cloud as you type. The interface is so intuitive, your grandma could probably use it.',
        'I built this project from the ground-up using Node and React. I emphasized writing clean code, following accessibility best-practices, and creating a mobile-friendly interface.',
      ],
      github: 'https://github.com/morgannewman/womby',
      screenshot: data.womby.childImageSharp.fluid,
      technologies: [ 'JavaScript', 'React', 'Node', 'MongoDB' ],
      title: 'Womby',
    },
    {
      accent: '#2C99E8',
      demo: 'https://lexii-hack.firebaseapp.com/',
      description: [
        'Finding relevant images to pair with written content is challenging, so my hackathon team and I created Lexii. Lexii helps writers find relevant, royalty-free images to pair with their writing.',
        'Lexii uses natural language processing on the backend to extract keywords from text, and it pulls images with these keywords using the Unsplash API. ',
        'I authored the entire frontend using React and portions of the Python backend.',
      ],
      github: 'https://github.com/morgannewman/lexii-hack',
      screenshot: data.lexii.childImageSharp.fluid,
      technologies: [ 'Python', 'JavaScript', 'React' ],
      title: 'Lexii',
    },
    {
      accent: '#FFC12B',
      demo: 'https://learnery.netlify.com/',
      description: [
        'Learnery is a playful flashcard app for frontend engineers. It uses a spaced-repetition algorithm to maximize your retention of the concepts you study.',
        'I was the tech lead with one other engineer, and we built this to experiment with both spaced-repetition algorithms and playful graphic design.',
        'I authored major portions of both the frontend with React and the backend with Node.',
      ],
      github: 'https://github.com/NikolasMsomething/learnery-frontend',
      screenshot: data.learnery.childImageSharp.fluid,
      technologies: [ 'JavaScript', 'React', 'Node', 'PostgreSQL' ],
      title: 'Learnery',
    },
  ];

  return (
    <div className="portfolio">
      {portfolio.map((item) => {
        const {
          accent,
          title,
          description,
          screenshot,
          github,
          demo,
          technologies,
        } = item;
        return (
          <section className="portfolio-item" key={title}>
            <Img fluid={screenshot} className="portfolio-item-image" />
            <div className="portfolio-info-container">
              <header
                style={{ borderBottomColor: accent }}
                className="portfolio-item-header"
              >
                <h2 className="portfolio-item-header-title">{title}</h2>
                <ul className="portfolio-item-header-technologies">
                  {<li>{technologies.join(' / ')}</li>}
                </ul>
              </header>
              <div className="portfolio-item-info">
                <div className="portfolio-item-info-description">
                  {/* tslint:disable-next-line:jsx-key */}
                  {description.map((paragraph) => <p>{paragraph}</p>)}
                </div>
                <div className="portfolio-item-info-links">
                  <h3 className="portfolio-item-info-links-title">Links</h3>
                  <a href={demo} target="blank" className="portfolio-item-link">
                    {title}
                    <span className="arrow">→</span>
                  </a>
                  <br />
                  <a
                    href={github}
                    target="blank"
                    className="portfolio-item-link"
                  >
                    GitHub<span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
