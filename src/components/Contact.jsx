// src/components/Contact.jsx
// Modern Contact & Get in Touch section matching target portfolio.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCopy, FiCheck, FiMessageSquare } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { personal } from '../data/portfolioData'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { ref, controls } = useScrollAnimation()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) errs.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.'
    if (!form.message.trim()) errs.message = 'Please enter your message.'

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL_FORM)
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* ─── Top Callout Banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_-15px_rgba(0,242,254,0.12)]"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1.5">
              Have a project or opportunity in mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Let's discuss how I can help bring your web product or embedded system to life.
            </p>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold glow-button whitespace-nowrap"
          >
            <FiMessageSquare size={15} />
            <span>Start a Conversation</span>
          </a>
        </motion.div>

        <SectionHeading
          tag="&gt;_ GET IN TOUCH"
          titlePrimary="Let's Build Something"
          titleAccent="Great Together"
          subtitle="Have a project, full-stack opportunity, or internship position? Send a message or connect directly."
          controls={controls}
          forwardedRef={ref}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN — Contact Details Card
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 rounded-2xl p-7 sm:p-8 glass-card flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading text-white mb-6">
                Contact Details
              </h3>

              {/* Direct Email with Copy */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-4 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <FiMail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-400">Direct Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <FiCheck className="text-emerald-400" size={16} /> : <FiCopy size={16} />}
                </button>
              </div>

              {/* WhatsApp / Phone */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-4 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <FiPhone size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</p>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Chat &rarr;
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-mono text-white">{personal.location}</p>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-800/80">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 font-mono text-xs font-semibold text-slate-300 hover:text-white glass-card"
                >
                  <FiGithub size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 font-mono text-xs font-semibold text-slate-300 hover:text-white glass-card"
                >
                  <FiLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="mt-6 p-3 rounded-xl bg-[#060913] border border-cyan-500/20 text-center">
              <span className="text-xs font-mono text-cyan-400 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                Response Time: Typically &lt;2 hours
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN — Glassmorphic Contact Form
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 rounded-2xl p-7 sm:p-8 glass-card">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl mb-4 border border-emerald-500/30">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Thank you for reaching out. Your message has been received and I'll get back to you promptly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-cyan-400 glass-card hover:border-cyan-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-mono text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-mono text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. SDE Opportunity / Full-Stack Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-mono text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or position details..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-mono text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold glow-button flex items-center justify-center gap-2 mt-2 cursor-pointer"
                >
                  <FiSend size={15} />
                  <span>{status === 'sending' ? 'Transmitting Message...' : 'Send Message Now'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}

