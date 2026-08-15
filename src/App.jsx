// src/App.jsx
// Root component — composes all sections in order and manages global theme state.
//
// Theme strategy:
//   - Default: dark mode (data-theme="dark" on <html>)
//   - Persisted: localStorage so the preference survives page refreshes
//   - Toggle: via Navbar's toggleTheme prop

import { useState, useEffect } from 'react'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import Projects        from './components/Projects'
import Skills          from './components/Skills'
import Experience      from './components/Experience'
import Education       from './components/Education'
import Certifications  from './components/Certifications'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

/**
 * getInitialTheme
 * Reads the saved theme from localStorage.
 * Falls back to 'dark' if nothing is saved (dark is our default).
 */
function getInitialTheme() {
  try {
    return localStorage.getItem('portfolio-theme') ?? 'dark'
  } catch {
    return 'dark'
  }
}

export default function App() {
  // 'dark' | 'light'
  const [theme, setTheme] = useState(getInitialTheme)

  // ─── Apply theme to <html> and persist to localStorage ───────────────────
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch { /* storage unavailable in some environments */ }
  }, [theme])

  // ─── Toggle between dark and light ───────────────────────────────────────
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <>
      {/* Navbar receives theme + toggle so it can render the correct icon */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Section order matters — recruiter reads top to bottom */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
