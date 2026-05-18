import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">Portfolio · Wang</Link>
      <div className="nav-links">
        <Link to="/product" className="nav-link">Product · UX</Link>
        <Link to="/marketing" className="nav-link">Marketing</Link>
        <Link to="/photography" className="nav-link">Archive</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  )
}
