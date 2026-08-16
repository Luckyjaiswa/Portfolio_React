// src/components/Navbar.jsx
// Floating glassmorphism navigation bar matching target portfolio.

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { FiDownload, FiSend } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'home.jsx',      icon: '⚛️', href: '#home' },
  { label: 'projects.py',   icon: '⚡', href: '#projects' },
  { label: 'about.json',    icon: '👤', href: '#about' },
  { label: 'skills.ts',     icon: '🛠️', href: '#skills' },
  { label: 'journey.sh',    icon: '🚀', href: '#experience' },
  { label: 'education.md',  icon: '🎓', href: '#education' },
  { label: 'contact.sql',   icon: '📬', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 transition-all duration-300">
        <nav
          className={`max-w-6xl mx-auto px-4 sm:px-6 py-2.5 rounded-2xl flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'bg-[#080d1a]/85 backdrop-blur-xl border border-sky-500/20 shadow-[0_10px_35px_-10px_rgba(0,242,254,0.15)]'
              : 'bg-[#0a0f1e]/60 backdrop-blur-md border border-slate-800/80 shadow-lg'
          }`}
          style={{
            backgroundColor: theme === 'light' 
              ? (scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.75)')
              : undefined,
            borderColor: theme === 'light' ? 'rgba(203, 213, 225, 0.8)' : undefined,
          }}
        >
          {/* ─── Logo + Live Status ─────────────────────────────────────────── */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-md group-hover:scale-105 transition-transform">
              &gt;_
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors"
                style={{ color: 'var(--color-heading)' }}
              >
                Lucky<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5"
                style={{ color: 'var(--color-muted)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
                {personal.version} status: ready
              </span>
            </div>
          </a>

          {/* ─── Desktop Links (Code Tabs) ─────────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-1 bg-slate-950/40 p-1 rounded-xl border border-slate-800/50" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                    activeLink === link.href
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,242,254,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  style={{
                    color: activeLink === link.href ? 'var(--color-accent)' : 'var(--color-text)',
                  }}
                >
                  <span className="text-xs">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* ─── Right Action Buttons ───────────────────────────────────────── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume button */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 transition-all duration-200"
              style={{
                color: 'var(--color-text)',
                backgroundColor: 'var(--color-surface-2)',
                borderColor: 'var(--color-border)',
              }}
            >
              <FiDownload size={12} className="text-cyan-400" />
              <span>Resume.pdf</span>
            </a>

            {/* Glowing Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono font-bold glow-button"
            >
              <FiSend size={12} />
              <span>Let's Talk</span>
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-800 border border-slate-700/60 transition-all duration-200"
              style={{
                color: 'var(--color-muted)',
                backgroundColor: 'var(--color-surface-2)',
                borderColor: 'var(--color-border)',
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-slate-700/60 transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Open navigation menu"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile Overlay Menu ─────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 lg:hidden px-6"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            <div className="w-full max-w-sm flex flex-col gap-3">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.25 } }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm font-medium glass-card"
                  style={{ color: 'var(--color-text)' }}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </motion.a>
              ))}

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-xl font-mono text-sm font-semibold glow-button"
              >
                <FiDownload size={14} />
                <span>Download Resume.pdf</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

