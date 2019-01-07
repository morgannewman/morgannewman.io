import React from 'react';
import {
  FaGithub as Github,
  FaLinkedin as LinkedIn,
  FaMedium as Medium,
  FaStackOverflow as StackOverflow,
} from 'react-icons/fa';
import { MdMailOutline as Email } from 'react-icons/md';

export default function Social() {
  return (
    <section className="social">
      <h2 className="social-title">Social</h2>
      <div className="social-links">
        <div className="social-links-block">
          <a
            className="social-link"
            href="https://github.com/morgannewman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="social-link-icon" />{' '}
            <span className="social-link-text">
              GitHub<span className="arrow">→</span>
            </span>
          </a>
          <br />
          <a
            className="social-link"
            href="https://stackoverflow.com/users/9045128/morgan?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StackOverflow className="social-link-icon" />{' '}
            <span className="social-link-text">
              StackOverflow<span className="arrow">→</span>
            </span>
          </a>
        </div>
        <div className="social-links-block">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/morgannewman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="social-link-icon" />{' '}
            <span className="social-link-text">
              LinkedIn<span className="arrow">→</span>
            </span>
          </a>
          <br />
          <a
            className="social-link"
            href="https://medium.com/@morgannewman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium className="social-link-icon" />{' '}
            <span className="social-link-text">
              Medium<span className="arrow">→</span>
            </span>
          </a>
        </div>
      </div>
      <a className="social-link" href="mailto:mpnewman95@gmail.com">
        <Email className="social-link-icon" />{' '}
        <span className="social-link-text">
          mpnewman95@gmail.com<span className="arrow">→</span>
        </span>
      </a>
    </section>
  );
}
