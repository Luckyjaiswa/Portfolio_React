// src/components/Navbar.jsx
// Sticky navigation bar at the top of the page.
// Behavior:
//   - Transparent at the top, becomes solid/blurred after scrolling 50px
//   - Desktop: horizontal link list
//   - Mobile: hamburger button that opens a full-screen overlay menu
//   - Includes a dark/light theme toggle button

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiMoon, HiSun } from 'react-icons/hi'

// Navigation links — label shown to user, href is the section's ID
const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

/**
 * Navbar component
 * @param {string}   theme       — 'dark' | 'light', the current theme
 * @param {function} toggleTheme — called when the theme toggle button is clicked
 */
export default function Navbar({ theme, toggleTheme }) {
  const [scrolled,    setScrolled]    = useState(false)   // whether user has scrolled past 50px
  const [menuOpen,    setMenuOpen]    = useState(false)   // mobile menu visibility
  const [activeLink,  setActiveLink]  = useState('#home') // which nav link is currently "active"

  // ─── Add/remove scroll class ──────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ─── Close mobile menu when a link is tapped ──────────────────────────────
  const handleLinkClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  // ─── Lock body scroll while mobile menu is open ───────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? theme === 'dark'
              ? 'rgba(10, 14, 23, 0.92)'
              : 'rgba(248, 250, 252, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom:   scrolled ? '1px solid var(--color-border)' : 'none',
        }}
      >
        <nav className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">

          {/* ─── Logo / Name ───────────────────────────────────────────────── */}
          <a
            href="#home"
            className="font-mono font-bold text-lg tracking-tight transition-colors duration-200"
            style={{ color: 'var(--color-accent)' }}
            aria-label="Go to home"
          >
            lucky<span style={{ color: 'var(--color-text)' }}>.dev</span>
          </a>

          {/* ─── Desktop Links ─────────────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-mono text-sm transition-colors duration-200 relative group"
                  style={{
                    // Active = accent cyan, inactive = full text color (much more legible than muted)
                    color: activeLink === link.href
                      ? 'var(--color-accent)'
                      : 'var(--color-text)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = activeLink === link.href
                    ? 'var(--color-accent)'
                    : 'var(--color-text)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ─── Theme toggle + mobile hamburger ───────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--color-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--color-muted)' }}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile full-screen overlay menu ─────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
            exit={{    opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.25 } }}
                className="font-mono text-2xl font-medium transition-colors duration-200"
                style={{ color: 'var(--color-text)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
