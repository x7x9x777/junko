import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import '@fontsource/rajdhani/400.css'; // Normal
import '@fontsource/rajdhani/500.css'; // Medium
import '@fontsource/rajdhani/600.css'; // Semi-Bold
import '@fontsource/rajdhani/700.css'; // Bold




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
