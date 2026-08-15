// src/components/Projects.jsx
// THE most important section — given the most visual weight.
// Renders a 2-column (desktop) responsive card grid.
// Cards stagger into view using scroll-triggered Framer Motion animations.

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import ProjectCard from './shared/ProjectCard'
import { projects } from '../data/portfolioData'

// cardVariants: each card fades up. Parent stagger triggers children sequentially.
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  // ref goes on SectionHeading; controls fires for both heading + card grid
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          label="// featured work"
          heading="Projects"
          controls={controls}
          forwardedRef={ref}
        />

        {/* ─── Card grid: 1-col mobile, 2-col desktop ─────────────────────────── */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
        >
          {projects.map(project => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
