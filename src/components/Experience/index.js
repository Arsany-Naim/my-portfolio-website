import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const EXPERIENCES = [
  {
    category: 'Work',
    items: [
      {
        role: 'Software Engineer Intern',
        company: 'Deloitte',
        period: 'Jul 2025 – Aug 2025',
        bullets: [
          'Developed Python scripts to clean, merge, and normalize IIoT telemetry data from multiple factory devices, improving data accuracy and processing time.',
          'Built a Tableau dashboard to visualize machine performance across 4 global sites, helping engineers detect recurring failures and reliability issues faster.',
          'Prepared a client proposal for a real-time manufacturing dashboard, including technical architecture, timelines, and resource planning.',
          "Analyzed cybersecurity logs to identify unusual network patterns and potential intranet attacks, supporting the security team's monitoring process.",
        ],
      },
    ],
  },
  {
    category: 'Volunteering',
    items: [
      {
        role: 'Open-Source Contributor',
        company: 'GitHub',
        period: 'May 2025 – Present',
        bullets: [
          'Contributed code fixes and features that reduced bug resolution time by 30% across supported repositories.',
          'Reviewed pull requests and provided documentation updates to improve the stability and clarity of codebases.',
        ],
      },
      {
        role: 'Organizer',
        company: 'TEDxMIU',
        period: 'Oct 2024 – Oct 2025',
        bullets: [
          'Increased event attendance by 50% through marketing outreach and better volunteer planning.',
          'Conducted onboarding and safety training for 20+ volunteers, improving preparation time and event-day coordination.',
        ],
      },
    ],
  },
  {
    category: 'Learning',
    items: [
      {
        role: 'Full-Stack Diploma',
        company: 'Route Academy',
        period: 'Mar 2024 – May 2025',
        bullets: [],
      },
    ],
  },
]

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeIdx, setActiveIdx] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const toggle = (idx) => setActiveIdx((prev) => (prev === idx ? null : idx))

  let globalIdx = 0

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>

          {EXPERIENCES.map((group) => (
            <div className="exp-group" key={group.category}>
              <span className="exp-category-label">{group.category}</span>
              {group.items.map((item) => {
                const idx = globalIdx++
                const isOpen = activeIdx === idx
                return (
                  <div
                    className={`exp-card${isOpen ? ' exp-card--open' : ''}`}
                    key={idx}
                    onClick={() => toggle(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggle(idx)}
                  >
                    <div className="exp-card__header">
                      <div className="exp-card__left">
                        <span className="exp-card__role">{item.role}</span>
                        <span className="exp-card__company">{item.company}</span>
                      </div>
                      <div className="exp-card__right">
                        <span className="exp-card__period">{item.period}</span>
                        {item.bullets.length > 0 && (
                          <span className="exp-card__chevron">
                            {isOpen ? '▲' : '▼'}
                          </span>
                        )}
                      </div>
                    </div>
                    {item.bullets.length > 0 && (
                      <div className="exp-card__body">
                        <ul>
                          {item.bullets.map((b, bi) => (
                            <li key={bi}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="exp-timeline-visual" aria-hidden="true">
          <div className="exp-timeline__line" />
          <div className="exp-timeline__node" data-year="2024" />
          <div className="exp-timeline__node exp-timeline__node--mid" data-year="2025" />
          <div className="exp-timeline__node exp-timeline__node--top" data-year="Now" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
