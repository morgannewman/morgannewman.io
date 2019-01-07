import React from 'react';

export default function Introduction() {
  return (
    <header className="introduction">
      <p>Hello, world!</p>
      <p>
        <span className="introduction-title">I'm Morgan,</span>
        a full-stack <span className="emphasis">software engineer</span> based
        in the SF Bay Area. Below is a small selection of my past work.
      </p>
      <a className="introduction-link" href="#about">
        About
      </a>
      <a className="introduction-link" href="#social">
        Social
      </a>
    </header>
  );
}
