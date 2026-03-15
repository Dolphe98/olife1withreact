import { Link } from 'react-router-dom';
import { fragmentsData } from '../data/fragmentsData';

const blogData = [
  {
    id: 1,
    title: "The Architecture of the Unknown",
    excerpt: "Exploring the hidden structures of our imagination and how they shape our reality...",
    date: "15 March 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Silent Echoes: A Study in Duality",
    excerpt: "Why the balance between light and dark is essential for a creative sanctuary...",
    date: "28 February 2026",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Gateway to Infinite Discovery",
    excerpt: "Embracing the state of openness that encourages constant growth...",
    date: "10 February 2026",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Home() {
  const latestFragments = fragmentsData ? fragmentsData.slice(0, 3) : [];
  const latestPosts = blogData.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 space-y-32">
      
      {/* SECTION 1: HERO */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-slate-100">
            Are you brave enough to see what the uncertainty and the unknown hold for us?
          </h1>
          <p className="text-xl text-cyan-400 font-medium tracking-wide">
            This path is not for everybody; it is reserved for the brave one only.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 mt-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded transition-all shadow-[0_0_15px_rgba(8,145,178,0.4)]">
            Join Us
          </Link>
        </div>
        <div className="flex-1 relative h-[450px] w-full flex justify-center items-center mt-10 md:mt-0">
          <img src="/olife1.comsection1image1.jpg" alt="Olife Background" className="absolute top-0 right-4 md:right-10 w-64 h-80 object-cover rounded-lg shadow-2xl border border-slate-700 opacity-80" />
          <img src="/olife1.comsection1image2.jpg" alt="Olife Foreground" className="absolute bottom-0 left-4 md:left-10 w-64 h-80 object-cover rounded-lg shadow-[0_0_30px_rgba(8,145,178,0.2)] border border-cyan-900 z-10" />
        </div>
      </div>

      {/* SECTION 2: LATEST FRAGMENTS */}
      <div className="flex flex-col space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <Link to="/fragments" className="text-3xl font-bold text-slate-100 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 tracking-wide">
            Latest Fragments <span className="text-cyan-600 text-2xl">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestFragments.map((fragment) => (
            <Link key={fragment.id} to="/fragments" className="group relative overflow-hidden rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors shadow-lg">
              <img src={fragment.image} alt={fragment.altText} className="w-full h-72 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 3: THE SANCTUARY */}
      <div className="flex flex-col md:flex-row items-center bg-slate-900/30 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="md:w-2/5 w-full h-80 md:h-[450px] relative">
          <img src="/D.Rodolphe2026good.png" alt="Deroselin Rodolphe" className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-950 via-transparent to-transparent"></div>
        </div>
        <div className="md:w-3/5 p-8 md:p-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">I am <span className="text-cyan-500">Deroselin Rodolphe</span>.</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            We bring you this sanctuary, <span className="text-slate-100 font-semibold">Olife</span>: a space where your imagination is welcomed and valued. 
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-widest text-xs border-b border-cyan-900 hover:border-cyan-400 transition-all pb-2">
            Read More <span>→</span>
          </Link>
        </div>
      </div>

      {/* SECTION 4: LATEST ARTICLES */}
      <div className="space-y-12">
        <div className="border-b border-slate-800 pb-4">
          <Link to="/blog" className="text-3xl font-bold text-slate-100 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 tracking-wide">
            Latest Articles <span className="text-cyan-600 text-2xl">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link key={post.id} to="/blog" className="group flex flex-col space-y-4">
              <div className="overflow-hidden rounded-xl h-56 border border-slate-800 shadow-lg">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">{post.title}</h3>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-10 flex justify-center">
            <Link to="/contact" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] uppercase tracking-widest text-sm">
                Join Us
            </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="pt-20 border-t border-slate-900 flex flex-col space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Clickable Logo */}
          <Link to="/" className="text-2xl font-black text-slate-100 tracking-tighter hover:text-cyan-400 transition-colors">
            OLIFE<span className="text-cyan-600">.</span>
          </Link>
          
          <div className="flex gap-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <Link to="/fragments" className="hover:text-cyan-400 transition-colors">Fragments</Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] border-t border-slate-900/50 pt-8">
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