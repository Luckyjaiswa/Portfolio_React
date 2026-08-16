// src/components/Certifications.jsx
// Modern Credentials & Certifications grid matching target portfolio.

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
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Certifications() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          tag="&gt;_ CREDENTIALS"
          titlePrimary="Verified Certifications &amp;"
          titleAccent="Honors"
          subtitle="Accredited technical internships, engineering achievements, and development awards."
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-start gap-4 p-5 rounded-2xl glass-card group hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Icon badge */}
              <div className="mt-0.5 shrink-0 w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-lg border border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-sm">
                {cert.icon || <FiAward className="text-cyan-400" size={18} />}
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1 font-heading">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-medium mb-0.5">
                  {cert.issuer}
                </p>
                <span className="text-[11px] font-mono text-slate-400">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

