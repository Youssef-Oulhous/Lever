import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ease = [0.69, 0, 0, 1]

const item = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay } },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(20px, 5vw, 40px) clamp(60px, 10vw, 120px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Badge */}
        <motion.div {...item(0)} style={{ marginBottom: '32px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-2)',
              letterSpacing: '0.01em',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 6px rgba(250,247,113,0.6)',
                flexShrink: 0,
              }}
            />
            GTM engineering as a service
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...item(0.1)}
          style={{
            fontSize: 'clamp(48px, 7vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-2.5px',
            lineHeight: 1.08,
            color: 'var(--text-1)',
            maxWidth: '880px',
            margin: '0 auto 24px',
            fontFamily: '"Clash Grotesk", sans-serif',
            textTransform: 'uppercase',
          }}
        >
          Your pipeline was never satisfying you —{' '}
          <span style={{ color: 'var(--accent)' }}>Because it was never engineered. </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...item(0.2)}
          style={{
            fontSize: '20px',
            lineHeight: 1.5,
            color: 'var(--text-2)',
            maxWidth: '560px',
            margin: '0 auto 40px',
          }}
        >
          Lead enrichment. Cold email. LinkedIn. AI automation. Revenue reporting — one connected system, fully built on your infrastructure. You own everything.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...item(0.3)}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          {/* Primary CTA — Agenta-style rotating arrow */}
          <motion.div
            whileHover="hovered"
            whileTap={{ scale: 0.97 }}
            initial="idle"
          >
            <Link
              to="/book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#6EC531',
                color: '#FFFFFF',
                borderRadius: '100px',
                padding: '16px 32px',
                fontSize: '17px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'Geist, sans-serif',
              }}
            >
              Book a free GTM audit
              {/* Icon container — fixed size so button doesn't shift */}
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}>
                <motion.span
                  variants={{
                    idle:    { rotate: 0 },
                    hovered: { rotate: -45 },
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ArrowRight size={12} strokeWidth={2.5} />
                </motion.span>
              </span>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.a
            href="#results"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'var(--text-1)',
              borderRadius: '100px',
              padding: '16px 32px',
              fontSize: '17px',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'pointer',
              textDecoration: 'none',
              fontFamily: 'Geist, sans-serif',
            }}
          >
            See client results
          </motion.a>
        </motion.div>

        {/* Qualifier */}
        <motion.p
          {...item(0.4)}
          style={{ fontSize: '14px', color: 'var(--text-3)' }}
        >
          For B2B teams doing $50K+/mo who need pipeline, not another agency.{' '}
          <span style={{ color: 'var(--text-2)' }}>Everything we build, you own.</span>
        </motion.p>
      </div>
    </section>
  )
}
