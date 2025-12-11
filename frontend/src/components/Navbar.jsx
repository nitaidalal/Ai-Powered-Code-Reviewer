import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

//ai powered code reviewer navbar component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-slate-800/95 border-b border-slate-700/50 shadow-xl sticky top-0  backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                CodeShield
              </span>
              <span className="ml-2 text-xs bg-linear-to-r from-blue-500 to-purple-600 text-white px-2.5 py-1 rounded-full font-semibold ">
                AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive('/') 
                  ? 'text-white bg-slate-700 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive('/about') 
                  ? 'text-white bg-slate-700 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              About
            </Link>
            <Link
              to="/feedback"
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive('/feedback') 
                  ? 'text-white bg-slate-700 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Feedback
            </Link>
            <Link
              to="/review"
              className={`ml-4 px-5 py-2 rounded-lg font-semibold transition-all shadow-lg transform ${
                isActive('/review')
                  ? 'bg-linear-to-r from-blue-600 to-purple-700 text-white scale-105 shadow-xl'
                  : 'bg-linear-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:scale-105'
              }`}
            >
              Try Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700/50 py-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/') 
                    ? 'text-white bg-slate-700 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/about') 
                    ? 'text-white bg-slate-700 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/feedback"
                className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/feedback') 
                    ? 'text-white bg-slate-700 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Feedback
              </Link>
              <Link
                to="/review"
                className={`px-4 py-3 rounded-lg font-semibold transition-all shadow-lg text-center ${
                  isActive('/review')
                    ? 'bg-linear-to-r from-blue-600 to-purple-700 text-white shadow-xl'
                    : 'bg-linear-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Try Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
