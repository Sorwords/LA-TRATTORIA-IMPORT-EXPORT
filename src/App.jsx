import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import News from './pages/news/News'
import Admin from './pages/admin/Admin'
import Privacy from './pages/privacy/Privacy'
import Terms from './pages/terms/Terms'
import Legal from './pages/legal/Legal'
import ImportExport from './pages/import-export/ImportExport'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/import-export" element={<ImportExport />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App