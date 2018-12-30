import './ContactBar.scss';
import React from 'react';
import {
  FaLinkedin as LinkedIn,
  FaMedium as Medium,
  FaGithub as Github,
  FaFileAlt as ResumeIcon,
  FaStackOverflow as StackOverflow
} from 'react-icons/fa';
import Resume from '../portfolio/morgan-newman-resume.pdf';

export default function ContactBar({ className }) {
  return (
    <div className="contactBar">
      <aside className={`${className || 'contactBar-links'}`}>
        <a
          href="https://www.linkedin.com/in/morgannewman/"
          target="blank"
          className="contactBar-link"
        >
          <LinkedIn className="contactBar-link-icon" />
        </a>
        <a
          href="https://github.com/morgannewman"
          target="blank"
          className="contactBar-link"
        >
          <Github className="contactBar-link-icon" />
        </a>
        <a
          href="https://stackoverflow.com/users/9045128/morgan"
          target="blank"
          className="contactBar-link"
        >
          <StackOverflow className="contactBar-link-icon" />
        </a>
        <a
          href="https://medium.com/@morgannewman"
          target="blank"
          className="contactBar-link"
        >
          <Medium className="contactBar-link-icon" />
        </a>
        <a href={Resume} target="blank" className="contactBar-link">
          <ResumeIcon className="contactBar-link-icon" />
        </a>
      </aside>
    </div>
  );
}
