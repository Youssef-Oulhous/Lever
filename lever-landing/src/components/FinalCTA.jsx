import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../lib/variants'

export default function FinalCTA() {
  return (
    <section
      id="book"
      style={{
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 40px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          {/* Card */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(110,197,49,0.2)',
              boxShadow: '0 0 80px rgba(110,197,49,0.06), var(--card-shadow)',
              padding: 'clamp(40px, 6vw, 64px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '48px',
            }}
            className="final-cta-card"
          >
            {/* Left — text */}
            <div style={{ maxWidth: '520px', position: 'relative', zIndex: 1 }}>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6EC531',
                  marginBottom: '20px',
                }}
              >
                Free 30-minute call
              </p>

              <h2
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  color: '#FEFFFC',
                  lineHeight: 1.2,
                  letterSpacing: '-0.8px',
                  marginBottom: '20px',
                }}
              >
                Ready to engineer your pipeline?
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  lineHeight: 1.7,
                  color: 'var(--text-3)',
                  marginBottom: '36px',
                }}
              >
                Book a 30-minute call. Get a custom GTM blueprint. Walk away with a
                system you own — whether we work together or not.
              </p>

              <motion.div whileHover={{ y: -2, filter: 'brightness(1.08)' }} transition={{ duration: 0.2 }}>
                <Link
                  to="/book"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '48px',
                    minWidth: '200px',
                    padding: '0 28px',
                    borderRadius: '8px',
                    background: 'var(--accent)',
                    color: '#0B0C0A',
                    fontSize: '15px',
                    fontWeight: 600,
                    fontFamily: 'Geist, sans-serif',
                    textDecoration: 'none',
                    letterSpacing: '-0.1px',
                  }}
                >
                  Book a call →
                </Link>
              </motion.div>
            </div>

            {/* Right — abstract SVG illustration */}
            <div
              style={{
                flexShrink: 0,
                width: '300px',
                height: '300px',
                position: 'relative',
                zIndex: 1,
              }}
              className="hide-mobile"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
              >
                {/* Outer ring */}
                <circle cx="150" cy="150" r="130" stroke="rgba(110,197,49,0.12)" strokeWidth="1" />
                {/* Mid ring */}
                <circle cx="150" cy="150" r="88" stroke="rgba(110,197,49,0.18)" strokeWidth="1" />
                {/* Inner ring */}
                <circle cx="150" cy="150" r="46" stroke="rgba(110,197,49,0.28)" strokeWidth="1" />

                {/* Fulcrum — triangle base */}
                <polygon
                  points="150,104 184,164 116,164"
                  stroke="#6EC531"
                  strokeWidth="1.5"
                  fill="rgba(110,197,49,0.06)"
                />
                {/* Fulcrum base line */}
                <line x1="100" y1="164" x2="200" y2="164" stroke="#6EC531" strokeWidth="1.5" strokeLinecap="round" />
                {/* Lever arm */}
                <line x1="80" y1="148" x2="220" y2="180" stroke="rgba(250,197,80,0.7)" strokeWidth="2" strokeLinecap="round" />

                {/* Left node — heavy side */}
                <circle cx="80" cy="148" r="10" fill="rgba(250,197,80,0.15)" stroke="#FAC550" strokeWidth="1.5" />
                <circle cx="80" cy="148" r="4" fill="#FAC550" />

                {/* Right node — lifted side */}
                <circle cx="220" cy="180" r="10" fill="rgba(110,197,49,0.15)" stroke="#6EC531" strokeWidth="1.5" />
                <circle cx="220" cy="180" r="4" fill="#6EC531" />

                {/* Connector dots — orbital */}
                <circle cx="150" cy="20" r="3.5" fill="rgba(110,197,49,0.5)" />
                <circle cx="255" cy="82" r="2.5" fill="rgba(110,197,49,0.35)" />
                <circle cx="265" cy="195" r="3" fill="rgba(250,197,80,0.4)" />
                <circle cx="150" cy="280" r="2.5" fill="rgba(110,197,49,0.3)" />
                <circle cx="38" cy="195" r="3" fill="rgba(110,197,49,0.3)" />
                <circle cx="45" cy="82" r="2" fill="rgba(250,197,80,0.3)" />

                {/* Dashed orbit arc — top half */}
                <path
                  d="M 20 150 A 130 130 0 0 1 280 150"
                  stroke="rgba(110,197,49,0.08)"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                  fill="none"
                />

                {/* Center glow dot */}
                <circle cx="150" cy="150" r="5" fill="rgba(110,197,49,0.6)" />
                <circle cx="150" cy="150" r="10" fill="rgba(110,197,49,0.1)" />

                {/* Floating micro nodes */}
                <circle cx="110" cy="88" r="3" fill="rgba(250,197,80,0.25)" stroke="rgba(250,197,80,0.5)" strokeWidth="1" />
                <circle cx="192" cy="72" r="2" fill="rgba(110,197,49,0.4)" />
                <circle cx="236" cy="130" r="2.5" fill="rgba(250,197,80,0.3)" />
                <circle cx="68" cy="200" r="2" fill="rgba(110,197,49,0.35)" />
              </svg>
            </div>

            {/* Background glow blob */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(110,197,49,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
