// src/data/portfolioData.js
// Central data file — all personal content lives here.
// Keeping data separate from UI makes it easy to update without touching components.

export const personal = {
  name:      'Lucky Jaiswal',
  title:     'Computer Science Undergraduate | Full Stack Developer | SDE Aspirant',
  location:  'Lucknow, Uttar Pradesh, India',
  email:     'luckyjai98@gmail.com',
  phone:     '+91 9565312008',
  linkedin:  'https://www.linkedin.com/in/luckyjaiswal98',
  github:    'https://github.com/luckyjaiswal98',   // ← replace with your actual GitHub URL
  bio:       "CS undergrad who likes building things that actually work — from robotic arms to web apps. I care about clean code, intuitive UIs, and solving real problems. Currently looking for SDE roles where I can keep learning and ship things people use.",
}

// Strings the hero typing animation cycles through
export const heroRoles = [
  'Full Stack Developer',
  'SDE Aspirant',
  'Embedded Systems Enthusiast',
]

// ─── Projects ──────────────────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    title:       'Smart Robotic System for Electronic Assembly',
    period:      'Jul – Nov 2025',
    description: 'A 4-DOF robotic arm for pick-and-place operations. Integrated an IR sensor and servo motors for automated object detection and precise, repeatable movement — no manual positioning required.',
    tech:        ['Arduino Uno', 'C/C++', 'Servo Motors', 'IR Sensor'],
    github:      'https://github.com/luckyjaiswal98',   // ← replace with actual repo
    demo:        null,   // set a URL string if you have a live demo
    featured:    true,
  },
  {
    id:          2,
    title:       'Smart Blood Donor Finder Platform',
    period:      'Jul – Aug 2026',
    description: 'Web platform for donor registration and blood-group search. Built a responsive UI backed by MySQL with real-time search and a clean donor dashboard — designed to work on low-end phones too.',
    tech:        ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    github:      'https://github.com/luckyjaiswal98',   // ← replace with actual repo
    demo:        null,
    featured:    true,
  },
]

// ─── Skills ────────────────────────────────────────────────────────────────
export const skills = {
  Frontend:  ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap'],
  Backend:   ['Node.js', 'Express.js', 'REST APIs', 'C/C++'],
  Databases: ['MySQL', 'MongoDB'],
  Tools:     ['Git', 'GitHub', 'VS Code', 'Arduino IDE', 'Figma', 'Postman'],
}

// ─── Experience ────────────────────────────────────────────────────────────
export const experience = [
  {
    role:        'Full Stack Development Intern',
    company:     'GRASTech',
    period:      '2026 · 1 month',
    points: [
      'Built 5+ responsive web apps using React.js and Node.js from scratch.',
      'Enhanced and tested 5+ existing features, cutting reported bugs by integrating proper API error handling.',
      'Resolved 15+ bugs across the frontend and backend codebase.',
      'Collaborated daily with 4+ team members and mentors in an agile workflow.',
      'Integrated MySQL databases with RESTful APIs for live data management.',
    ],
  },
]

// ─── Education ────────────────────────────────────────────────────────────
export const education = [
  {
    degree:      'B.Tech in Computer Science & Engineering',
    institution: 'Babu Banarasi Das University',
    location:    'Lucknow, Uttar Pradesh',
    period:      '2023 – 2027',
  },
]

// ─── Certifications ────────────────────────────────────────────────────────
export const certifications = [
  {
    title:  'Full Stack Development Summer Internship',
    issuer: 'GrasTech',
    date:   '2026',
  },
  {
    title:  'Frontend Developer Internship Certificate',
    issuer: 'Code Alpha',
    date:   'Jun 2026',
  },
  {
    title:  'Certificate of Appreciation — Soft Skills & Professional Development',
    issuer: 'Learnovate Enterprises × BBD University',
    date:   'Apr 2026',
  },
  {
    title:  'Blockchain Fundamentals Certification',
    issuer: 'GUVI Geek Networks × HCL',
    date:   'Feb 2026',
  },
  {
    title:  'Certificate of Excellence — Hack the Web 24-Hour Challenge',
    issuer: 'Unstop',
    date:   '2025',
  },
]
