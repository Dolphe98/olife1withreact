import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogData.find((item) => item.id === parseInt(id));

  if (!post) return <div className="text-white p-20 text-center">Article not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-12">
      {/* Article Header */}
      <div className="space-y-6">
        <Link to="/blog" className="text-cyan-500 text-xs font-bold uppercase tracking-widest hover:text-cyan-400">
          ← Back to Chronicles
        </Link>
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 leading-tight">
          {post.title}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
          Published on {post.date}
        </p>
      </div>

      {/* Featured Image */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[300px] md:h-[500px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Article Content */}
      <div className="prose prose-invert max-w-none">
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light whitespace-pre-line">
          {post.content}
        </p>
      </div>

      {/* Join Us Line before Footer */}
      <div className="pt-20 flex flex-col items-center space-y-8 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-widest text-center">Stay in the loop</h2>
          <Link to="/contact" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] uppercase tracking-widest text-xs">
              Join Us
          </Link>
      </div>
    </div>
  );
}