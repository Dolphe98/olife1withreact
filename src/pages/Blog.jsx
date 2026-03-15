import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-24">
      
      {/* Title Section */}
      <div className="border-b border-slate-800 pb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black text-slate-100 uppercase tracking-tighter">
          The Chronicles
        </h1>
        <p className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
          Insights from the Olife Sanctuary
        </p>
      </div>

      {/* Grid of Articles (Matches Home Page Style) */}
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

      {/* Join Us Line before Footer */}
      <div className="pt-20 flex flex-col items-center space-y-8 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-widest text-center">Ready to join the brave ones?</h2>
          <Link to="/contact" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] uppercase tracking-widest text-xs">
              Join Us
          </Link>
      </div>
    </div>
  );
}