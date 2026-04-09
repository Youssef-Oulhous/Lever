import newLogo from '../assets/mainLogo.png'

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '#' },
      { label: 'System', href: '#system' },
      { label: 'Results', href: '#results' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Email', href: 'mailto:anasfadili65@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fadilianas/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@AnasFadili-f2f' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
    ],
  },
]

const linkStyle = {
  fontSize: '14px',
  color: 'var(--text-3)',
  textDecoration: 'none',
  lineHeight: 1,
  transition: 'color 0.2s',
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg)',
        padding: 'clamp(48px, 7vw, 80px) clamp(20px, 5vw, 40px) clamp(32px, 5vw, 48px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top row — logo + columns */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '48px', marginBottom: '56px' }}>

          {/* Brand block */}
          <div>
            <a
              href="#"
              aria-label="Lever — home"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}
            >
              <img
                src={newLogo}
                alt="Lever"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', flexShrink: 0, borderRadius: '8px', mixBlendMode: 'screen' }}
              />
            </a>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.65,
                color: 'var(--text-3)',
                maxWidth: '260px',
                margin: 0,
              }}
            >
              We engineer outbound systems that generate pipeline — fully built on your
              infrastructure. You own everything.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-1)',
                  marginBottom: '20px',
                  letterSpacing: '0.01em',
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={linkStyle}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row — copyright */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '13px', color: 'var(--text-4)' }}>
            © 2026 Lever. All rights reserved.
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-4)' }}>
            Built for B2B teams who want pipeline, not promises.
          </span>
        </div>
      </div>
    </footer>
  )
}
