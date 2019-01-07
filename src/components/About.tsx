import Img from 'gatsby-image';
import React from 'react';

export default function About({ data }) {
  return (
    <section className="about">
      <Img fluid={data.me.childImageSharp.fluid} className="about-img" />
      <h2 className="about-title">About Me</h2>
      <div className="about-text">
        <p>[ PROFESSIONAL PARAGRAPH ]</p>

        <p>
          When I’m not programming, you’ll likely find me reading, spending time
          with my wonderful family or girlfriend, visiting friends from college
          in SoCal, or cooking some weird Eurasian dish that requires too many
          ingredients. You simply can’t go wrong with these things!
        </p>
      </div>
    </section>
  );
}
