// src/components/Footer.jsx
// Minimal footer: copyright text, quick nav links, and social icons.
// No heavy content — just enough to feel complete.

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const QUICK_LINKS = [
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

const SOCIAL = [
  { icon: <FiGithub   size={16} />, href: personal.github,              label: 'GitHub'   },
  { icon: <FiLinkedin size={16} />, href: personal.linkedin,            label: 'LinkedIn' },
  { icon: <FiMail     size={16} />, href: `mailto:${personal.email}`,   label: 'Email'    },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 mt-0"
      style={{
        borderTop:       '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* ─── Top row: logo + quick links ─────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono font-bold text-lg"
            style={{ color: 'var(--color-accent)' }}
          >
            lucky<span style={{ color: 'var(--color-muted)' }}>.dev</span>
          </a>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-mono transition-colors duration-200"
                    style={{ color: 'var(--color-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="transition-all duration-200"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.transform = 'translateY(0)' }}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ─── Bottom: copyright ────────────────────────────────────────────── */}
        <div
          className="pt-6 text-center text-xs font-mono"
          style={{
            borderTop: '1px solid var(--color-border)',
            color:     'var(--color-muted)',
          }}
        >
          © {year} Lucky Jaiswal · Built with React + Vite + Tailwind CSS
        </div>

      </div>
    </footer>
  )
}
