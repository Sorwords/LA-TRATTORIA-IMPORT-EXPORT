import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">La Trattoria</h3>
            <p className="footer-text">
              Restaurante de cocina italiana auténtica en el corazón de la ciudad. 
              Ingredientes frescos, recetas tradicionales y pasión por la gastronomía italiana.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Navegación</h4>
            <ul className="footer-links">
              <li><Link to="/home">Inicio</Link></li>
              <li><Link to="/menu">Menú</Link></li>
              <li><Link to="/news">Noticias</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Horario</h4>
            <ul className="footer-info">
              <li>Lunes a Viernes: 13:00 - 23:00</li>
              <li>Sábados: 13:00 - 00:00</li>
              <li>Domingos: 13:00 - 23:00</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <ul className="footer-info">
              <li>📍 Calle Italia, 123</li>
              <li>📞 +34 928 123 456</li>
              <li>✉️ info@latrattoria.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-legal">
          <div className="footer-legal-links">
            <Link to="/privacy" className="footer-legal-link">Política de Privacidad y Cookies</Link>
            <span className="footer-separator">|</span>
            <Link to="/terms" className="footer-legal-link">Condiciones de Venta</Link>
            <span className="footer-separator">|</span>
            <Link to="/legal" className="footer-legal-link">Aviso Legal</Link>
          </div>
          <p className="footer-copyright">
            © {currentYear} La Trattoria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer