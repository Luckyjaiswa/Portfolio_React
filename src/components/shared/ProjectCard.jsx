// src/components/shared/ProjectCard.jsx
// Modern feature-rich Project Card matching target portfolio design.

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="relative flex flex-col h-full rounded-2xl p-6 sm:p-7 glass-card group overflow-hidden"
    >
      {/* ─── Ambient Glow on Hover ─── */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ─── Category & Date Header ─── */}
      <div className="flex items-center justify-between gap-3 mb-3 min-w-0">
        <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 truncate min-w-0">
          {project.category || 'Engineering Project'}
        </span>
        <span className="text-xs font-mono text-slate-400 shrink-0">
          {project.period}
        </span>
      </div>

      {/* ─── Title ─── */}
      <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
        {project.title}
      </h3>

      {/* ─── Description ─── */}
      <p className="text-xs sm:text-sm leading-relaxed text-slate-300 mb-5">
        {project.description}
      </p>

      {/* ─── Key Highlights ─── */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="space-y-1.5 mb-5 pb-5 border-b border-slate-800/80">
          {project.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <FiCheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={12} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* ─── Tech Stack Badges ─── */}
      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-slate-900/90 border border-slate-800"
          >
            {t}
          </span>
        ))}
      </div>

      {/* ─── Action Buttons ─── */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 min-w-0">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1 truncate"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <FiGithub size={14} className="text-cyan-400 shrink-0" />
            <span>Source Code</span>
          </a>
        )}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold glow-button shrink-0 ml-2"
            aria-label={`Live demo for ${project.title}`}
          >
            <span>Live App</span>
            <FiExternalLink size={12} />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-slate-500 shrink-0 ml-auto">
            Repo Benchmark
          </span>
        )}
      </div>
    </motion.article>
  )
}

