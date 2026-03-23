import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-brand">Portfolio · Wang</Link>
      <div className="footer-links">
        <Link to="/product" className="footer-link">Product · UX</Link>
        <Link to="/marketing" className="footer-link">Marketing</Link>
        <Link to="/photography" className="footer-link">Visual</Link>
      </div>
      <div className="footer-icons">
        {/* Instagram */}
        <a href="#" className="footer-icon" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>
        {/* Pinterest */}
        <a href="#" className="footer-icon" aria-label="Pinterest">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.09-2.36 3.09-5.15 0-2.13-1.44-3.62-3.49-3.62-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.24l-.23.95c-.04.14-.12.17-.28.1-1.04-.48-1.69-2-1.69-3.22 0-2.62 1.9-5.02 5.49-5.02 2.88 0 5.12 2.05 5.12 4.79 0 2.86-1.8 5.16-4.3 5.16-.84 0-1.63-.44-1.9-.95l-.52 1.93c-.19.72-.69 1.62-1.02 2.17.77.24 1.58.37 2.42.37 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        {/* Email */}
        <a href="mailto:mw5333@nyu.edu" className="footer-icon" aria-label="Email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}
