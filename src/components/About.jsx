// src/components/About.jsx
// "About Me" section — short, human, conversational.
// No buzzword-filled summary. Just an honest paragraph + education card.
// Fades in on scroll using the useScrollAnimation hook.

import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiBook } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { personal, education } from '../data/portfolioData'

// Animation variants for individual items
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function About() {
  // ref is attached to the section container; controls fires the animation when in view
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          label="// about me"
          heading="About"
          controls={controls}
          forwardedRef={ref}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ─── Bio paragraph ───────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: 'var(--color-text)' }}
            >
              {personal.bio}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              I'm currently in my second year of B.Tech CSE, balancing coursework with
              hands-on side projects. My interests span full-stack web development and
              embedded systems — I like the challenge of making software talk to hardware.
              When I'm not coding, I'm probably reading about distributed systems or
              contributing to open-source tools.
            </motion.p>

            {/* Location badge */}
            <motion.p
              variants={itemVariants}
              className="mt-6 flex items-center gap-2 text-sm font-mono"
              style={{ color: 'var(--color-muted)' }}
            >
              <FiMapPin size={14} style={{ color: 'var(--color-accent)' }} />
              {personal.location}
            </motion.p>
          </motion.div>

          {/* ─── Education card ──────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemVariants}
          >
            {education.map(edu => (
              <div
                key={edu.degree}
                className="rounded-xl p-7 md:p-8"
                style={{
                  backgroundColor: 'var(--color-surface-2)',
                  border:          '1px solid var(--color-border)',
                }}
              >
                {/* Icon + label */}
                <div
                  className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <FiBook size={13} />
                  <span>Education</span>
                </div>

                <h3
                  className="text-base md:text-lg font-semibold mb-1"
                  style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-mono)' }}
                >
                  {edu.degree}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: 'var(--color-text)' }}
                >
                  {edu.institution}
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={11} />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={11} />
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
