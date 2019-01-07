import './index.scss';

import React from 'react';

// Gatsby
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// Components
import About from '../components/About';
import ContactBar from '../components/ContactBar';
import Introduction from '../components/Introduction';
import Portfolio from '../components/Portfolio';

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Morgan Newman</title>
        <link rel="canonical" href="https://morgannewman.io" />
      </Helmet>
      <main className="main">
        <ContactBar />
        <Introduction />
        <Portfolio data={data} />
        <About data={data} />
      </main>
    </>
  );
};
export default IndexPage;

export const screenshot = graphql`
  fragment screenshot on File {
    childImageSharp {
      fluid(maxWidth: 2160) {
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
    lexiihack: file(relativePath: { eq: "screenshots/lexii-hack.png" }) {
      ...screenshot
    }
    learnery: file(relativePath: { eq: "screenshots/learnery.png" }) {
      ...screenshot
    }
    portfolio: file(relativePath: { eq: "screenshots/portfolio.png" }) {
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
