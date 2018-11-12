import './ContactBar.scss'
import React from 'react'
import {
  FaLinkedin as LinkedIn,
  FaMedium as Medium,
  FaGithub as Github,
  FaFileAlt as Resume,
} from 'react-icons/fa'
import Test from '../portfolio/Test.pdf'

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
        <a href={Test} target="blank" className="contact-link">
          <Resume className="contact-link-icon" />
        </a>
      </aside>
    </div>
  )
}
