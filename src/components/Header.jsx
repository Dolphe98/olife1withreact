import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900 py-4">
      <nav className="max-w-7xl mx-auto px-6 space-y-4">
        
        {/* TOP LINE: Logo, Navigation, and Join Us Button */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/olife1logo.png" 
              alt="Olife Logo" 
              className="h-10 w-auto object-contain" 
            />
          </Link>

          {/* Nav Links + Button Group */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              <Link to="/fragments" className="hover:text-cyan-400 transition-colors">Fragments</Link>
              <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors hidden lg:block">Contact</Link>
            </div>
            
            {/* The Header Join Us Button */}
            <Link to="/contact" className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-50 text-[10px] font-bold uppercase tracking-widest rounded transition-all shadow-[0_0_10px_rgba(8,145,178,0.3)]">
              Join Us
            </Link>
          </div>
        </div>

        {/* SECOND LINE: Blue "Olife" and Social Media */}
        <div className="flex justify-between items-center relative">
          <div className="w-24 hidden md:block"></div>

          <Link to="/" className="text-4xl font-black text-cyan-500 tracking-[0.15em] uppercase hover:text-cyan-400 transition-colors mx-auto">
            Olife
          </Link>

          <div className="flex items-center gap-5 w-24 justify-end">
            <a href="#" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

      </nav>
    </header>
  );
}