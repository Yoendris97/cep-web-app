// src/app/layout.js
import './globals.css'
import Link from 'next/link'
import { FaPhoneAlt, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa'

export const metadata = {
  title: 'CEP Web App',
  description: 'Church Web Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* NAVBAR FIJO ARRIBA (TRANSPARENTE) */}
        <header className="navbar">
          <div className="navbar-content">
            {/* Puedes dejar solo texto o un pequeño logotipo si lo deseas */}
            <div className="navbar-brand">
              <Link href="/">CEP Centro Evangelistico Peniel</Link>
            </div>
            <nav>
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/services">Horarios</Link></li>
                <li><Link href="/announcements">Anuncios</Link></li>
                <li><Link href="/about">Acerca</Link></li>
                <li><Link href="/offerings">Ofrendas</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="main-content">
          {children}
        </main>

        {/* FOOTER FIJO ABAJO (TRANSPARENTE) */}
        <footer className="footer">
          <div className="footer-info">
            <div className="footer-item">
              <FaPhoneAlt />
              <span>305 910 6472</span>
            </div>
            <div className="footer-item">
              <FaMapMarkerAlt />
              <span>12105 SW 129 CT, Miami FL 33186</span>
            </div>
            <div className="footer-item">
              <FaYoutube />
              <a
                href="https://www.youtube.com/tu-canal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuestro Canal de YouTube
              </a>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Centro Evangelistico Peniel</p>
        </footer>
      </body>
    </html>
  )
}
