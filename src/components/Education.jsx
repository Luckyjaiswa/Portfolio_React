// src/components/Education.jsx
// Standalone Education section (also embedded in About, but kept separate
// for scroll-navigation targets if needed). Shows a timeline-style layout.

import { motion } from 'framer-motion'
import { FiBook, FiMapPin, FiCalendar } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { education } from '../data/portfolioData'

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Education() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          label="// background"
          heading="Education"
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col gap-5"
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="rounded-xl p-6 md:p-7"
              style={{
                backgroundColor: 'var(--color-surface-2)',
                border:          '1px solid var(--color-border)',
                borderLeft:      '3px solid var(--color-accent)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FiBook size={14} style={{ color: 'var(--color-accent)' }} />
                <h3
                  className="text-base md:text-lg font-semibold"
                  style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-mono)' }}
                >
                  {edu.degree}
                </h3>
              </div>
              <p className="text-sm mb-3 pl-5" style={{ color: 'var(--color-text)' }}>
                {edu.institution}
              </p>
              <div
                className="flex flex-wrap gap-4 text-xs font-mono pl-5"
                style={{ color: 'var(--color-muted)' }}
              >
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={11} /> {edu.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={11} /> {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
