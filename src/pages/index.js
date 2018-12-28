import './index.scss';
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
// Components
import Introduction from '../components/Introduction';
import Portfolio from '../components/Portfolio';
import ContactBar from '../components/ContactBar';
import About from '../components/About';

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Morgan Newman</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main className="main">
        <ContactBar />
        <Introduction />
        <Portfolio data={data} />
        <About />
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

export const icon = graphql`
  fragment icon on File {
    childImageSharp {
      fluid(maxWidth: 48) {
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
    wombybackend: file(relativePath: { eq: "screenshots/womby-backend.png" }) {
      ...screenshot
    }
    lexii: file(relativePath: { eq: "screenshots/lexii.png" }) {
      ...screenshot
    }
    js: file(relativePath: { eq: "technologies/js.svg" }) {
      ...icon
    }
  }
`;
