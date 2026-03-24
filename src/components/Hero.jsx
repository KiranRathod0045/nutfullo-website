export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#faf9f6] pt-10">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-amber-100/40 to-transparent rounded-l-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 -z-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-left space-y-8">
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest">✨ Elite Quality Cashews</div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">Fuel Your Business <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 font-medium italic">With Nutfullo.</span></h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">Wholesale premium dry fruits designed for high-growth businesses. Boost your margins with products that sell themselves.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 hover:shadow-xl transition-all">Bulk Order Now</button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-bold border-2 border-slate-100 rounded-2xl hover:border-emerald-200 transition-all">Partner with Us</button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1200" className="w-full h-[450px] md:h-[600px] object-cover" alt="Cashews" />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white max-w-[180px] hidden md:block">
              <p className="text-emerald-600 font-bold text-sm">✓ 40% Margin</p>
              <p className="text-slate-500 text-[10px] mt-1 italic leading-tight">Direct from source to your shelf.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}