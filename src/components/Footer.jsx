// src/components/Footer.jsx
// Modern Footer + Floating Quick Action Widget matching target portfolio.

import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiMessageCircle } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const QUICK_LINKS = [
  { label: 'home.jsx',      href: '#home' },
  { label: 'projects.py',   href: '#projects' },
  { label: 'about.json',    href: '#about' },
  { label: 'skills.ts',     href: '#skills' },
  { label: 'journey.sh',    href: '#experience' },
  { label: 'contact.sql',   href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="relative py-12 border-t border-slate-800/80 bg-[#050812]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">

          {/* ─── Top Row ─── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-md">
                &gt;_
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-sm tracking-tight text-white">
                  Lucky<span className="text-cyan-400">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Full Stack Developer &amp; SDE Aspirant
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-400" role="list">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Socials + Scroll to top */}
            <div className="flex items-center gap-3">
              {[
                { href: personal.github, icon: <FiGithub size={15} />, label: 'GitHub' },
                { href: personal.linkedin, icon: <FiLinkedin size={15} />, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: <FiMail size={15} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 glass-card"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}

              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 glass-card"
                aria-label="Scroll to top"
              >
                <FiArrowUp size={15} />
              </button>
            </div>
          </div>

          {/* ─── Bottom Copyright ─── */}
          <div className="pt-6 border-t border-slate-800/80 text-center text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© {year} Lucky Jaiswal. All rights reserved.</span>
            <span className="text-slate-400">
              Engineered with <span className="text-cyan-400">React</span> + <span className="text-cyan-400">Vite</span> + <span className="text-cyan-400">Tailwind CSS</span>
            </span>
          </div>

        </div>
      </footer>

      {/* ─── Floating Quick Action Button in Bottom Right ─── */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(0,242,254,0.5)] hover:scale-110 active:scale-95 transition-transform"
        aria-label="Quick Message"
        title="Send a quick message"
      >
        <FiMessageCircle size={22} className="fill-current" />
      </a>
    </>
  )
}

