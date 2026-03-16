import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogData.find((item) => String(item.id) === String(id));

  // SEO Injection
  useEffect(() => {
    if (post) {
      document.title = post.seoTitle || post.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = post.seoDescription || post.excerpt;
    }
  }, [post]);

  if (!post) return <div className="text-white p-20 text-center uppercase font-black tracking-widest">Article not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-16">
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Article Header */}
        <div className="space-y-6">
          <Link to="/blog" className="text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-cyan-400 transition-colors">
            ← Back to Latest Posts
          </Link>
          
          {/* TITLE WITH S1E1 */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-100 leading-tight">
            {post.title} <span className="text-cyan-500 text-xl md:text-3xl tracking-widest uppercase font-light border-l-2 border-cyan-800 pl-4 ml-2">S1E1</span>
          </h1>
          
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
            Published on {post.date}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[300px] md:h-[550px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-90" />
        </div>

        {/* THIS IS THE FIX: It reads the HTML tags to format the text beautifully */}
        <div 
          className="prose prose-invert max-w-none text-lg md:text-xl text-slate-300 leading-relaxed font-light"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Join Us Line before Footer */}
        <div className="pt-20 flex flex-col items-center space-y-8 border-t border-slate-900">
            <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-widest text-center">Stay in the loop</h2>
            <Link to="/contact" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] uppercase tracking-widest text-xs">
                Join Us
            </Link>
        </div>
      </div>

      {/* FOOTER */}
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