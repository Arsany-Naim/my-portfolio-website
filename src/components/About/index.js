import { useEffect, useState } from 'react'
import {
  faAmazon,
  faAngular,
  faAws,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiSpringboot, SiDotnet, SiAngular, SiReact,
  SiNodedotjs, SiGit, SiDocker, SiPostman, SiSwagger, SiJira,
} from 'react-icons/si'
import { FaJava, FaDatabase } from 'react-icons/fa'
import { TbBrandAzure, TbBrandCSharp } from 'react-icons/tb'
import './index.scss'

const skillCategories = [
  {
    label: 'Languages',
    skills: [
      { Icon: FaJava, color: '#f89820', name: 'Java' },
      { Icon: TbBrandCSharp, color: '#9b4f96', name: 'C#' },
      { Icon: SiCplusplus, color: '#00599c', name: 'C++' },
      { Icon: SiPython, color: '#3776ab', name: 'Python' },
      { Icon: SiJavascript, color: '#f7df1e', name: 'JavaScript' },
      { Icon: SiTypescript, color: '#3178c6', name: 'TypeScript' },
      { Icon: FaDatabase, color: '#336791', name: 'SQL' },
      { Icon: SiHtml5, color: '#e34f26', name: 'HTML' },
      { Icon: SiCss, color: '#1572b6', name: 'CSS' },
    ],
  },
  {
    label: 'Technologies',
    skills: [
      { Icon: SiSpringboot, color: '#6db33f', name: 'Spring Boot' },
      { Icon: SiDotnet, color: '#512bd4', name: 'ASP.NET Core' },
      { Icon: SiAngular, color: '#dd0031', name: 'Angular' },
      { Icon: SiReact, color: '#61dafb', name: 'React' },
      { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { Icon: SiGit, color: '#f05032', name: 'Git' },
      { Icon: SiDocker, color: '#2496ed', name: 'Docker' },
      { Icon: TbBrandAzure, color: '#0089d6', name: 'Azure' },
      { Icon: SiPostman, color: '#ff6c37', name: 'Postman' },
      { Icon: SiSwagger, color: '#85ea2d', name: 'Swagger' },
      { Icon: SiJira, color: '#0052cc', name: 'Jira' },
    ],
  },
]

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a Dedicated software engineer with a sharp eye for solving real problems and a genuine obsession with the craft. I don't just write code — I think deeply about why things are built, not just how.
          </p>
          <p align="LEFT">
            I thrive in collaborative environments, communicate clearly, and naturally gravitate toward taking ownership — whether that's leading a solution or supporting the team to get there. I learn fast, adapt faster, and bring the kind of energy that makes the people around me better.
          </p>
          <p>
            I'm at a stage in my career where I'm hungry, focused, and ready to make a real impact — and I bring the discipline and competitive edge to back it up.
          </p>

          <div className="skills-section">
            {skillCategories.map((category) => (
              <div className="skill-category" key={category.label}>
                <span className="category-label">{category.label}</span>
                <div className="icons-row">
                  {category.skills.map(({ Icon, color, name }) => (
                    <div
                      className="skill-icon"
                      key={name}
                      data-tooltip={name}
                    >
                      <Icon color={color} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#fb5721" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#000000" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#329933" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About