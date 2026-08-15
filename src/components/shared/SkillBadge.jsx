// src/components/shared/SkillBadge.jsx
// Tiny pill-shaped badge displaying a single skill label.
// Used in both the Skills section and on ProjectCard tech stacks.
//
// Props:
//   label {string}   — the skill name (e.g., "React.js")
//   small {boolean}  — when true, renders smaller text/padding (for project cards)

export default function SkillBadge({ label, small = false }) {
  return (
    <span
      className={`
        inline-flex items-center font-mono rounded-full border transition-colors duration-200
        ${small
          ? 'text-xs px-2.5 py-0.5'
          : 'text-xs md:text-sm px-3 py-1'}
      `}
      style={{
        color:           'var(--color-accent)',
        borderColor:     'rgba(0, 212, 255, 0.25)',
        backgroundColor: 'rgba(0, 212, 255, 0.06)',
      }}
    >
      {label}
    </span>
  )
}
