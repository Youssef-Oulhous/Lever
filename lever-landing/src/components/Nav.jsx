import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import newLogo from '../assets/mainLogo.png'

const navLinks = [
  { label: 'System', href: '#system' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

const ease = [0.69, 0, 0, 1]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(1,36,34,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'background 0.3s cubic-bezier(0.69,0,0,1), border-color 0.3s cubic-bezier(0.69,0,0,1)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Lever — home"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <img
            src={newLogo}
            alt="Lever"
            style={{
              height: '52px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              borderRadius: '8px',
              flexShrink: 0,
              mixBlendMode: 'screen',
            }}
          />
        </a>

        {/* Nav links — desktop */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-2)',
                textDecoration: 'none',
                transition: 'color 0.2s cubic-bezier(0.69,0,0,1)',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-1)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-2)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2, ease }}>
          <Link
            to="/book"
            style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#0B0C0A',
              borderRadius: '100px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'Geist, sans-serif',
            }}
          >
            Book a call
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  )
}
