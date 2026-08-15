// src/components/Skills.jsx
// Compact, scannable skills section.
// Skills grouped by category. Each skill is a <SkillBadge /> pill.
// FIX: category h3 was using --color-muted which was too dim; now uses --color-text.
// FIX: added a subtle card background per category group for better visual separation.

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import SkillBadge from './shared/SkillBadge'
import { skills } from '../data/portfolioData'

// Emoji icons per skill category
const categoryIcons = {
  Frontend:  '🖥',
  Backend:   '⚙️',
  Databases: '🗄️',
  Tools:     '🛠️',
}

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Skills() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          label="// what I use"
          heading="Skills"
          controls={controls}
          forwardedRef={ref}
        />

        {/* ─── 2-column grid of skill category groups ──────────────────────────── */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              // Each group sits in a subtle card for better visual grouping
              className="rounded-xl p-5 md:p-6"
              style={{
                backgroundColor: 'var(--color-surface-2)',
                border:          '1px solid var(--color-border)',
              }}
            >
              {/* Category header: emoji + label */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-lg" role="img" aria-hidden="true">
                  {categoryIcons[category] ?? '◆'}
                </span>
                {/* FIX: was --color-muted (too dim). Now uses --color-text for readable category names */}
                <h3
                  className="font-mono text-xs font-bold uppercase tracking-widest"
                  style={{ color: 'var(--color-text)' }}
                >
                  {category}
                </h3>
              </div>

              {/* Skill badge pills — wrap naturally to next line */}
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
