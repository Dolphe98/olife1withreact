import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Fragments from './pages/Fragments'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100">
        
        <Header />

        <main>
          <Routes>
            {/* Main Home Page */}
            <Route path="/" element={<Home />} />
            
            {/* Fragments Page */}
            <Route path="/fragments" element={<Fragments />} />

            {/* Blog System */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Placeholder Routes for remaining pages */}
            <Route path="/about" element={<div className="p-20 text-center text-2xl text-slate-500 font-black uppercase tracking-widest">About Page Coming Soon</div>} />
            <Route path="/contact" element={<div className="p-20 text-center text-2xl text-slate-500 font-black uppercase tracking-widest">Contact Page Coming Soon</div>} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App