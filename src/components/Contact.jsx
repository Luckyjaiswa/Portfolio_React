// src/components/Contact.jsx
// Contact section with:
//   - A simple form (Name, Email, Message) with basic validation
//   - Direct contact info (email, phone, location)
//   - Social icon links (GitHub, LinkedIn, Email)
//
// FIX: Contact info icon containers now use inline-flex so SVG icons render correctly.
// FIX: Social link anchors use inline-flex to fix icon rendering.
// FIX: Placeholder text color explicitly set for cross-browser consistency.
// FIX: Input/textarea have explicit appearance reset for dark-mode browsers.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './shared/SectionHeading'
import { personal } from '../data/portfolioData'

// Direct contact info shown on the left column
const INFO_ITEMS = [
  { icon: <FiMail   size={15} />, label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: <FiPhone  size={15} />, label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}`    },
  { icon: <FiMapPin size={15} />, label: 'Location', value: personal.location, href: null                       },
]

// Social icon links at the bottom of the info column
const SOCIAL_LINKS = [
  { icon: <FiGithub   size={18} />, href: personal.github,              label: 'GitHub'   },
  { icon: <FiLinkedin size={18} />, href: personal.linkedin,            label: 'LinkedIn' },
  { icon: <FiMail     size={18} />, href: `mailto:${personal.email}`,   label: 'Email'    },
]

const INITIAL_FORM = { name: '', email: '', message: '' }

/**
 * validateForm — returns an object of field errors.
 * Empty object = valid form.
 */
function validateForm({ name, email, message }) {
  const errors = {}
  if (!name.trim())                                    errors.name    = 'Name is required.'
  if (!email.trim())                                   errors.email   = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email   = 'Enter a valid email.'
  if (!message.trim())                                 errors.message = 'Message cannot be empty.'
  else if (message.trim().length < 10)                 errors.message = 'Message is too short (min 10 chars).'
  return errors
}

const colVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

// Shared input/textarea style builder — keeps code DRY
function fieldStyle(hasError) {
  return {
    backgroundColor: 'var(--color-surface-2)',
    border:          hasError ? '1px solid #ef4444' : '1px solid var(--color-border)',
    color:           'var(--color-text)',
    // Prevent browser from applying its own dark-mode coloring
    colorScheme:     'dark',
  }
}

export default function Contact() {
  const { ref, controls } = useScrollAnimation()

  const [form,   setForm]   = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  // Update a single form field; clear its error immediately
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  // Form submit: validate → show errors OR mock-submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validateForm(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('sending')
    // TODO: swap setTimeout with a real Formspree/EmailJS fetch call
    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL_FORM)
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <SectionHeading
          label="// get in touch"
          heading="Contact"
          controls={controls}
          forwardedRef={ref}
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
        >

          {/* ═══════════════════════════════════════════════
              LEFT — contact info + social links
          ═══════════════════════════════════════════════ */}
          <motion.div variants={colVariants}>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
              Open to full-time SDE roles, internships, and interesting side-projects.
              Send me a message — I usually reply within 24 hours.
            </p>

            {/* Contact info rows */}
            <div className="flex flex-col gap-5 mb-8">
              {INFO_ITEMS.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  {/* FIX: inline-flex so SVG icon never collapses */}
                  <div
                    className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      color:           'var(--color-accent)',
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--color-muted)' }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'var(--color-text)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: 'var(--color-text)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  // FIX: inline-flex so icons always render correctly
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
                  style={{
                    color:           'var(--color-muted)',
                    backgroundColor: 'var(--color-surface-2)',
                    border:          '1px solid var(--color-border)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-accent)'
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--color-muted)'
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════
              RIGHT — contact form
          ═══════════════════════════════════════════════ */}
          <motion.div variants={colVariants}>
            {status === 'success' ? (
              <div
                className="rounded-xl p-8 text-center"
                style={{
                  backgroundColor: 'var(--color-surface-2)',
                  border:          '1px solid var(--color-border)',
                }}
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-mono font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                  Message sent!
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-5 text-sm font-mono underline underline-offset-4 transition-colors duration-200"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* ─── Name ─── */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono mb-2"
                    style={{ color: 'var(--color-muted)' }}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg text-sm font-mono outline-none transition-all duration-200"
                    style={fieldStyle(errors.name)}
                    onFocus={e  => { if (!errors.name) e.target.style.borderColor = 'var(--color-accent)' }}
                    onBlur={e   => { if (!errors.name) e.target.style.borderColor = 'var(--color-border)' }}
                  />
                  {errors.name && <p className="mt-1.5 text-xs" style={{ color: '#ef4444' }}>{errors.name}</p>}
                </div>

                {/* ─── Email ─── */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono mb-2"
                    style={{ color: 'var(--color-muted)' }}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg text-sm font-mono outline-none transition-all duration-200"
                    style={fieldStyle(errors.email)}
                    onFocus={e  => { if (!errors.email) e.target.style.borderColor = 'var(--color-accent)' }}
                    onBlur={e   => { if (!errors.email) e.target.style.borderColor = 'var(--color-border)' }}
                  />
                  {errors.email && <p className="mt-1.5 text-xs" style={{ color: '#ef4444' }}>{errors.email}</p>}
                </div>

                {/* ─── Message ─── */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono mb-2"
                    style={{ color: 'var(--color-muted)' }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 rounded-lg text-sm font-mono outline-none resize-none transition-all duration-200"
                    style={fieldStyle(errors.message)}
                    onFocus={e  => { if (!errors.message) e.target.style.borderColor = 'var(--color-accent)' }}
                    onBlur={e   => { if (!errors.message) e.target.style.borderColor = 'var(--color-border)' }}
                  />
                  {errors.message && <p className="mt-1.5 text-xs" style={{ color: '#ef4444' }}>{errors.message}</p>}
                </div>

                {/* ─── Submit ─── */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-mono font-semibold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color:           '#000',
                    opacity:         status === 'sending' ? 0.7 : 1,
                    cursor:          status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.backgroundColor = 'var(--color-accent-dim)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {status === 'sending' ? (
                    'Sending…'
                  ) : (
                    <>
                      <FiSend size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
