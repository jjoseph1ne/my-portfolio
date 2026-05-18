import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-brand">Josephine Wang</Link>
      <div className="footer-links">
        <Link to="/product" className="footer-link">Product · UX</Link>
        <Link to="/marketing" className="footer-link">Marketing</Link>
        <Link to="/photography" className="footer-link">Archive</Link>
        <Link to="/about" className="footer-link">About</Link>
      </div>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/josephine-wang-4a8b872b0/"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          aria-label="LinkedIn"
        >
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
