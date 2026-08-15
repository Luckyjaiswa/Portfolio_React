// src/components/Certifications.jsx
// Compact list of certifications.
// Rendered as small horizontal cards — not oversized, fits in a tight 2-column grid.
// Each card shows the certification title, issuer, and date.

import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { certifications } from '../data/portfolioData'

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export default function Certifications() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          label="// credentials"
          heading="Certifications"
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                backgroundColor: 'var(--color-surface-2)',
                border:          '1px solid var(--color-border)',
              }}
            >
              {/* Award icon */}
              <div
                className="mt-0.5 shrink-0 p-2 rounded-lg"
                style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
              >
                <FiAward size={15} style={{ color: 'var(--color-accent)' }} />
              </div>

              <div className="min-w-0">
                <h3
                  className="text-sm font-semibold leading-snug mb-1"
                  style={{ color: 'var(--color-heading)' }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-xs font-mono"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
