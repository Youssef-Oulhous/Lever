import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/variants'

const ease = [0.69, 0, 0, 1]

const phases = [
  {
    id: '01',
    title: 'GTM audit',
    description: "We diagnose your outbound gaps. Free, 30 minutes. No pitch, no pressure — just an honest assessment of what's broken and what's possible.",
    timing: 'Week 1',
    badge: 'Free',
  },
  {
    id: '02',
    title: 'System design',
    description: 'Custom blueprint for your ICP, channels, and stack. You approve everything before we build a single thing. No surprises.',
    timing: 'Week 1–2',
    badge: null,
  },
  {
    id: '03',
    title: 'Build & launch',
    description: 'Everything goes live: enrichment pipeline, email infra, LinkedIn sequences, AI workflows, dashboards. Full QA. Supervised go-live.',
    timing: 'Week 2–4',
    badge: null,
  },
  {
    id: '04',
    title: 'Optimize',
    description: "Monthly reporting, A/B testing, sequence iteration. We don't disappear after launch. No lock-in — the results keep you here.",
    timing: 'Ongoing',
    badge: null,
  },
]

export default function Process() {
  return (
    <section
      id="process"
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
          <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
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
              The Process
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--text-1)',
                letterSpacing: '-2px',
                marginBottom: '12px',
                maxWidth: '520px',
                fontFamily: '"Clash Grotesk", sans-serif',
              textTransform: 'uppercase',
              }}
            >
              From audit to live system in 2–4 weeks
            </h2>
            <p style={{ fontSize: '18px', maxWidth: '520px', color: 'var(--text-2)', lineHeight: 1.5 }}>
              Four phases. Clear milestones. You approve before we build.
            </p>
          </motion.div>

          {/* Phase strip */}
          <div style={{ position: 'relative' }}>
            {/* Connecting line — desktop */}
            <div
              className="hidden md:block process-connector"
              style={{
                position: 'absolute',
                top: '32px',
                left: '32px',
                right: '32px',
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
              }}
              aria-hidden="true"
            />

            <motion.div
              variants={staggerContainer}
              className="grid-4"
              style={{
                gap: '16px',
              }}
            >
              {phases.map((phase) => (
                <motion.div
                  key={phase.id}
                  variants={fadeUp}
                  style={{ position: 'relative' }}
                >
                  {/* Phase number dot */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '12px',
                        fontWeight: 500,
                        flexShrink: 0,
                        position: 'relative',
                        zIndex: 10,
                        background: 'rgba(110,231,183,0.1)',
                        border: '1px solid rgba(110,231,183,0.25)',
                        color: 'var(--leaf)',
                      }}
                    >
                      {phase.id}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '12px',
                          fontFamily: 'JetBrains Mono, monospace',
                          color: 'var(--text-3)',
                        }}
                      >
                        {phase.timing}
                      </span>
                      {phase.badge && (
                        <span
                          style={{
                            fontSize: '12px',
                            padding: '4px 10px',
                            borderRadius: '100px',
                            fontWeight: 500,
                            background: 'var(--accent-dim)',
                            border: '1px solid var(--accent-border)',
                            color: 'var(--accent)',
                          }}
                        >
                          {phase.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '28px 24px',
                      borderRadius: '32px',
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: 'var(--card-shadow)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: '"Clash Grotesk", sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                        color: 'var(--text-1)',
                        marginBottom: '8px',
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: 'var(--text-3)',
                      }}
                    >
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
