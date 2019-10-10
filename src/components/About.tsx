import Img from 'gatsby-image';
import React from 'react';

export default function About({ data }) {
  return (
    <section className="about" id="about">
      <Img fluid={data.me.childImageSharp.fluid} className="about-img" />
      <h2 className="about-title">About Me</h2>
      <div className="about-text">
        <p>
          I am a software developer and recent graduate of UC Santa Barbara. I
          love web development because seeing my code come to life is supremely
          satisfying. I geek out by making my code as simple and elegant as
          possible, and I love working with other programmers who are just as
          passionate about the craft as I am.
        </p>

        <p>
          When I’m not programming, you’ll likely find me reading, spending time
          with my family, visiting friends all over
          California, or cooking some unique dish that requires a mountain of
          ingredients. I’m always up for new experiences and look forward to
          what awaits me in the future.
        </p>
      </div>
    </section>
  );
}
