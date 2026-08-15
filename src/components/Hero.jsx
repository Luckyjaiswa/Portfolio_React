// src/components/Hero.jsx
// The hero / above-the-fold section — highest visual priority.
// FIX NOTES (v2):
//   - Replaced Framer Motion variant propagation (which can silently fail) with
//     explicit per-element initial/animate objects + manual delays. This is more
//     reliable across all React StrictMode / Suspense setups.
//   - Social icon anchors now use inline-flex so SVG icons never collapse.
//   - Hero grid always renders text LEFT / code RIGHT on ≥ lg; stacks on mobile
//     with text on top (correct DOM reading order).

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { useTypingAnimation } from '../hooks/useTypingAnimation'
import { personal, heroRoles } from '../data/portfolioData'

// Helper: builds a fade-in-up animation object with a given delay.
// Using direct objects (not named variants) is the most reliable Framer Motion pattern.
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

/**
 * TerminalWindow — decorative IDE/terminal snippet beside the hero text.
 * aria-hidden so screen readers skip the decorative code.
 */
function TerminalWindow() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{
        border:          '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        boxShadow:       '0 25px 60px -15px rgba(0,0,0,0.5)',
      }}
      aria-hidden="true"
    >
      {/* ── macOS-style window chrome ── */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#28c840' }} />
        <span className="ml-3 text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
          developer.js
        </span>
      </div>

      {/* ── Syntax-highlighted code ── */}
      <pre
        className="px-6 py-5 text-sm leading-7 overflow-x-auto font-mono"
        style={{ color: 'var(--color-text)' }}
      >
        <code>
          <span style={{ color: '#bb86fc' }}>const </span>
          <span style={{ color: '#00d4ff' }}>developer</span>
          <span style={{ color: '#e2e8f0' }}> = {'{'}</span>{'\n'}

          <span style={{ color: '#e2e8f0' }}>{'  '}</span>
          <span style={{ color: '#f8c555' }}>name</span>
          <span style={{ color: '#e2e8f0' }}>:     </span>
          <span style={{ color: '#78d97e' }}>'Lucky Jaiswal'</span>
          <span style={{ color: '#e2e8f0' }}>,</span>{'\n'}

          <span style={{ color: '#e2e8f0' }}>{'  '}</span>
          <span style={{ color: '#f8c555' }}>role</span>
          <span style={{ color: '#e2e8f0' }}>:     </span>
          <span style={{ color: '#78d97e' }}>'SDE Aspirant'</span>
          <span style={{ color: '#e2e8f0' }}>,</span>{'\n'}

          <span style={{ color: '#e2e8f0' }}>{'  '}</span>
          <span style={{ color: '#f8c555' }}>stack</span>
          <span style={{ color: '#e2e8f0' }}>:    </span>
          <span style={{ color: '#e2e8f0' }}>['React', 'Node', 'C++'],</span>{'\n'}

          <span style={{ color: '#e2e8f0' }}>{'  '}</span>
          <span style={{ color: '#f8c555' }}>status</span>
          <span style={{ color: '#e2e8f0' }}>:   </span>
          <span style={{ color: '#78d97e' }}>'open to work'</span>
          <span style={{ color: '#e2e8f0' }}>,</span>{'\n'}

          <span style={{ color: '#e2e8f0' }}>{'  '}</span>
          <span style={{ color: '#f8c555' }}>coffee</span>
          <span style={{ color: '#e2e8f0' }}>:   </span>
          <span style={{ color: '#bb86fc' }}>true</span>{'\n'}

          <span style={{ color: '#e2e8f0' }}>{'}'}</span>
          <span style={{ color: '#e2e8f0' }}>;</span>
        </code>
      </pre>
    </div>
  )
}

/**
 * Hero — above-the-fold section.
 * Mobile: text stacks above the terminal window.
 * Desktop (≥ lg): text left, terminal window right, side by side.
 */
export default function Hero() {
  // Returns the currently-visible portion of the cycling role string
  const typedRole = useTypingAnimation(heroRoles, 80, 45, 2000)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* ─── Background radial glow — purely decorative ──────────────────────── */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 65%)',
          filter:     'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN — Text Content
              Each element animates independently with a staggered
              delay so there's no parent-variant dependency.
          ══════════════════════════════════════════════════════ */}
          <div>
            {/* ── "Hi, I'm" label ── */}
            <motion.p
              {...fadeUp(0.05)}
              className="font-mono text-sm mb-3 tracking-wide"
              style={{ color: 'var(--color-accent)' }}
            >
              Hi, I'm
            </motion.p>

            {/* ── Name ── */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-tight"
              style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-mono)' }}
            >
              Lucky Jaiswal
            </motion.h1>

            {/* ── Typing role with blinking cursor ── */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex items-center mb-6 min-h-[2.25rem]"
              aria-label={`Role: ${typedRole}`}
            >
              <span
                className="text-xl md:text-2xl font-mono font-medium"
                style={{ color: 'var(--color-accent)' }}
              >
                {typedRole}
              </span>
              {/* Blinking cursor — animated via CSS keyframe in index.css */}
              <span className="cursor-blink" aria-hidden="true" />
            </motion.div>

            {/* ── One-line honest bio ── */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-base md:text-lg leading-relaxed mb-9 max-w-lg"
              style={{ color: 'var(--color-muted)' }}
            >
              {personal.bio}
            </motion.p>

            {/* ── CTAs ── */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap items-center gap-5 mb-10"
            >
              {/* Primary — ONE button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-mono font-semibold text-sm transition-all duration-200"
                style={{ backgroundColor: 'var(--color-accent)', color: '#000' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-dim)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View My Work
                <FiArrowDown size={14} />
              </a>

              {/* Secondary — plain text link, not a competing button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 transition-colors duration-200"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
              >
                Download Resume
              </a>
            </motion.div>

            {/* ── Social icons ──
                Each <a> is inline-flex so the SVG icon is always centred
                and never collapses to zero height. ── */}
            <motion.div
              {...fadeUp(0.50)}
              className="flex items-center gap-5"
            >
              {[
                { href: personal.github,              icon: <FiGithub   size={20} />, label: 'GitHub'   },
                { href: personal.linkedin,            icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`,  icon: <FiMail     size={20} />, label: 'Email'    },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  // inline-flex ensures the SVG icon always has correct dimensions
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
                  style={{
                    color:           'var(--color-muted)',
                    backgroundColor: 'var(--color-surface-2)',
                    border:          '1px solid var(--color-border)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-accent)'
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--color-muted)'
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN — Terminal Window
          ══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
          >
            <TerminalWindow />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
