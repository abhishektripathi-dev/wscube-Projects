import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home } from './components/pages/Home.jsx'
import Header from './components/common/Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* Calling */}
    {/* Home */}
    {/* Comment  */}
    <Header/>
    <Home/>
  </StrictMode>,
)
