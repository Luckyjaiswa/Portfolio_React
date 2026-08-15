// vite.config.js
// Vite build tool configuration.
// We register the @tailwindcss/vite plugin so Tailwind CSS v4 works out of the box.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // Tailwind CSS v4 Vite plugin — no separate tailwind.config.js needed
  ],
})
