import { Link } from 'react-router-dom';
import { fragmentsData } from '../data/fragmentsData';

export default function Fragments() {
  // This grabs the first 10 items from your database
  const allFragments = fragmentsData.slice(0, 10);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-24 md:space-y-32">
      
      {/* Page Title Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tighter uppercase">
          Fragments
        </h1>
        <p className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px]">
          An Open Door to the Infinite
        </p>
        <div className="h-1 w-24 bg-cyan-900 mx-auto rounded-full"></div>
      </div>

      {/* The Grid - Purely Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allFragments.map((fragment) => (
          <div 
            key={fragment.id} 
            className="group relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl transition-all duration-500 hover:border-cyan-500/30"
          >
            <div className="aspect-square">
              <img 
                src={fragment.image} 
                alt={fragment.altText} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* JOIN US SECTION (Added for consistency) */}
      <div className="pt-20 flex flex-col items-center space-y-8 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-widest text-center">Ready to join the brave ones?</h2>
          <Link to="/contact" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] uppercase tracking-widest text-xs">
              Join Us
          </Link>
      </div>

      {/* FOOTER (Added for consistency) */}
      <footer className="pt-20 border-t border-slate-900 flex flex-col space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="text-2xl font-black text-slate-100 tracking-tighter hover:text-cyan-400 transition-colors">
            OLIFE<span className="text-cyan-600">.</span>
          </Link>
          <div className="flex gap-6 text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
            <Link to="/fragments" className="hover:text-cyan-400 transition-colors">Fragments</Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] border-t border-slate-900/50 pt-8 text-center">
          <p>© 2026 Olife Sanctuary. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Data Privacy</Link>
            <Link to="/copyright" className="hover:text-slate-400 transition-colors">Copyright Notice</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}