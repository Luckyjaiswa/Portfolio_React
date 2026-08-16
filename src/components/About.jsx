// src/components/About.jsx
// Modern Engineering Story & Background section matching target portfolio.

import { motion } from 'framer-motion'
import { FiMapPin, FiCpu, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { personal, education } from '../data/portfolioData'

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          tag="&gt;_ WHO I AM"
          titlePrimary="Engineering Story &amp;"
          titleAccent="Background"
          subtitle="From low-level microcontrollers and servo kinematics to high-performance full-stack web applications."
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* ══════════════════════════════════════════════════════
              LEFT CARD — Narrative & Bio
          ══════════════════════════════════════════════════════ */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-7 rounded-2xl p-7 sm:p-8 glass-card flex flex-col justify-between"
          >
            <div>
              {/* Header with Avatar & Greeting */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-mono font-bold text-slate-950 text-xl shadow-lg shrink-0">
                  LJ
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading flex items-center gap-2">
                    Hey, I'm Lucky <span className="text-xl">👋</span>
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 flex items-center gap-1 mt-0.5">
                    <FiMapPin size={12} />
                    {personal.location}
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
                <p>
                  I'm a Computer Science undergraduate at <strong className="text-white font-semibold">Babu Banarasi Das University, Lucknow</strong>, obsessed with building systems that solve practical real-world problems.
                </p>
                <p>
                  During my full-stack internship at <strong className="text-cyan-400 font-semibold">GRASTech</strong>, I engineered and shipped 5+ responsive production applications using <span className="text-white">React.js</span>, <span className="text-white">Node.js</span>, and <span className="text-white">MySQL</span>, while squashing over 15+ complex production bugs.
                </p>
                <p>
                  Outside of pure web software, I bridge the physical and digital worlds by designing hardware interfaces — notably engineering a <strong className="text-cyan-400 font-semibold">4-DOF robotic arm</strong> with IR sensor object detection and PWM servo kinematics from scratch.
                </p>
              </div>
            </div>

            {/* Bottom Key Pillars */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <FiCode className="mx-auto text-cyan-400 mb-1" size={18} />
                <span className="text-[11px] font-mono text-slate-300 block font-semibold">Full Stack</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <FiCpu className="mx-auto text-teal-400 mb-1" size={18} />
                <span className="text-[11px] font-mono text-slate-300 block font-semibold">Embedded</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <FiLayers className="mx-auto text-purple-400 mb-1" size={18} />
                <span className="text-[11px] font-mono text-slate-300 block font-semibold">Robotics</span>
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════
              RIGHT CARD — Education & Focus Timeline
          ══════════════════════════════════════════════════════ */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-5 rounded-2xl p-7 sm:p-8 glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                  <span className="text-cyan-400">&gt;_</span> Education Timeline
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active Student
                </span>
              </div>

              {/* Education Block */}
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-7 pb-6 border-l-2 border-cyan-500/30 last:border-l-0 last:pb-0">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#060913] border-2 border-cyan-400" />
                  
                  <span className="text-xs font-mono text-cyan-400 block mb-1">
                    {edu.period} • {edu.location}
                  </span>
                  <h4 className="text-base font-bold text-white mb-1 font-heading">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-medium text-slate-300 mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Skills Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-cyan-400 shrink-0" size={13} /> React.js &amp; Node.js
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-cyan-400 shrink-0" size={13} /> C/C++ &amp; Arduino
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-cyan-400 shrink-0" size={13} /> MySQL &amp; REST APIs
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-cyan-400 shrink-0" size={13} /> Kinematics &amp; IoT
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}


