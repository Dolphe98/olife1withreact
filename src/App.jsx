function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      {/* Main Content Section */}
      <section className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-tighter">
          OLIFE
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto">
          Biblical Fiction • Spiritual Analysis • Futuristic Science
        </p>
        <div className="pt-4">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all transform hover:scale-105">
            Coming Soon
          </button>
        </div>
      </section>

      {/* Decorative background element */}
      <div className="fixed bottom-10 text-slate-800 text-9xl font-black -z-10 select-none">
        2026
      </div>
    </div>
  )
}

export default App