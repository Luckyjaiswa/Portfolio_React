// src/components/shared/SectionHeading.jsx
// Reusable section heading used by every major section.
// Renders a small monospace accent label, a large heading, and a thin accent underline.
//
// v2 FIX: switched from variant-name propagation to explicit initial/animate objects
// so the heading always animates correctly regardless of parent context.

import { motion } from 'framer-motion'

/**
 * SectionHeading
 * @param {string}  label        — small uppercase accent label (e.g. "// featured work")
 * @param {string}  heading      — the large section title (e.g. "Projects")
 * @param {object}  controls     — Framer Motion animation controls from useScrollAnimation
 * @param {object}  forwardedRef — ref for InView detection (triggers the controls)
 */
export default function SectionHeading({ label, heading, controls, forwardedRef }) {
  return (
    <motion.div
      ref={forwardedRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
        hidden:  { opacity: 0, y: 20 },
      }}
      className="mb-12 md:mb-16"
    >
      {/* Small monospace accent label above the heading */}
      <span
        className="font-mono text-sm tracking-widest uppercase"
        style={{ color: 'var(--color-accent)' }}
      >
        {label}
      </span>

      {/* Main section heading */}
      <h2
        className="mt-2 text-3xl md:text-4xl font-bold tracking-tight"
        style={{
          color:      'var(--color-heading)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {heading}
      </h2>

      {/* Short accent underline bar */}
      <div
        className="mt-3 h-0.5 w-12 rounded-full"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
    </motion.div>
  )
}
