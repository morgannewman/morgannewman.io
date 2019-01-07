import './Portfolio.scss';

import React from 'react';

import PortfolioItems from './PortfolioItems';

export default function Portfolio({ data }) {
  const portfolio = [
    {
      demo: 'https://knowted.netlify.com/',
      description: [
        'For those with deep curiosity, my team and I made Knowted. The idea is simple: group your learning resources by topic to stay organized, while also keeping notes on each topic.',
        'I was the tech lead on this project with 3 other engineers, and I authored major portions of the frontend code using React, while contributing to the RESTful backend using Node.',
      ],
      github: 'https://github.com/morgannewman/knowted',
      screenshot: data.knowted.childImageSharp.fluid,
      technologies: ['JavaScript', 'React', 'Node', 'PostgreSQL'],
      title: 'Knowted',
    },
    {
      demo: 'https://womby-staging.firebaseapp.com/',
      description: [
        'I found myself wanting a simple notetaking app that works equally well on desktop and mobile, so I made Womby. Womby is a delightful notetaking web app that automatically saves to the cloud as you type. The interface is so intuitive, your grandma could probably use it.',
        'I built this project from the ground-up using Node and React. I emphasized writing clean, S.O.L.I.D. code, accessibility (a11y), and mobile-responsiveness.',
      ],
      github: 'https://github.com/morgannewman/womby',
      screenshot: data.womby.childImageSharp.fluid,
      technologies: ['JavaScript', 'React', 'Node', 'MongoDB'],
      title: 'Womby',
    },
    {
      demo: 'https://lexii-hack.firebaseapp.com/',
      description: [
        'It can be challenging to find relevant images to pair with written content, so my hackathon team created Lexii. Lexii helps writers find relevant, royalty-free images to pair with their writing.',
        'Lexii uses natural language processing on the backend to extract keywords from text, and it pulls images with these keywords using the Unsplash API. I authored the entire frontend using React and portions of the Python backend.',
      ],
      github: 'https://github.com/morgannewman/lexii-hack',
      screenshot: data.lexiihack.childImageSharp.fluid,
      technologies: ['Python', 'JavaScript', 'React'],
      title: 'Lexii',
    },
    {
      demo: 'https://learnery.netlify.com/',
      description: [
        'Learnery is a playful flashcard app for frontend engineers that uses a spaced-repetition algorithm to maximize your retention of engineering concepts.',
        'I was the tech lead with one other engineer, and we built this to experiment with spaced-repetition algorithms and a playful graphic design. I authored major portions of both the frontend with React and the backend with Node.',
      ],
      github: 'https://github.com/NikolasMsomething/learnery-frontend',
      screenshot: data.learnery.childImageSharp.fluid,
      technologies: ['JavaScript', 'React', 'Node', 'PostgreSQL'],
      title: 'Learnery',
    },
  ];

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">Recent Projects</h2>
      <PortfolioItems portfolio={portfolio} />
    </div>
  );
}
