import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-slate-950/95 backdrop-blur-md border-b border-slate-900">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        
        {/* ROW 1: Logo, Desktop Nav + Join Us, Mobile Toggle */}
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src="/olife1logo.png" alt="Olife Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <Link to="/fragments" className="hover:text-cyan-400 transition-colors">Fragments</Link>
              <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
            <Link to="/contact" className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-50 text-[10px] font-bold uppercase tracking-widest rounded transition-all">
              Join Us
            </Link>
          </div>

          {/* MOBILE TOGGLE (3 BARS) */}
          <button 
            className="md:hidden text-slate-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-6 pt-8 pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <Link to="/fragments" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-300">Fragments</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-300">Blog</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-300">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-300">Contact</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-cyan-600 text-slate-50 font-bold uppercase tracking-widest rounded">
              Join Us
            </Link>
          </div>
        )}

        {/* ROW 2: Site Name & Socials (Standard Layout) */}
        <div className="flex justify-between items-center mt-4 border-t border-slate-900 pt-4">
          <div className="w-10 hidden md:block"></div>
          <Link to="/" className="text-2xl md:text-4xl font-black text-cyan-500 tracking-[0.15em] uppercase mx-auto">
            Olife
          </Link>
          <div className="flex gap-4 w-10 justify-end">
            <a href="#" className="text-slate-500"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
          </div>
        </div>

      </nav>
    </header>
  );
}