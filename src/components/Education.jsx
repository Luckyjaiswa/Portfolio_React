// src/components/Education.jsx
// Modern Academic Background section matching target portfolio.

import { motion } from 'framer-motion'
import { FiBook, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { education } from '../data/portfolioData'

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Education() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          tag="&gt;_ ACADEMIC JOURNEY"
          titlePrimary="Education &amp;"
          titleAccent="Qualifications"
          subtitle="Foundational engineering studies, data structures, algorithm design, and core computer science fundamentals."
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col gap-6 max-w-4xl mx-auto"
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="rounded-2xl p-7 sm:p-8 glass-card border-l-4 border-l-cyan-400"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <FiBook size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                    <FiCalendar size={11} className="text-cyan-400" />
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.status}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 pl-1 mb-4">
                {edu.details}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pl-1 pt-3 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <FiMapPin size={12} /> {edu.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <FiCheckCircle size={12} className="text-emerald-400" /> B.Tech CSE (2023 – 2027)
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

