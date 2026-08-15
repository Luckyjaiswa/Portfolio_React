// src/main.jsx
// Vite entry point — mounts React into the #root div in index.html.

import { StrictMode } from 'react'
import { createRoot }  from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
