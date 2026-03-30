import leverLogo from '../assets/leverLogo.jpeg'

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
      { label: 'Email', href: 'mailto:hello@lever-agency.com' },
      { label: 'X / Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'YouTube', href: '#' },
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
                src={leverLogo}
                alt=""
                style={{ height: '36px', width: '36px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: '"Clash Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  letterSpacing: '-0.5px',
                  color: 'var(--text-1)',
                  textTransform: 'uppercase',
                }}
              >
                Lever
              </span>
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
