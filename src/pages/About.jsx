import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-24 md:space-y-40">
      
      {/* PAGE HEADER */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-slate-100 uppercase tracking-tighter">
          The Vision
        </h1>
        <p className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px]">
          Beneath the surface of Olife
        </p>
      </div>

      {/* SECTION 1: DEROSELIN RODOLPHE */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="flex-1 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <img src="/D.Rodolphe2026good.png" alt="Deroselin Rodolphe" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700" />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 border-l-4 border-cyan-600 pl-6">
            I am Deroselin Rodolphe.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            We bring you this sanctuary, <span className="text-slate-100 font-medium">Olife</span>: a space where your imagination is welcomed and valued. Here, we let our imagination guide us without judgment. We do not seek final answers; instead, we embrace a state of openness that encourages constant discovery.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            Olife opens the door to infinity—a limitless space where every thought creates new worlds. Within this sanctuary, we allow the universe to show us what truly lies within it. Through this process, we become <span className="text-cyan-500 italic">antifragile</span>.
          </p>
        </div>
      </div>

      {/* SECTION 2: OBSERVING WITHOUT LABELING (Reversed Layout for Desktop) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
        <div className="flex-1 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <img src="/olifeabout2.jpg" alt="Observing the Universe" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" />
        </div>
        <div className="flex-1 space-y-6">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light italic border-r-4 border-slate-800 pr-6 text-right md:text-left md:border-r-0 md:pr-0">
            "Olife is not just a way to see the universe; it is a way of observing without labeling."
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            We understand that naming limits us, trapping the infinite within our narrow views. We choose to embrace the universe with open hands rather than gripping tightly to fixed definitions. Olife is an effort to reach for what cannot be expressed in words, but instead reveals itself through experience.
          </p>
        </div>
      </div>

      {/* SECTION 3: VULNERABILITY & DISCOVERY */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="flex-1 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <img src="/olifeabout3.jpg" alt="The Open Door" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" />
        </div>
        <div className="flex-1 space-y-6">
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            In this space, reality, fiction, and spirituality blend as we dive deeper. We explore, we examine, and we ask questions. More importantly, we learn how to ask questions, digging into the foundations of our own curiosity. 
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            We believe in seeking help and learning how to ask for it, recognizing that vulnerability connects us to the rest of the universe. In the sanctuary of Olife, the door is always open. The universe constantly speaks to those who have stopped trying to label it, and eventually, we will live our way into the answers.
          </p>
        </div>
      </div>

      {/* JOIN US SECTION */}
      <div className="pt-20 flex flex-col items-center space-y-8 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-widest text-center">Step into the unknown</h2>
          <Link to="/contact" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-50 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] uppercase tracking-widest text-xs">
              Join the Sanctuary
          </Link>
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