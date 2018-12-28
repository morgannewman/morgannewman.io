import './About.scss';

import React from 'react';
import Img from 'gatsby-image';

import Contact from './ContactBar';

export default function About({ data }) {
  return (
    <section className="about">
      <Img fluid={data.me.childImageSharp.fluid} className="about-img" />
      <h2 className="about-title">About Me</h2>
      <div className="about-text">
        <p>
          For as long as I can remember, I’ve always been “the computer guy”. To
          my family, this means free tech support. To my liberal arts friends,
          this means I’m a genius. To me, this realization means I’ve finally
          found my calling. I personally think programming is one of life’s
          greatest joys, with unparalleled opportunities for intellectual growth
          and creativity.
        </p>

        <p>
          When I’m not programming, you’ll likely find me reading, spending time
          with my wonderful family or girlfriend, visiting friends from college
          in SoCal, or cooking some weird Eurasian dish that requires too many
          ingredients. You simply can’t go wrong with these things!
        </p>
      </div>
      <Contact className="about-links" />
    </section>
  );
}
