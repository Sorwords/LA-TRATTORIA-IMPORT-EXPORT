import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/home', label: 'Inicio' },
    { path: '/menu', label: 'Menu' },
    { path: '/news', label: 'Noticias' },
    { path: '/about', label: 'Nosotros' },
    { path: '/contact', label: 'Contacto' },
    { path: '/import-export', label: 'Datos' },
  ]

  const isActive = (path) => location.pathname === path || (path === '/home' && location.pathname === '/')

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="header-logo">
          <div className="header-logo-text">
            <span className="header-logo-name">La Trattoria</span>
            <span className="header-logo-tagline">Cocina italiana autentica</span>
          </div>
        </Link>
        <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header-nav-link ${isActive(link.path) ? 'header-nav-link--active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary header-nav-cta" onClick={() => setIsMenuOpen(false)}>
            Reservar mesa
          </Link>
        </nav>
        <button className="header-burger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
          <span className="header-burger-line"></span>
          <span className="header-burger-line"></span>
          <span className="header-burger-line"></span>
        </button>
      </div>
    </header>
  )
}

export default Header