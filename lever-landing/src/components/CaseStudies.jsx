import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/variants'
import { caseStudies } from '../data/caseStudies'

const ease = [0.69, 0, 0, 1]

function CaseStudyCard({ study }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '28px',
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
      {/* Tag */}
      <div style={{ marginBottom: '20px' }}>
        <span
          style={{
            fontSize: '12px',
            fontWeight: 500,
            padding: '6px 12px',
            borderRadius: '100px',
            background: 'rgba(250,247,113,0.1)',
            border: '1px solid rgba(250,247,113,0.2)',
            color: 'var(--accent)',
          }}
        >
          {study.tag}
        </span>
      </div>

      {/* Metrics */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
        <div>
          <span
            style={{
              display: 'block',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: 1,
              marginBottom: '2px',
              color: 'var(--text-1)',
            }}
          >
            {study.metric1}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-4)' }}>
            {study.metric1Label}
          </span>
        </div>
        <div
          style={{
            width: '1px',
            alignSelf: 'stretch',
            background: 'rgba(255,255,255,0.08)',
          }}
          aria-hidden="true"
        />
        <div>
          <span
            style={{
              display: 'block',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: 1,
              marginBottom: '2px',
              color: 'var(--accent)',
            }}
          >
            {study.metric2}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-4)' }}>
            {study.metric2Label}
          </span>
        </div>
      </div>

      {/* Quote */}
      <blockquote
        style={{
          fontSize: '14px',
          lineHeight: 1.7,
          flex: 1,
          marginBottom: '20px',
          color: 'var(--text-2)',
        }}
      >
        "{study.quote}"
      </blockquote>

      {/* Attribution */}
      <div
        style={{
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-3)' }}>
          {study.attribution}
        </p>
        <p style={{ fontSize: '12px', marginTop: '2px', color: 'var(--text-4)' }}>
          {study.company}
        </p>
      </div>
    </motion.article>
  )
}

export default function CaseStudies() {
  return (
    <section
      id="results"
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
              Client Results
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
              Numbers from real engagements
            </h2>
            <p style={{ fontSize: '18px', maxWidth: '520px', color: 'var(--text-2)', lineHeight: 1.5 }}>
              Not projections. Not benchmarks. Actual results from systems we built and
              ran.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
              gap: '16px',
            }}
          >
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
