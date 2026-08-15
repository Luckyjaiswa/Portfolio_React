// src/components/shared/ProjectCard.jsx
// Reusable card for displaying a single project.
// Features:
//   - Subtle hover-scale (1.03x) via Framer Motion
//   - Tech badge pills
//   - GitHub / Live Demo icon links
//   - NO flip/tilt/parallax effects
//
// FIX: Card now uses min-height so both cards in a row match each other's height
// FIX: Link anchors use flex so icons always render correctly
// FIX: Added a top accent line on hover for a more polished feel

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SkillBadge from './SkillBadge'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
      className="relative flex flex-col h-full rounded-xl p-6 md:p-7 group"
      style={{
        backgroundColor: 'var(--color-surface-2)',
        border:          '1px solid var(--color-border)',
        // No resting shadow — clean by default
      }}
    >
      {/* ─── Hover glow shadow (CSS group-hover, zero JS) ────────────────────── */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 20px 60px -12px rgba(0, 212, 255, 0.14)' }}
      />

      {/* ─── Thin accent top border on hover ─────────────────────────────────── */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      {/* ─── Header: title + period ──────────────────────────────────────────── */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3
          className="text-base md:text-lg font-semibold leading-snug flex-1"
          style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-mono)' }}
        >
          {project.title}
        </h3>
        <span
          className="shrink-0 text-xs font-mono px-2.5 py-1 rounded-md whitespace-nowrap"
          style={{
            color:           'var(--color-accent)',
            backgroundColor: 'rgba(0, 212, 255, 0.08)',
          }}
        >
          {project.period}
        </span>
      </div>

      {/* ─── Description ─────────────────────────────────────────────────────── */}
      <p
        className="text-sm leading-relaxed mb-5 flex-grow"
        style={{ color: 'var(--color-muted)' }}
      >
        {project.description}
      </p>

      {/* ─── Tech stack badges ───────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map(t => (
          <SkillBadge key={t} label={t} small />
        ))}
      </div>

      {/* ─── Links ───────────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-5 mt-auto pt-1">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            // flex + items-center ensures icon and text always align correctly
            className="inline-flex items-center gap-1.5 text-sm font-mono font-medium transition-colors duration-200"
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
            aria-label={`GitHub repo for ${project.title}`}
          >
            <FiGithub size={14} />
            <span>Source Code</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-mono font-medium transition-colors duration-200"
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
            aria-label={`Live demo for ${project.title}`}
          >
            <FiExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}
