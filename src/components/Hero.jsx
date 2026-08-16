// src/components/Hero.jsx
// Modern high-impact developer hero matching target portfolio aesthetic.

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { useTypingAnimation } from '../hooks/useTypingAnimation'
import { personal, heroRoles, heroTechTags, heroStats } from '../data/portfolioData'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

/**
 * Modern macOS IDE Terminal Window
 */
function TerminalWindow() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden glass-card shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_-5px_rgba(0,242,254,0.15)] relative group border border-slate-700/60 hover:border-cyan-500/40 transition-all duration-300"
      aria-hidden="true"
    >
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

      {/* ─── Window Chrome Header ─── */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-[#080d1a]/95 border-b border-slate-800/80"
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block shadow-sm" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            &gt;_ lucky_profile.ts — bash
          </span>
        </div>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          BUILD OK
        </span>
      </div>

      {/* ─── Syntax-Highlighted Code ─── */}
      <pre className="p-5 sm:p-6 text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto font-mono text-slate-200">
        <code>
          <span className="text-purple-400">import</span> {'{ '}
          <span className="text-cyan-400">FullStackApp</span>, <span className="text-cyan-400">Robotics</span>, <span className="text-cyan-400">IoT</span>
          {' }'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'@lucky/core'</span>;{'\n\n'}

          <span className="text-slate-500">// Initialize Developer Instance</span>{'\n'}
          <span className="text-purple-400">const</span> <span className="text-yellow-400">engineer</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">SoftwareEngineer</span>({'{'}{'\n'}
          {'  '}<span className="text-slate-300">name</span>: <span className="text-emerald-300">'Lucky Jaiswal'</span>,{'\n'}
          {'  '}<span className="text-slate-300">location</span>: <span className="text-emerald-300">'Lucknow, IN'</span>,{'\n'}
          {'  '}<span className="text-slate-300">education</span>: <span className="text-emerald-300">'BBD University (CSE 2027)'</span>,{'\n'}
          {'  '}<span className="text-slate-300">internship</span>: <span className="text-emerald-300">'GRASTech (5+ Apps Shipped)'</span>,{'\n'}
          {'  '}<span className="text-slate-300">coreTech</span>: [<span className="text-emerald-300">'React.js'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'C/C++'</span>, <span className="text-emerald-300">'Arduino'</span>],{'\n'}
          {'  '}<span className="text-slate-300">status</span>: <span className="text-cyan-300">'Open to SDE & Full-Stack Internships'</span>{'\n'}
          {'}'});
        </code>
      </pre>

      {/* ─── Bottom Status Bar ─── */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-[#080d1a]/90 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-cyan-400">
          ✨ Ready for deployment
        </span>
        <span className="text-emerald-400 font-semibold">
          100% Shipped
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const typedRole = useTypingAnimation(heroRoles, 70, 40, 2200)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-36 pb-16 overflow-hidden cyber-grid-bg"
    >
      {/* ─── Ambient Radial Glows ─── */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,242,254,0.12) 0%, transparent 70%)',
          filter:     'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)',
          filter:     'blur(70px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full z-10">

        {/* ─── Status Pill Top Banner ─── */}
        <motion.div {...fadeUp(0.05)} className="mb-7 flex">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card glow-pill text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="text-slate-300 flex items-center gap-1.5">
              🏆 <span className="text-slate-100 font-medium">{personal.status}</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400">{personal.location}</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN — Typography & Bio
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7">

            {/* ─── Massive Headline with Enhanced Line Height & Contrast ─── */}
            <motion.h1
              {...fadeUp(0.12)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-heading tracking-tight leading-[1.25] sm:leading-[1.22] md:leading-[1.18] text-slate-100 mb-6"
            >
              Full-Stack Developer &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                SDE Aspirant
              </span>{' '}
              building robust web &amp; embedded systems
            </motion.h1>

            {/* ─── Dynamic Typing Subheading ─── */}
            <motion.div
              {...fadeUp(0.20)}
              className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-mono font-medium mb-6"
            >
              <span className="text-cyan-400">&gt;</span>
              <span className="text-slate-100 font-bold">Lucky Jaiswal</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400 font-semibold">{typedRole}</span>
              <span className="cursor-blink" aria-hidden="true" />
            </motion.div>

            {/* ─── High-impact Bio with Softer Contrast ─── */}
            <motion.p
              {...fadeUp(0.28)}
              className="text-sm sm:text-base leading-relaxed text-slate-300 mb-8 max-w-xl"
            >
              Built <strong className="text-cyan-400 font-semibold">5+ production web apps</strong> during my internship at <span className="text-slate-100 font-semibold">GRASTech</span>, resolved 15+ bugs across the stack, and engineered a <strong className="text-cyan-400 font-semibold">4-DOF robotic arm</strong> for automated assembly.
            </motion.p>

            {/* ─── Tech Pill Tags Row ─── */}
            <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-2 mb-10">
              {heroTechTags.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* ─── Action Buttons & Socials (Lift & Glow Hover Polish) ─── */}
            <motion.div {...fadeUp(0.42)} className="flex flex-wrap items-center gap-4 mb-6">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono font-bold text-xs sm:text-sm glow-button transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,242,254,0.6)] active:translate-y-0 cursor-pointer"
              >
                <span>View Featured Builds</span>
                <FiArrowDown size={14} className="shrink-0" />
              </a>

              {/* Resume Download CTA */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold text-slate-200 hover:text-white glass-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.25)] active:translate-y-0"
              >
                <FiDownload size={14} className="text-cyan-400 shrink-0" />
                <span>Resume.pdf</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pl-1">
                {[
                  { href: personal.github, icon: <FiGithub size={18} />, label: 'GitHub' },
                  { href: personal.linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
                  { href: `mailto:${personal.email}`, icon: <FiMail size={18} />, label: 'Email' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 glass-card transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN — Terminal Mockup Window
          ══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <TerminalWindow />
          </motion.div>

        </div>

        {/* ══════════════════════════════════════════════════════
            STATS RIBBON UNDER HERO
        ══════════════════════════════════════════════════════ */}
        <motion.div
          {...fadeUp(0.50)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80"
        >
          {heroStats.map(stat => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl glass-card text-center sm:text-left flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-1">
                {stat.value}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </p>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

