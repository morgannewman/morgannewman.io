import React from 'react';
import {
  FaFileAlt as ResumeIcon,
  FaGithub as Github,
  FaLinkedin as LinkedIn,
  FaMedium as Medium,
  FaStackOverflow as StackOverflow,
} from 'react-icons/fa';

import Resume from '../assets/morgan-newman-resume.pdf';

interface IProps {
  className?: string;
}

export default class ContactBar extends React.Component<IProps> {
  public render() {
    const { className } = this.props;

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
}
