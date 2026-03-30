import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/variants'
import { agencyItems, leverItems } from '../data/comparison'

const ease = [0.69, 0, 0, 1]

function ComparisonColumn({ title, subtitle, items, type }) {
  const isLever = type === 'sage'

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease }}
      style={{
        flex: 1,
        borderRadius: '32px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isLever
          ? '1px solid rgba(250,247,113,0.25)'
          : '1px solid rgba(255,255,255,0.1)',
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
      {/* Header */}
      <div
        style={{
          padding: '20px 24px',
          borderBottom: isLever
            ? '1px solid rgba(250,247,113,0.15)'
            : '1px solid rgba(255,255,255,0.08)',
          background: isLever
            ? 'rgba(250,247,113,0.03)'
            : 'rgba(255,255,255,0.01)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: isLever ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
            }}
          />
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isLever ? 'var(--accent)' : 'var(--text-3)',
            }}
          >
            {title}
          </span>
        </div>
        <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.5, color: 'var(--text-2)' }}>
          {subtitle}
        </p>
      </div>

      {/* Items */}
      <ul style={{ padding: '20px 24px', listStyle: 'none', margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: i < items.length - 1 ? '14px' : 0,
            }}
          >
            {isLever ? (
              <Check
                size={15}
                style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}
              />
            ) : (
              <X
                size={15}
                style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '2px' }}
              />
            )}
            <span style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.6, color: 'var(--text-1)' }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function EmailMockup({ type }) {
  const isLever = type === 'sage'

  return (
    <motion.div
      variants={fadeUp}
      style={{
        flex: 1,
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isLever
          ? '1px solid rgba(250,247,113,0.15)'
          : '1px solid rgba(255,255,255,0.1)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {/* Email header */}
      <div
        style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          </div>
          <span
            style={{
              fontSize: '12px',
              padding: '4px 10px',
              borderRadius: '100px',
              background: isLever ? 'var(--accent-dim)' : 'rgba(255,255,255,0.06)',
              border: isLever ? '1px solid var(--accent-border)' : '1px solid rgba(255,255,255,0.1)',
              color: isLever ? 'var(--accent)' : 'var(--text-3)',
              fontWeight: 500,
            }}
          >
            {isLever ? 'Delivered to primary' : 'Flagged as promotional'}
          </span>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-4)', margin: '0 0 4px' }}>
          From:{' '}
          <span style={{ color: 'var(--text-3)' }}>
            {isLever ? 'anas@lever-agency.com' : 'sales@noreply-bulk.com'}
          </span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-4)', margin: 0 }}>
          Subject:{' '}
          <span style={{ color: 'var(--text-3)' }}>
            {isLever
              ? 'Quick question about your outbound setup'
              : 'BEST LEAD GENERATION OFFER 2024!!!'}
          </span>
        </p>
      </div>

      {/* Email body */}
      <div style={{ padding: '16px 20px' }}>
        <div style={{ marginBottom: '16px' }}>
          {isLever ? (
            <>
              <p style={{ fontSize: '14px', color: 'var(--text-2)', margin: '0 0 8px' }}>
                Hi Sarah,
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-2)', margin: '0 0 8px' }}>
                Saw that Acme just hit Series A — congrats. Most compliance SaaS teams at
                your stage are still doing outbound manually. We built a system for a
                similar company that went from 2 demos/week to 12.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-2)', margin: '0 0 12px' }}>
                Worth 15 minutes?
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', margin: 0 }}>
                — Anas
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: '14px', color: 'var(--text-2)', margin: '0 0 8px' }}>
                Dear Decision Maker,
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-2)', margin: '0 0 8px' }}>
                We are a leading provider of B2B lead generation solutions. Our
                cutting-edge technology leverages AI to help you grow your pipeline and
                scale your business to new heights...
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-2)', margin: 0 }}>
                Click here to schedule a FREE consultation with our team of experts today!
              </p>
            </>
          )}
        </div>

        <div
          style={{
            paddingTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span style={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-4)' }}>
            {isLever ? '14% reply rate' : '0.3% reply rate'}
          </span>
          <span
            style={{
              fontSize: '12px',
              padding: '4px 10px',
              borderRadius: '100px',
              background: isLever ? 'var(--accent-dim)' : 'rgba(255,255,255,0.06)',
              color: isLever ? 'var(--accent)' : 'var(--text-3)',
            }}
          >
            {isLever ? '✓ Personalized' : '✗ Generic template'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Comparison() {
  return (
    <section
      id="comparison"
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
              The Comparison
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
              Why not just hire an agency?
            </h2>
            <p style={{ fontSize: '18px', maxWidth: '520px', color: 'var(--text-2)', lineHeight: 1.5 }}>
              One honest comparison. Template campaigns that stop when the invoice stops —
              versus custom systems you own that compound over time.
            </p>
          </motion.div>

          {/* Comparison columns — Lever first */}
          <div className="comparison-cols" style={{ marginBottom: '48px' }}>
            <ComparisonColumn
              title="Lever"
              subtitle="Custom systems you own that compound over time"
              items={leverItems}
              type="sage"
            />
            <ComparisonColumn
              title="Other agencies"
              subtitle="Template campaigns that stop when the invoice stops"
              items={agencyItems}
              type="coral"
            />
          </div>

          {/* Email mockups — Lever first */}
          <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-3)', marginBottom: '16px' }}>
              The difference in practice — same prospect, two approaches:
            </p>
          </motion.div>

          <div className="comparison-cols">
            <EmailMockup type="sage" />
            <EmailMockup type="coral" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
