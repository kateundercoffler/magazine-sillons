import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Accueil from './pages/Accueil.tsx'
import Dossier from './pages/Dossier.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/dossier" element={<Dossier />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
