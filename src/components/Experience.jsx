// src/components/Experience.jsx
// Work experience section displayed as a clean vertical timeline.
// Each role sits in its own card with an accent-colored left border.
// Bullet points use a custom accent dot instead of default browser bullets.

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { experience } from '../data/portfolioData'

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Experience() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          label="// where I've worked"
          heading="Experience"
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {experience.map((job, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative rounded-xl p-6 md:p-7"
              style={{
                backgroundColor: 'var(--color-surface-2)',
                border:          '1px solid var(--color-border)',
                // Accent left border — the "timeline" feel
                borderLeft:      '3px solid var(--color-accent)',
              }}
            >
              {/* ─── Role + company ──────────────────────────────────────────── */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FiBriefcase size={14} style={{ color: 'var(--color-accent)' }} />
                    <h3
                      className="text-base md:text-lg font-semibold"
                      style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-mono)' }}
                    >
                      {job.role}
                    </h3>
                  </div>
                  <p
                    className="text-sm font-medium pl-5"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {job.company}
                  </p>
                </div>

                {/* Period badge */}
                <span
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    color:           'var(--color-muted)',
                    backgroundColor: 'rgba(100, 116, 139, 0.1)',
                  }}
                >
                  <FiCalendar size={11} />
                  {job.period}
                </span>
              </div>

              {/* ─── Bullet points ───────────────────────────────────────────── */}
              <ul className="flex flex-col gap-2 pl-0">
                {job.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {/* Custom accent bullet */}
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
