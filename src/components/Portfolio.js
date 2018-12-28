import './Portfolio.scss';
import React from 'react';
import PortfolioItems from './PortfolioItems';

export default function Portfolio({ data }) {
  const portfolio = [
    {
      title: 'Knowted',
      description:
        'Along with 3 other engineers, I helped lead the architecture and execution of a content aggregation platform called Knowted. The idea is simple: group your learning resources by topic to stay organized, and use rich text editing comparable to Evernote to keep notes on them.',
      screenshot: data.knowted.childImageSharp.fluid,
      technologies: ['JavaScript', 'React', 'Node', 'PostgreSQL'],
      github: 'https://knowted.netlify.com/',
      demo: 'https://github.com/morgannewman/knowted'
    },
    {
      title: 'Womby',
      description:
        'A daringly-simple notetaking web app that saves as you type.',
      screenshot: data.womby.childImageSharp.fluid,
      technologies: ['JavaScript', 'React', 'Node', 'MongoDB'],
      github: 'https://github.com/morgannewman/womby',
      demo: 'https://womby-staging.firebaseapp.com/'
    },
    {
      title: 'Lexii',
      description:
        'Collaborative project with budding UX designer Matthew Lim.',
      screenshot: data.lexii.childImageSharp.fluid,
      technologies: ['Python', 'TypeScript', 'React', 'PostgreSQL'],
      github: 'https://github.com/morgannewman/lexii',
      demo: 'https://lexii.netlify.com/'
    },
    {
      title: 'Lexii (Hackathon)',
      description:
        'Built over a weekend with engineers from Facebook and Cloudflare to to help writers find relevant, royalty-free images to pair with their content—like magic.',
      screenshot: data.lexiihack.childImageSharp.fluid,
      technologies: ['Python', 'JavaScript', 'React'],
      github: 'https://github.com/morgannewman/lexii-hack',
      demo: 'https://lexii-hack.firebaseapp.com/'
    },
    {
      title: 'morgannewman.io',
      description:
        'Built using React, and made blazing-fast using Gatsby.js to compile down into a static site.',
      screenshot: data.portfolio.childImageSharp.fluid,
      technologies: ['JavaScript', 'React', 'Gatsby.js', 'GraphQL'],
      github: 'https://github.com/morgannewman/morgannewman.io',
      demo: 'https://morgannewman.io'
    },
    {
      title: 'Learnery',
      description:
        'A fellow engineer and I created a playful MVP of a flashcard application to help engineers study for challenging programming interviews. The motivating factor was our curiosity to apply spaced-repetition to our own learning app.',
      screenshot: data.learnery.childImageSharp.fluid,
      technologies: ['JavaScript', 'React', 'Node', 'PostgreSQL'],
      github: 'https://github.com/NikolasMsomething/learnery-frontend',
      demo: 'https://learnery.netlify.com/'
    }
  ];

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">Recent Projects</h2>
      <PortfolioItems portfolio={portfolio} />
    </div>
  );
}
