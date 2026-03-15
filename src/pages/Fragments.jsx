import { fragmentsData } from '../data/fragmentsData';

export default function Fragments() {
  // This grabs the first 10 items from your database
  const allFragments = fragmentsData.slice(0, 10);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Page Title Section */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tighter">
          Olife: An Open Door to the Infinite
        </h1>
        <div className="h-1 w-24 bg-cyan-600 mx-auto"></div>
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

    </div>
  );
}