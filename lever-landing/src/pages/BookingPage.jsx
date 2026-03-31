import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Layers, Activity } from 'lucide-react'
import Cal from '@calcom/embed-react'
import vLogo from '../assets/booking_Logo.png'
import { fadeUp, staggerContainer } from '../lib/variants'
import Footer from '../components/Footer'

const benefits = [
  {
    icon: Clock,
    title: 'Outbound audit',
    description:
      'We diagnose your current pipeline — domains, data quality, sequences, deliverability.',
  },
  {
    icon: Layers,
    title: 'Custom system design',
    description:
      'A blueprint for your outbound machine — enrichment, outreach, AI automation, and reporting.',
  },
  {
    icon: Activity,
    title: 'Revenue projection',
    description:
      'Expected meetings, pipeline value, and timeline based on your deal size and ICP.',
  },
]

export default function BookingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── Minimal nav ───────────────────────────────── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(1,36,34,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(20px, 5vw, 40px)',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/" aria-label="Back to Lever" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={vLogo}
              alt="Lever"
              style={{ height: '48px', width: 'auto', objectFit: 'contain', borderRadius: '8px', mixBlendMode: 'screen' }}
            />
          </Link>
        </div>
      </nav>

      {/* ── Main content ──────────────────────────────── */}
      <main
        style={{
          flex: 1,
          padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 40px)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="final-cta-grid booking-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '56px',
              alignItems: 'start',
            }}
          >
            {/* ── Left column ──────────────────────────── */}
            <div>
              <motion.span
                variants={fadeUp}
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6EC531',
                  marginBottom: '20px',
                }}
              >
                Free GTM audit
              </motion.span>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(26px, 3vw, 32px)',
                  color: '#FEFFFC',
                  lineHeight: 1.25,
                  letterSpacing: '-0.5px',
                  marginBottom: '16px',
                }}
              >
                Agencies rent you leads. We build you a machine.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.75,
                  color: 'var(--text-3)',
                  marginBottom: '36px',
                  maxWidth: '440px',
                }}
              >
                Schedule a 30-minute call and get a custom GTM strategy built around your
                ICP, your market, and your revenue targets. Everything we build, you own.
              </motion.p>

              {/* Benefits */}
              <motion.div
                variants={staggerContainer}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}
              >
                {benefits.map(({ icon: Icon, title, description }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        flexShrink: 0,
                        borderRadius: '10px',
                        border: '1px solid rgba(110,197,49,0.3)',
                        background: 'rgba(110,197,49,0.07)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} style={{ color: '#6EC531' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '3px' }}>
                        {title}
                      </p>
                      <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-3)', margin: 0 }}>
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Scarcity badge */}
              <motion.div variants={fadeUp} style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 500,
                    background: 'rgba(250,197,80,0.08)',
                    border: '1px solid rgba(250,197,80,0.2)',
                    color: '#FAC550',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#FAC550',
                      flexShrink: 0,
                    }}
                  />
                  3–4 new clients per month — limited availability
                </span>
              </motion.div>

              {/* Trust line */}
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: '11px',
                  color: 'var(--text-4)',
                  letterSpacing: '0.02em',
                }}
              >
                47+ systems built · 99%+ deliverability · 12% avg reply rate
              </motion.p>
            </div>

            {/* ── Right column — Cal.com embed ─────────── */}
            <motion.div
              variants={fadeUp}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'var(--card-shadow)',
                minHeight: 'clamp(480px, 80vw, 620px)',
              }}
            >
              <Cal
                calLink="pulsedev/free-gtm-audit"
                config={{ theme: 'dark' }}
                style={{ width: '100%', height: '100%', minHeight: 'clamp(480px, 80vw, 620px)', overflow: 'scroll' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* ── Motivational card ────────────────────────── */}
      <div style={{ padding: '0 clamp(20px, 5vw, 40px)', marginBottom: 'clamp(48px, 8vw, 96px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '80px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div
              className="motivational-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '48px',
                alignItems: 'center',
                borderRadius: '16px',
                background: '#10110F',
                border: '1px solid rgba(61,59,54,0.3)',
                boxShadow: 'var(--card-shadow)',
                padding: 'clamp(40px, 5vw, 64px)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Left — text */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 600,
                    fontSize: '28px',
                    color: '#E8E4DB',
                    lineHeight: 1.25,
                    letterSpacing: '-0.4px',
                    marginBottom: '16px',
                    maxWidth: '520px',
                  }}
                >
                  You just made the smartest GTM decision this quarter.
                </h2>

                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: 1.75,
                    color: 'var(--text-3)',
                    maxWidth: '480px',
                    marginBottom: '28px',
                  }}
                >
                  While your competitors keep renting leads from agencies, you're about to
                  own the machine that generates them. After our call, you'll walk away with
                  a full outbound blueprint — whether we work together or not.
                </p>

                {/* Stats row */}
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    color: '#6EC531',
                    letterSpacing: '0.02em',
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  47+ systems built · 12% avg reply rate · 2–3 weeks to launch
                </p>
              </div>

              {/* Right — scaling engine SVG */}
              <div
                className="hide-mobile"
                style={{ width: '320px', height: '320px', flexShrink: 0, position: 'relative', zIndex: 1 }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>

                  {/* ── Radial glow behind base node ── */}
                  <circle cx="160" cy="272" r="80" fill="rgba(205,165,118,0.04)" />
                  <circle cx="160" cy="272" r="48" fill="rgba(205,165,118,0.03)" />

                  {/* ══ LEVEL 0→1 lines (1 → 2) ══ */}
                  <line x1="160" y1="260" x2="108" y2="208" stroke="rgba(124,184,158,0.4)" strokeWidth="0.5" strokeLinecap="round" />
                  <line x1="160" y1="260" x2="212" y2="208" stroke="rgba(124,184,158,0.4)" strokeWidth="0.5" strokeLinecap="round" />

                  {/* ══ LEVEL 1→2 lines (2 → 4) ══ */}
                  <line x1="108" y1="200" x2="76"  y2="152" stroke="rgba(124,184,158,0.35)" strokeWidth="0.5" strokeLinecap="round" />
                  <line x1="108" y1="200" x2="130" y2="152" stroke="rgba(124,184,158,0.35)" strokeWidth="0.5" strokeLinecap="round" />
                  <line x1="212" y1="200" x2="190" y2="152" stroke="rgba(124,184,158,0.35)" strokeWidth="0.5" strokeLinecap="round" />
                  <line x1="212" y1="200" x2="244" y2="152" stroke="rgba(124,184,158,0.35)" strokeWidth="0.5" strokeLinecap="round" />

                  {/* ══ LEVEL 2→3 lines (4 → 8), dashed ══ */}
                  <line x1="76"  y1="144" x2="50"  y2="100" stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />
                  <line x1="76"  y1="144" x2="92"  y2="96"  stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />
                  <line x1="130" y1="144" x2="118" y2="94"  stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />
                  <line x1="130" y1="144" x2="144" y2="90"  stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />
                  <line x1="190" y1="144" x2="176" y2="90"  stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />
                  <line x1="190" y1="144" x2="202" y2="94"  stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />
                  <line x1="244" y1="144" x2="228" y2="96"  stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />
                  <line x1="244" y1="144" x2="270" y2="100" stroke="rgba(124,184,158,0.25)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="3 5" />

                  {/* ══ LEVEL 0 — 1 large copper base ══ */}
                  <circle cx="160" cy="272" r="24" fill="rgba(205,165,118,0.15)" stroke="#CDA576" strokeWidth="1">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0s"    calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                  </circle>
                  <circle cx="160" cy="272" r="10" fill="rgba(205,165,118,0.35)" />
                  <circle cx="160" cy="272" r="5"  fill="#CDA576" />

                  {/* ══ LEVEL 1 — 2 medium sage nodes ══ */}
                  <circle cx="108" cy="200" r="16" fill="rgba(124,184,158,0.1)" stroke="#7CB89E" strokeWidth="0.5">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0.3s"  calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                  </circle>
                  <circle cx="108" cy="200" r="5"  fill="#7CB89E" />

                  <circle cx="212" cy="200" r="16" fill="rgba(124,184,158,0.1)" stroke="#7CB89E" strokeWidth="0.5">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0.3s"  calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                  </circle>
                  <circle cx="212" cy="200" r="5"  fill="#7CB89E" />

                  {/* ══ LEVEL 2 — 4 smaller sage nodes ══ */}
                  {[[76,144],[130,144],[190,144],[244,144]].map(([cx,cy], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="10" fill="rgba(124,184,158,0.1)" stroke="#7CB89E" strokeWidth="0.5">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0.6s" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                      </circle>
                      <circle cx={cx} cy={cy} r="3.5" fill="#7CB89E" />
                    </g>
                  ))}

                  {/* ══ LEVEL 3 — 8 tiny solid sage dots (arc) ══ */}
                  {[
                    [50,96],[92,90],[118,86],[144,84],
                    [176,84],[202,86],[228,90],[270,96],
                  ].map(([cx,cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="4" fill="#7CB89E">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="0.9s" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                    </circle>
                  ))}

                  {/* ══ Upward chevron at top ══ */}
                  <polyline points="148,62 160,50 172,62" stroke="#7CB89E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" begin="1.1s" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" repeatCount="indefinite" />
                  </polyline>
                  <polyline points="152,70 160,58 168,70" stroke="#7CB89E" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.35" />

                  {/* ══ Floating micro-dots (texture) ══ */}
                  <circle cx="34"  cy="170" r="2" fill="rgba(205,165,118,0.5)" />
                  <circle cx="290" cy="175" r="2" fill="rgba(124,184,158,0.45)" />
                  <circle cx="58"  cy="240" r="1.5" fill="rgba(124,184,158,0.4)" />
                  <circle cx="268" cy="248" r="1.5" fill="rgba(205,165,118,0.4)" />
                  <circle cx="20"  cy="120" r="1.5" fill="rgba(124,184,158,0.3)" />
                  <circle cx="300" cy="130" r="1.5" fill="rgba(205,165,118,0.3)" />
                  <circle cx="160" cy="30"  r="2"   fill="rgba(124,184,158,0.35)" />
                  <circle cx="104" cy="42"  r="1.5" fill="rgba(205,165,118,0.3)" />
                  <circle cx="216" cy="42"  r="1.5" fill="rgba(124,184,158,0.3)" />
                </svg>
              </div>

              {/* Subtle background glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: '-40px',
                  bottom: '-40px',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(110,197,49,0.05) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
