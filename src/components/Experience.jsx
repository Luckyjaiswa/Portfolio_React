// src/components/Experience.jsx
// Modern Work Experience & Milestones timeline matching target portfolio.

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { experience } from '../data/portfolioData'

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Experience() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          tag="&gt;_ JOURNEY &amp; MILESTONES"
          titlePrimary="Work Experience &amp;"
          titleAccent="Milestones"
          subtitle="Hands-on software development internships, production feature delivery, and engineering sprints."
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col gap-6 max-w-4xl mx-auto"
        >
          {experience.map((job, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative rounded-2xl p-7 sm:p-8 glass-card border-l-4 border-l-cyan-400 group"
            >
              {/* ─── Role + Company + Badges ─── */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <FiBriefcase className="text-cyan-400" size={18} />
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {job.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                    <span className="text-cyan-400 font-semibold">{job.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <FiMapPin size={11} /> {job.location}
                    </span>
                  </div>
                </div>

                {/* Period & Status Badges */}
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    <FiCalendar size={12} className="text-cyan-400" />
                    {job.period}
                  </span>
                  {job.badge && (
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {job.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* ─── Bullet Points with Green/Cyan Checkmarks ─── */}
              <ul className="space-y-3">
                {job.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                    <FiCheckCircle className="text-cyan-400 shrink-0 mt-1" size={14} />
                    <span>{point}</span>
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

