import renderScreenshot from './screenshots/renderScreenshot'
import renderTechnologies from './technologies/renderTechnologies'

const portfolio = [
  {
    title: 'Womby',
    description: 'A daringly-simple notetaking web app that saves as you type.',
    screenshot: renderScreenshot('womby'),
    technologies: renderTechnologies([
      'JavaScript',
      'React',
      'Sass',
      'Git',
      'Firebase',
    ]),
    github: 'https://google.com',
    demo: 'https://google.com',
  },
]

export default portfolio
