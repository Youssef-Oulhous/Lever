import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/variants'

const stats = [
  {
    id: 1,
    value: 47,
    suffix: '+',
    label: 'Clients Served',
    sublabel: 'across SaaS, fintech, healthtech',
  },
  {
    id: 2,
    value: 99,
    suffix: '%+',
    label: 'Deliverability',
    sublabel: 'across all client accounts',
  },
  {
    id: 3,
    value: 12,
    suffix: '%',
    label: 'Avg reply rate',
    sublabel: 'industry average is 2-3%',
  },
  {
    id: 4,
    value: 14,
    suffix: ' days',
    label: 'First replies',
    sublabel: 'from system launch',
  },
]

function useCounter(end, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = progress < 1 ? 1 - Math.pow(1 - progress, 3) : 1
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, end, duration])

  return active ? count : 0
}

function StatItem({ stat }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCounter(stat.value, 2000, inView)

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      style={{ textAlign: 'center' }}
    >
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 500,
          marginBottom: '4px',
          fontSize: 'clamp(32px, 4vw, 48px)',
          color: 'var(--accent)',
          letterSpacing: '-0.02em',
        }}
      >
        {count}{stat.suffix}
      </div>
      <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px', color: 'var(--text-2)' }}>
        {stat.label}
      </p>
      <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>
        {stat.sublabel}
      </p>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section
      style={{
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid-stats"
          style={{
            gap: '32px',
          }}
        >
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
