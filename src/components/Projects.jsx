// src/components/Projects.jsx
// Modern Featured Projects showcase matching target portfolio.

import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import ProjectCard from './shared/ProjectCard'
import { projects, personal } from '../data/portfolioData'

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          tag="&gt;_ FEATURED BUILDS"
          titlePrimary="Featured Projects &amp;"
          titleAccent="Case Studies"
          subtitle="Real-world software architectures, embedded hardware integrations, and full-stack web platforms."
          controls={controls}
          forwardedRef={ref}
        />

        {/* ─── Project Cards Grid ─── */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          {projects.map(project => (
            <motion.div key={project.id} variants={cardVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Bottom CTA to explore all repos on GitHub ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={cardVariants}
          className="flex justify-center"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-semibold text-slate-200 hover:text-white glass-card hover:border-cyan-500/50"
          >
            <FiGithub className="text-cyan-400" size={16} />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

