import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faFileLines,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        
        <div className="sub-logo">
          <svg viewBox="-1 4 46 60" width="28" height="37" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.4))' }}>
            <defs>
              <linearGradient id="sbNFront" x1="25%" y1="0%" x2="75%" y2="100%">
                <stop offset="0%" stopColor="#fff5a8" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#ff9200" />
              </linearGradient>
              <linearGradient id="sbNSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c47a00" />
                <stop offset="100%" stopColor="#6e3a00" />
              </linearGradient>
            </defs>
            <path d="M22,7 L4,64 L10,64 L16,40 L16,35 L28,35 L28,40 L34,64 L40,64 Z" fill="url(#sbNSide)" />
            <polygon points="22,5 25,8 43,66 40,64" fill="url(#sbNSide)" />
            <path d="M22,5 L2,64 L8,64 L14,40 L14,35 L30,35 L30,40 L36,64 L42,64 Z" fill="url(#sbNFront)" />
          </svg>
          {/* <span className="sub-logo-text">Arsany</span> */}
        </div>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="experience-link"
          to="/experience"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="lg"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1ceBJMa__C_bN-p723oHVNeL8MHKI-JDS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFileLines}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/Arsany-Naim"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Arsany-Naim"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        
      
      </ul>
      <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="xl"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
