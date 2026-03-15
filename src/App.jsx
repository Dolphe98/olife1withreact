import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Fragments from './pages/Fragments'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact' // Added the Final Import

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100">
        
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fragments" element={<Fragments />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* Activated the Final Route */}
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App