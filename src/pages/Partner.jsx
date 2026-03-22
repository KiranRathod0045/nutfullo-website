const partnershipRoles = [
  { 
    role: "Gym Partner", 
    benefit: "Sell to members", 
    desc: "Offer high-protein, clean energy snacks directly to your fitness community. Perfect for pre/post-workout fuel.",
    icon: "🏋️‍♂️",
    color: "from-emerald-500 to-teal-600"
  },
  { 
    role: "Retail Partner", 
    benefit: "Fast moving stock", 
    desc: "Our premium packaging is designed for shelf-appeal. High rotation products with consistent margins.",
    icon: "🛍️",
    color: "from-amber-500 to-orange-600"
  },
  { 
    role: "Wholesaler", 
    benefit: "Bulk pricing", 
    desc: "Access our tier-1 pricing for large volume orders. Direct-from-source rates for maximum profitability.",
    icon: "🏢",
    color: "from-blue-600 to-indigo-700"
  },
  { 
    role: "Distributor", 
    benefit: "Area control", 
    desc: "Secure exclusive regional rights. Build a network with full support from the Nutfullo logistics team.",
    icon: "🤝",
    color: "from-slate-800 to-slate-950"
  },
];

export default function Partner() {
  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6">
        
        {/* Header - Modern Left-Aligned Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              B2B Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Scale Your Business <br /> 
              <span className="text-emerald-600 font-medium italic">With Nutfullo.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-lg max-w-sm leading-relaxed border-l-4 border-emerald-500 pl-6">
            Join a network of 250+ partners across India delivering premium health in every crunch.
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipRoles.map((item, i) => (
            <div 
              key={i}
              className="group relative bg-white p-1 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500 border border-slate-100"
            >
              <div className="p-10 flex flex-col h-full">
                {/* Icon & Label */}
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">
                    {item.benefit}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{item.role}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>

                {/* Action Button */}
                <button className="w-fit flex items-center gap-3 font-bold text-slate-900 hover:text-emerald-600 transition-colors group/btn">
                  Start Partnership 
                  <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-emerald-600 group-hover/btn:text-white transition-all">
                    →
                  </span>
                </button>
              </div>

              {/* Subtle Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-50 rounded-full -z-10 group-hover:bg-emerald-50 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative shapes for 2026 look */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-[100px]" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to grow your margins?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Download our 2026 Wholesale Catalog and pricing structure instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
              Request Wholesale Catalog
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-slate-700 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
              Talk to Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}