import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Fragments from './pages/Fragments'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100">
        
        <Header />

        <main>
          <Routes>
            {/* Main Home Page */}
            <Route path="/" element={<Home />} />
            
            {/* Fragments Page (The one you just built) */}
            <Route path="/fragments" element={<Fragments />} />

            {/* Placeholder Routes for the other pages */}
            <Route path="/blog" element={<div className="p-20 text-center text-2xl text-slate-500">Blog Page Coming Soon</div>} />
            <Route path="/about" element={<div className="p-20 text-center text-2xl text-slate-500">About Page Coming Soon</div>} />
            <Route path="/contact" element={<div className="p-20 text-center text-2xl text-slate-500">Contact Page Coming Soon</div>} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App