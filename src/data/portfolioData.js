// src/data/portfolioData.js
// Central data repository for Lucky Jaiswal's portfolio.

export const personal = {
  name:      'Lucky Jaiswal',
  handle:    'lucky.dev',
  role:      'Full Stack Developer & SDE Aspirant',
  status:    'Open to Full-Stack & SDE Roles',
  version:   'v2.0.26',
  location:  'Lucknow, Uttar Pradesh, India',
  email:     'luckyjai98@gmail.com',
  phone:     '+91 9565312008',
  linkedin:  'https://www.linkedin.com/in/luckyjaiswal98',
  github:    'https://github.com/Luckyjaiswa',
  resumeUrl: '/resume.pdf',
  bio:       "I engineer production-grade full-stack web applications and bridge software with hardware through embedded systems and robotics. Proven track record of shipping 5+ apps, architecting scalable backends, and building 4-DOF automated robotic systems.",
}

// Stats metrics for ribbon cards
export const heroStats = [
  { value: '5+', label: 'Production Apps Built', subtext: 'React & Node.js ecosystem' },
  { value: '15+', label: 'Bugs Resolved Across Stack', subtext: 'GRASTech Internship' },
  { value: '4-DOF', label: 'Automated Robotic Arm', subtext: 'Embedded C++ & Arduino' },
  { value: '100%', label: 'Responsive & Performant UI', subtext: 'Accessible code standards' },
]

// Strings cycling through typing banner
export const heroRoles = [
  'Full Stack Developer',
  'React.js & Node.js Specialist',
  'Embedded Systems & Robotics Engineer',
  'SDE Aspirant · Seeking Internships',
]

// Quick core tech stack tags
export const heroTechTags = [
  'React.js',
  'Node.js',
  'JavaScript (ES6+)',
  'C/C++',
  'MySQL',
  'REST APIs',
  'Arduino / IoT',
  'Tailwind CSS',
]

// ─── Projects ──────────────────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    title:       'Smart Robotic System for Electronic Assembly',
    category:    'Embedded Systems / Robotics',
    period:      'Jul – Nov 2025',
    description: 'Engineered a high-precision 4-DOF robotic manipulator arm designed for automated pick-and-place component assembly. Integrated IR proximity sensors with PWM-driven servo motors for sub-second automated detection, eliminating manual intervention.',
    highlights:  [
      'Built custom kinematics & servo control routines in C/C++',
      'Integrated real-time IR sensor feedback for automated object placement',
      'Engineered stable mechanical gripper with repeatable 99%+ grip accuracy'
    ],
    tech:        ['Arduino Uno', 'C/C++', 'Servo Motors', 'IR Proximity Sensor', 'PWM Control'],
    github:      'https://github.com/Luckyjaiswa',
    demo:        null,
    featured:    true,
  },
  {
    id:          2,
    title:       'Smart Blood Donor Finder Platform',
    category:    'Full-Stack Web App',
    period:      'Jul – Aug 2026',
    description: 'A life-critical donor discovery web application featuring real-time geographic and blood-group search algorithms. Built with a responsive mobile-first UI connected to a normalized MySQL relational database with sub-100ms query times.',
    highlights:  [
      'Engineered real-time blood group search with multi-parameter filter queries',
      'Implemented secure donor onboarding dashboard with live availability toggle',
      'Optimized asset delivery for ultra-low latency on low-bandwidth networks'
    ],
    tech:        ['JavaScript', 'HTML5', 'CSS3', 'MySQL', 'REST APIs', 'Node.js'],
    github:      'https://github.com/Luckyjaiswa',
    demo:        null,
    featured:    true,
  },
  {
    id:          3,
    title:       'Gyan Uday — Educational Learning Hub',
    category:    'Web Application / Python',
    period:      'Apr – Jun 2026',
    description: 'An interactive e-learning platform architected to facilitate student curriculum tracking, digital resources distribution, and quiz assessments. Focused on intuitive student-teacher interaction workflows.',
    highlights:  [
      'Structured modular backend services for course content delivery',
      'Designed responsive dashboard interface with clean progress tracking',
      'Open-sourced repository with active community engagement on GitHub'
    ],
    tech:        ['Python', 'JavaScript', 'HTML5', 'CSS3', 'Git/GitHub'],
    github:      'https://github.com/Luckyjaiswa/Gyan_Uday_Project',
    demo:        null,
    featured:    true,
  },
  {
    id:          4,
    title:       'BBD Blog Post & Content Platform',
    category:    'Frontend Web Application',
    period:      'Jul 2026',
    description: 'Modern campus publishing portal built for article authoring, categorized tech blogs, and student community posts. Features dynamic DOM rendering, search filtering, and responsive glassmorphism UI.',
    highlights:  [
      'Created component-based architecture for blog feed & reading mode',
      'Implemented client-side category filtering and fast keyword search',
      'Designed dark-mode native interface with smooth transition animations'
    ],
    tech:        ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git', 'Responsive Design'],
    github:      'https://github.com/Luckyjaiswa/BBD_Blog_Post',
    demo:        null,
    featured:    true,
  },
]

