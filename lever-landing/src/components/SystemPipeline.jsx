import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/variants'
import { pipelineNodes } from '../data/services'
import { ArrowRight } from 'lucide-react'

const ease = [0.69, 0, 0, 1]

function PipelineNode({ node, isLast }) {
  const isAccent = node.type === 'sage'

  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: '16px', height: '100%' }}>
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '28px 24px',
          borderRadius: '32px',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'var(--card-shadow)',
          minWidth: 0,
          transition: 'box-shadow 0.3s cubic-bezier(0.69,0,0,1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--card-shadow)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        }}
      >
        {/* Dot + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              flexShrink: 0,
              background: isAccent ? 'var(--leaf)' : 'rgba(255,255,255,0.5)',
              boxShadow: isAccent
                ? '0 0 10px rgba(110,197,49,0.6)'
                : '0 0 8px rgba(255,255,255,0.2)',
            }}
          />
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isAccent ? 'var(--leaf)' : 'var(--text-3)',
            }}
          >
            {node.label}
          </span>
        </div>

        <h3
          style={{
            fontFamily: '"Clash Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: 'var(--text-1)',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}
        >
          {node.title}
        </h3>

        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-3)',
            marginBottom: '16px',
          }}
        >
          {node.description}
        </p>

        {/* Tool tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
          {node.tools.map((tool) => (
            <span
              key={tool}
              style={{
                fontSize: '12px',
                padding: '4px 10px',
                borderRadius: '100px',
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--text-2)',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Arrow connector — desktop only */}
      {!isLast && (
        <div
          className="hidden lg:flex"
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            flexShrink: 0,
            marginTop: '8px',
          }}
          aria-hidden="true"
        >
          <ArrowRight size={22} style={{ color: 'rgba(110,197,49,0.35)' }} />
        </div>
      )}
    </div>
  )
}

export default function SystemPipeline() {
  return (
    <section
      id="system"
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
              The System
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--text-1)',
                letterSpacing: '-2px',
                marginBottom: '12px',
                maxWidth: '600px',
                fontFamily: '"Clash Grotesk", sans-serif',
              textTransform: 'uppercase',
              }}
            >
              One connected machine, not a menu of services
            </h2>
            <p style={{ fontSize: '18px', maxWidth: '520px', color: 'var(--text-2)', lineHeight: 1.5 }}>
              Four layers that feed into each other. Data fuels outreach. AI personalizes
              it. Reporting shows what's working.
            </p>
          </motion.div>

          {/* Pipeline nodes */}
          <div
            className="grid-4"
            style={{
              gap: '12px',
              marginBottom: '40px',
              alignItems: 'stretch',
            }}
          >
            {pipelineNodes.map((node, i) => (
              <PipelineNode
                key={node.id}
                node={node}
                isLast={i === pipelineNodes.length - 1}
              />
            ))}
          </div>

          {/* Legend */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--leaf)',
                }}
              />
              <span style={{ fontSize: '14px', color: 'var(--text-3)' }}>
                What agencies also offer
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.5)',
                }}
              />
              <span style={{ fontSize: '14px', color: 'var(--text-3)' }}>
                Only at Lever
              </span>
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
                Unique
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
