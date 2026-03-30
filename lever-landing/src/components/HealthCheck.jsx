import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../lib/variants'

const questions = [
  { id: 1, text: 'We use one domain for all outbound emails' },
  { id: 2, text: 'Our email bounce rate is above 5%' },
  { id: 3, text: 'No enrichment pipeline — we buy lists and send' },
  { id: 4, text: 'Our team spends more time researching than selling' },
  { id: 5, text: 'No real-time visibility into pipeline metrics' },
]

const ease = [0.69, 0, 0, 1]

function Toggle({ active, onToggle, label }) {
  return (
    <button
      role="switch"
      aria-checked={active}
      aria-label={label}
      onClick={onToggle}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      style={{
        position: 'relative',
        flexShrink: 0,
        width: '44px',
        height: '24px',
        borderRadius: '100px',
        background: active ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s cubic-bezier(0.69,0,0,1)',
        padding: 0,
      }}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'absolute',
          top: '2px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: active ? 'var(--bg)' : 'rgba(255,255,255,0.5)',
          left: active ? 'calc(100% - 22px)' : '2px',
        }}
      />
    </button>
  )
}

export default function HealthCheck() {
  const [active, setActive] = useState({})

  const toggle = (id) => setActive((prev) => ({ ...prev, [id]: !prev[id] }))
  const score = Object.values(active).filter(Boolean).length

  return (
    <section
      id="health-check"
      style={{
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 40px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUp} style={{ marginBottom: '48px', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '16px',
              }}
            >
              Outbound Health Check
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--text-1)',
                letterSpacing: '-2px',
                marginBottom: '12px',
                fontFamily: '"Clash Grotesk", sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Is your outbound engine broken?
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '18px', maxWidth: '480px', margin: '0 auto' }}>
              Toggle every statement that applies to your team right now.
            </p>
          </motion.div>

          {/* Questions container */}
          <motion.div
            variants={staggerContainer}
            style={{
              maxWidth: '640px',
              margin: '0 auto',
              borderRadius: '32px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            {questions.map((q, i) => (
              <motion.div
                key={q.id}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  borderBottom: i < questions.length - 1 ? '1px solid var(--border)' : 'none',
                  background: active[q.id] ? 'rgba(250,247,113,0.04)' : 'transparent',
                  transition: 'background 0.2s cubic-bezier(0.69,0,0,1)',
                }}
              >
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    paddingRight: '24px',
                    lineHeight: 1.5,
                    color: active[q.id] ? 'var(--text-1)' : 'var(--text-2)',
                    transition: 'color 0.2s cubic-bezier(0.69,0,0,1)',
                  }}
                >
                  {q.text}
                </span>
                <Toggle
                  active={!!active[q.id]}
                  onToggle={() => toggle(q.id)}
                  label={q.text}
                />
              </motion.div>
            ))}

            {/* Score + CTA */}
            <div
              style={{
                padding: '20px 24px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                borderTop: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-3)' }}>
                  Gaps found:
                </span>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 500,
                    fontSize: '24px',
                    color: score > 0 ? 'var(--accent)' : 'var(--text-3)',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {score}
                  <span style={{ fontSize: '16px', color: 'var(--text-4)' }}>/5</span>
                </span>
                {score > 0 && (
                  <span
                    style={{
                      fontSize: '12px',
                      padding: '4px 10px',
                      borderRadius: '100px',
                      background: 'var(--accent-dim)',
                      border: '1px solid var(--accent-border)',
                      color: 'var(--accent)',
                      fontWeight: 500,
                    }}
                  >
                    {score === 5 ? 'Critical' : score >= 3 ? 'High risk' : 'Review needed'}
                  </span>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2, ease }}>
                <Link
                  to="/book"
                  style={{
                    display: 'inline-block',
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: '10px 20px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    fontFamily: '"Clash Grotesk", sans-serif',
                    background: score > 0 ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
                    color: score > 0 ? '#FFFFFF' : 'var(--text-3)',
                    transition: 'background 0.2s cubic-bezier(0.69,0,0,1), color 0.2s cubic-bezier(0.69,0,0,1)',
                  }}
                >
                  Get your free audit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
