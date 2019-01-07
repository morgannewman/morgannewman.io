import React from 'react';

export default class Introduction extends React.Component {
  public handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .querySelector('.about')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  public render() {
    return (
      <header className="introduction">
        <p>Hello, world!</p>
        <p>
          <span className="introduction-title">I'm Morgan,</span>
          a full-stack{' '}
          <span className="introduction-emphasis">software engineer</span> based
          in the SF Bay Area. Below is a small selection of my past work.
        </p>
        <a
          className="introduction-link"
          href="#about"
          onClick={this.handleLinkClick}
        >
          About Me <span className="arrow-down">↓</span>
        </a>
      </header>
    );
  }
}
