import '../styles/main.scss';

import React from 'react';

// Gatsby
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// Components
import About from '../components/About';
import Introduction from '../components/Introduction';
import Portfolio from '../components/Portfolio';
import Social from '../components/Social';

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Morgan Newman</title>
        <link rel="canonical" href="https://morgannewman.io" />
        <meta property="og:title" content="Portfolio | Morgan Newman"/>
        <meta property="og:image" content={require('../assets/preview-img.png')}/>
        <meta property="og:description" content="Morgan is a software engineer based in California"/>
        <meta property="og:url" content="https://morgannewman.io/" />
      </Helmet>
      <main className="main">
        <Introduction />
        <Portfolio data={data} />
        <About data={data} />
        <Social />
      </main>
    </>
  );
};
export default IndexPage;

export const screenshot = graphql`
  fragment screenshot on File {
    childImageSharp {
      fluid(maxWidth: 2800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const portrait = graphql`
  fragment portrait on File {
    childImageSharp {
      fluid(maxWidth: 124) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    womby: file(relativePath: { eq: "screenshots/womby.png" }) {
      ...screenshot
    }
    lexii: file(relativePath: { eq: "screenshots/lexii.png" }) {
      ...screenshot
    }
    learnery: file(relativePath: { eq: "screenshots/learnery.png" }) {
      ...screenshot
    }
    knowted: file(relativePath: { eq: "screenshots/knowted.png" }) {
      ...screenshot
    }
    me: file(relativePath: { eq: "me.png" }) {
      ...portrait
    }
  }
`;
