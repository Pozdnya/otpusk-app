import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router'
import { BaseRouter } from './BaseRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  </StrictMode>,
)
