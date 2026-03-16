import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-24 md:space-y-32">
      
      {/* SECTION 1: HERO TITLE */}
      <div className="border-b border-slate-800 pb-12 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 leading-tight">
          An infinite number of unresolved questions, unsatisfying answers, incomplete facts, and incomplete laws—<span className="text-cyan-500 italic">here, we dive deeper into all of them.</span>
        </h1>
        <p className="text-cyan-600 font-bold uppercase tracking-[0.4em] text-[10px]">
          The Olife Chronicles
        </p>
      </div>

      {/* SECTION 2: GRID OF ARTICLES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {blogData.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col space-y-4">
            <div className="overflow-hidden rounded-xl h-64 border border-slate-800 shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" 
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                {post.date}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* SECTION 3: JOIN US BEFORE FOOTER */}
      <div className="pt-20 flex flex-col items-center space-y-8 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-widest text-center">Ready to join the brave ones?</h2>
          <Link to="/contact" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] uppercase tracking-widest text-xs">
              Join Us
          </Link>
      </div>

      {/* SECTION 4: FOOTER */}
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