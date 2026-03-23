import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductUX from './pages/ProductUX'
import Marketing from './pages/Marketing'
import Photography from './pages/Photography'
import About from './pages/About'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductUX />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}