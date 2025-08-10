import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Friends from './Trip/Page1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Friends />
    
  </StrictMode>,
)
