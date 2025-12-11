import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import ReviewCode from "./pages/ReviewCode.jsx"
import toast, { Toaster } from 'react-hot-toast'
import Feedback from './pages/Feedback.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className="min-h-screen bg-slate-900">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            padding: '16px 24px',
            borderRadius: '12px',
            fontWeight: '500',
            fontSize: '15px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          success: {
            duration: 3000,
            style: {
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#10b981',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#ef4444',
            },
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<ReviewCode />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  )
}



export default App
