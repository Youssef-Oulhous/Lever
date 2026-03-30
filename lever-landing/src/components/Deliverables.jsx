import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/variants'

const ease = [0.69, 0, 0, 1]

const deliverables = [
  {
    id: 1,
    title: 'Clay enrichment pipeline',
    description: 'Configured with 4+ waterfall data sources. ICP scoring built in.',
  },
  {
    id: 2,
    title: '5+ warmed email domains',
    description: 'Full SPF/DKIM/DMARC authentication. Warmup complete before launch.',
  },
  {
    id: 3,
    title: 'LinkedIn outreach sequences',
    description: 'Loaded and running via HeyReach. Connection, follow-up, and conversion flows.',
  },
  {
    id: 4,
    title: 'Custom n8n AI workflows',
    description: 'Lead scoring, personalization, and research automation. Runs without you.',
  },
  {
    id: 5,
    title: 'Live revenue dashboard',
    description: 'Tracks reply rates, meetings, pipeline, cost per lead, and ROI in real time.',
  },
  {
    id: 6,
    title: 'Full documentation',
    description: 'Your team can operate everything independently. No dependency on us.',
  },
]

export default function Deliverables() {
  return (
    <section
      id="deliverables"
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
              What You Own
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--text-1)',
                letterSpacing: '-2px',
                marginBottom: '12px',
                maxWidth: '560px',
                fontFamily: '"Clash Grotesk", sans-serif',
              textTransform: 'uppercase',
              }}
            >
              What you literally walk away with
            </h2>
            <p style={{ fontSize: '18px', maxWidth: '520px', color: 'var(--text-2)', lineHeight: 1.5 }}>
              Six concrete deliverables. All on your infrastructure. All yours permanently.
            </p>
          </motion.div>

          {/* Checklist grid */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
              gap: '16px',
            }}
          >
            {deliverables.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease }}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '24px',
                  borderRadius: '32px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'box-shadow 0.3s cubic-bezier(0.69,0,0,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)'
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                    background: 'var(--accent-dim)',
                    border: '1px solid var(--accent-border)',
                  }}
                >
                  <Check size={13} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: '15px',
                      marginBottom: '4px',
                      lineHeight: 1.3,
                      color: 'var(--text-1)',
                      fontFamily: '"Clash Grotesk", sans-serif',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-3)' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
