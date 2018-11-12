import './ContactBar.scss'
import React from 'react'
import {
  FaLinkedin as LinkedIn,
  FaMedium as Medium,
  FaGithub as Github,
  FaFileAlt as ResumeIcon,
} from 'react-icons/fa'
import Resume from '../portfolio/Resume.pdf'

export default function ContactBar() {
  return (
    <div className="contact">
      <aside className="contact-bar">
        <a
          href="https://www.linkedin.com/in/morgannewman/"
          target="blank"
          className="contact-link"
        >
          <LinkedIn className="contact-link-icon" />
        </a>
        <a
          href="https://github.com/morgannewman"
          target="blank"
          className="contact-link"
        >
          <Github className="contact-link-icon" />
        </a>
        <a
          href="https://medium.com/@morgannewman"
          target="blank"
          className="contact-link"
        >
          <Medium className="contact-link-icon" />
        </a>
        <a href={Resume} target="blank" className="contact-link">
          <ResumeIcon className="contact-link-icon" />
        </a>
      </aside>
    </div>
  )
}
