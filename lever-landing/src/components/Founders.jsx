import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/variants'
import { founders } from '../data/founders'

const ease = [0.69, 0, 0, 1]

function FounderCard({ founder }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease }}
      style={{
        flex: 1,
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
      {/* Avatar */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Geist, sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          marginBottom: '20px',
          background: 'rgba(250,247,113,0.1)',
          border: '1px solid rgba(250,247,113,0.2)',
          color: 'var(--accent)',
        }}
        aria-hidden="true"
      >
        {founder.initial}
      </div>

      {/* Name + title */}
      <h3
        style={{
          fontFamily: '"Clash Grotesk", sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          color: 'var(--text-1)',
          marginBottom: '2px',
        }}
      >
        {founder.name}
      </h3>
      <p
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--accent)',
          marginBottom: '16px',
        }}
      >
        {founder.title}
      </p>

      {/* Bio */}
      <p
        style={{
          fontSize: '14px',
          lineHeight: 1.7,
          color: 'var(--text-2)',
          marginBottom: '20px',
        }}
      >
        {founder.bio}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {founder.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '12px',
              padding: '6px 12px',
              borderRadius: '100px',
              fontWeight: 500,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-3)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Founders() {
  return (
    <section
      id="founders"
      style={{
        padding: '120px 40px',
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
              The Team
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
              Not a team of juniors. The founders.
            </h2>
            <p style={{ fontSize: '18px', maxWidth: '520px', color: 'var(--text-2)', lineHeight: 1.5 }}>
              When you hire Lever, you hire us. Not a team managed by us.
            </p>
          </motion.div>

          {/* Founder cards */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {founders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
