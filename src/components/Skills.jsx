// src/components/Skills.jsx
// Modern Technical Matrix matching target portfolio.

import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { skillCategories } from '../data/portfolioData'

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Skills() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          tag="&gt;_ TECHNICAL MATRIX"
          titlePrimary="Skills &amp;"
          titleAccent="Technology Stack"
          subtitle="Tools, languages, libraries, and hardware interfaces I use to engineer robust software and embedded systems."
          controls={controls}
          forwardedRef={ref}
        />

        {/* ─── 3-column & 2-column Grid of Skill Matrix Cards ─── */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className={`rounded-2xl p-6 glass-card flex flex-col justify-between ${
                idx >= 3 ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                  <span className="text-xl p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    {cat.icon}
                  </span>
                  <h3 className="font-mono text-sm font-bold text-white tracking-wide">
                    &gt;_ {cat.title}
                  </h3>
                </div>

                {/* Skills Grid/Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-200 bg-[#070b16]/90 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
                    >
                      <FiCheckCircle className="text-cyan-400 shrink-0" size={12} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

