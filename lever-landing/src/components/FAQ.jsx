import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/variants'
import { faqItems } from '../data/faqItems'

const ease = [0.69, 0, 0, 1]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        onClick={onToggle}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            fontSize: '16px',
            fontWeight: 600,
            paddingRight: '16px',
            lineHeight: 1.4,
            fontFamily: 'Geist, sans-serif',
            color: isOpen ? 'var(--text-1)' : 'var(--text-2)',
            transition: 'color 0.2s cubic-bezier(0.69,0,0,1)',
          }}
        >
          {item.question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isOpen ? 'rgba(250,247,113,0.12)' : 'rgba(255,255,255,0.06)',
            border: isOpen ? '1px solid rgba(250,247,113,0.25)' : '1px solid rgba(255,255,255,0.1)',
            color: isOpen ? 'var(--accent)' : 'var(--text-4)',
            transition: 'background 0.2s cubic-bezier(0.69,0,0,1), border-color 0.2s cubic-bezier(0.69,0,0,1), color 0.2s cubic-bezier(0.69,0,0,1)',
          }}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-label={item.question}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                paddingBottom: '20px',
                paddingRight: 'clamp(0px, 5vw, 40px)',
                color: 'var(--text-3)',
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      id="faq"
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
              Questions
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--text-1)',
                letterSpacing: '-2px',
                fontFamily: '"Clash Grotesk", sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Last objections, answered
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            variants={fadeUp}
            style={{ maxWidth: '640px', margin: '0 auto' }}
            aria-label="Frequently asked questions"
          >
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {faqItems.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
