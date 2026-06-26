import { useState, useEffect } from 'react'
import { LandingPage } from './onereach'
import { SupportPage } from './pages/SupportPage'
import './App.css'

function App() {
  const [page, setPage] = useState<'landing' | 'support'>('landing')

  /* Simple path-based routing without react-router-dom */
  useEffect(() => {
    const check = () => {
      const path = window.location.pathname
      if (path === '/support' || path === '/support/') {
        setPage('support')
        document.title = 'Support — OneReach'
      } else {
        setPage('landing')
        document.title = 'OneReach – AI Sales Automation'
      }
    }
    check()
    window.addEventListener('popstate', check)
    return () => window.removeEventListener('popstate', check)
  }, [])

  if (page === 'support') return <SupportPage />

  return (
    <LandingPage
      onGetStarted={() => {
        window.location.href = 'https://app.onereach.app/register'
      }}
    />
  )
}

export default App
