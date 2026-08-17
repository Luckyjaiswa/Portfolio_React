// src/components/shared/SectionHeading.jsx
// Modern signature section heading matching the target developer portfolio.

import { motion } from 'framer-motion'

/**
 * SectionHeading
 * @param {string}  tag          — badge pill tag (e.g. ">_ WHO I AM")
 * @param {string}  titlePrimary — first part of title (e.g. "Engineering Story & ")
 * @param {string}  titleAccent  — gradient highlight part of title (e.g. "Background")
 * @param {string}  subtitle     — explanatory sentence below the heading
 * @param {object}  controls     — Framer Motion animation controls
 * @param {object}  forwardedRef — ref for scroll in-view triggering
 */
export default function SectionHeading({
  tag,
  titlePrimary,
  titleAccent,
  subtitle,
  controls,
  forwardedRef,
}) {
  return (
    <motion.div
      ref={forwardedRef}
      initial={{ opacity: 0, y: 24 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        hidden:  { opacity: 0, y: 24 },
      }}
      className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
    >
      {/* ─── Glowing Terminal Badge Pill ─────────────────────────────────── */}
      {tag && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 text-xs font-mono font-medium tracking-wider uppercase glow-pill"
          style={{
            backgroundColor: 'rgba(0, 242, 254, 0.08)',
            color:           'var(--color-accent)',
            borderColor:     'rgba(0, 242, 254, 0.25)',
          }}
        >
          <span className="text-xs">{tag}</span>
        </div>
      )}

      {/* ─── Large Dual-Color Heading ─────────────────────────────────────── */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight font-heading leading-[1.25] sm:leading-[1.2] text-slate-100 mb-4"
      >
        {titlePrimary}{' '}
        {titleAccent && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            {titleAccent}
          </span>
        )}
      </h2>

      {/* ─── Subtitle Description ────────────────────────────────────────── */}
      {subtitle && (
        <p
          className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'var(--color-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

