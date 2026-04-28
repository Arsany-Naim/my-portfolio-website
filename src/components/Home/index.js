import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['r', 's', 'a', 'n', 'y',]
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> {/* Added extra spaces for better spacing between "I'm" and the SVG */}
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _15`} style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: '0px', marginRight: '0px' }}>
              <svg viewBox="-1 4 46 60" width="36" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))' }}>
                <defs>
                  <linearGradient id="nFront" x1="25%" y1="0%" x2="75%" y2="100%">
                    <stop offset="0%" stopColor="#fff5a8" />
                    <stop offset="50%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#ff9200" />
                  </linearGradient>
                  <linearGradient id="nSide" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c47a00" />
                    <stop offset="100%" stopColor="#6e3a00" />
                  </linearGradient>
                </defs>
                {/* Depth back */}
                <path d="M22,7 L4,64 L10,64 L16,40 L16,35 L28,35 L28,40 L34,64 L40,64 Z" fill="url(#nSide)" />
                {/* Side face (right outer leg) */}
                <polygon points="22,5 25,8 43,66 40,64" fill="url(#nSide)" />
                {/* Front face */}
                <path d="M22,5 L2,64 L8,64 L14,40 L14,35 L30,35 L30,40 L36,64 L42,64 Z" fill="url(#nFront)" />
              </svg>
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={24} 
            /> 

          </h1>
          <h2>CS Senior @MIU | Ex-Intern @Deloitte</h2>

          <div className="cta-row">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <a
              href="https://drive.google.com/file/d/1ceBJMa__C_bN-p723oHVNeL8MHKI-JDS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flat-button flat-button--secondary"
            >
              RESUME
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/Arsany-Naim"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Arsany-Naim"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:arsanynaim@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
