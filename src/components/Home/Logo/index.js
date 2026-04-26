import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import './index.scss'

// Front face of the extruded A
const FRONT = 'M200,50 L15,570 L95,570 L145,345 L145,290 L255,290 L255,345 L305,570 L385,570 Z'

// Side-face polygons connecting front to depth (right-facing & bottom-facing edges)
const SIDES = [
  // Right outer leg face: apex → bottom-right outer
  '200,50 224,66 409,586 385,570',
  // Bottom-right foot
  '305,570 385,570 409,586 329,586',
  // Bottom-left foot
  '15,570 95,570 119,586 39,586',
  // Right side of crossbar (right-facing)
  '255,290 279,306 279,361 255,345',
  // Bottom of crossbar
  '145,345 255,345 279,361 169,361',
]

const Logo = () => {
  const bgRef = useRef()
  const svgRef = useRef()

  useEffect(() => {
    gsap.to(bgRef.current, { opacity: 1, duration: 1 })

    // Float up/down
    gsap.to(svgRef.current, {
      y: -22,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // Gentle rock
    gsap.to(svgRef.current, {
      rotation: 2.5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <div className="a-perspective-wrapper">
        <svg
          ref={svgRef}
          viewBox="-5 40 430 558"
          className="a-svg"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Arsany Naim — Software Engineer"
        >
          <defs>
            <linearGradient id="aFront" x1="25%" y1="0%" x2="75%" y2="100%">
              <stop offset="0%" stopColor="#fff5a8" />
              <stop offset="45%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#ff9200" />
            </linearGradient>
            <linearGradient id="aSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c47a00" />
              <stop offset="100%" stopColor="#6e3a00" />
            </linearGradient>
            <filter id="aGlow" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Depth back fill */}
          <path
            d="M224,66 L39,586 L119,586 L169,361 L169,306 L279,306 L279,361 L329,586 L409,586 Z"
            fill="url(#aSide)"
          />

          {/* Side connecting faces */}
          {SIDES.map((pts, i) => (
            <polygon key={i} points={pts} fill="url(#aSide)" />
          ))}

          {/* Front face */}
          <path d={FRONT} fill="url(#aFront)" filter="url(#aGlow)" />
        </svg>
      </div>
    </div>
  )
}

export default Logo
