import React from 'react';

export default function Introduction() {
  return (
    <div className="introduction-container">
      <p>Hello, world!</p>
      <h1 className="introduction-title">I'm Morgan,</h1>
      <p>
        a full-stack <span className="emphasis">software engineer</span>.
      </p>
      {/* <br /> */}
      <p>
        I’m good with web technologies like
        <br />
        <span className="emphasis">JavaScript</span>,{' '}
        <span className="emphasis">Node</span>, and{' '}
        <span className="emphasis">React</span>, but I<br />
        love all things software.
      </p>
    </div>
  );
}