// ─── Skills ────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Full-Stack & Languages',
    icon: '💻',
    skills: ['JavaScript (ES6+)', 'C/C++', 'Python', 'Core Java', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frontend Development',
    icon: '⚛️',
    skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Responsive UI', 'DOM Manipulation'],
  },
  {
    title: 'Backend & Databases',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MongoDB', 'CRUD Operations'],
  },
  {
    title: 'Embedded & Robotics',
    icon: '🤖',
    skills: ['Arduino Uno / C++', 'IR Sensors', 'Servo Motors', 'IoT Systems', 'Hardware Interfacing', 'Robotics'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git & GitHub', 'VS Code', 'Arduino IDE', 'Postman', 'Vite', 'Figma', 'Vercel'],
  },
]

// ─── Experience ────────────────────────────────────────────────────────────
export const experience = [
  {
    role:        'Full Stack Development Intern',
    company:     'GRASTech',
    location:    'Lucknow, India',
    period:      'Jun – Jul 2026',
    badge:       'Completed Internship',
    points: [
      'Built 5+ responsive full-stack web applications using React.js, Node.js, and MySQL from architectural scratch.',
      'Enhanced and stress-tested 5+ existing production features, slashing reported bugs via robust error-handling protocols.',
      'Resolved 15+ critical bugs across the frontend UI and backend API layers in record turnaround time.',
      'Collaborated daily with cross-functional engineering teams and senior mentors adhering to agile sprints and Git workflows.',
      'Designed RESTful API endpoints and integrated normalized relational schemas for live data manipulation.',
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
    status:      'Pursuing (2nd Year)',
    details:     'Focusing on Data Structures & Algorithms, Database Management Systems, Computer Networks, and Microcontroller Systems.',
  },
]

// ─── Certifications ────────────────────────────────────────────────────────
export const certifications = [
  {
    title:  'Full Stack Development Summer Internship',
    issuer: 'GRASTech',
    date:   '2026',
    icon:   '🏆',
  },
  {
    title:  'Frontend Developer Internship Certificate',
    issuer: 'Code Alpha',
    date:   'Jun 2026',
    icon:   '📜',
  },
  {
    title:  'Certificate of Appreciation — Soft Skills & Professional Dev',
    issuer: 'Learnovate Enterprises × BBD University',
    date:   'Apr 2026',
    icon:   '🌟',
  },
  {
    title:  'Blockchain Fundamentals Certification',
    issuer: 'GUVI Geek Networks × HCL',
    date:   'Feb 2026',
    icon:   '⛓️',
  },
  {
    title:  'Certificate of Excellence — Hack the Web 24-Hour Challenge',
    issuer: 'Unstop',
    date:   '2025',
    icon:   '⚡',
  },
]

