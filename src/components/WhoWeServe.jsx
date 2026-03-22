const segments = [
  { 
    title: "Gym Owners", 
    desc: "Premium protein-rich snacks for your fitness community.",
    icon: "💪",
    tag: "Fitness"
  },
  { 
    title: "Retail Shops", 
    desc: "Luxury packaging that stands out on your premium shelves.",
    icon: "🏪",
    tag: "Retail"
  },
  { 
    title: "Wholesalers", 
    desc: "Consistent bulk supply with unbeatable margins.",
    icon: "🏢",
    tag: "Supply"
  },
  { 
    title: "Distributors", 
    desc: "Exclusive regional partnerships for high-volume growth.",
    icon: "🚚",
    tag: "Network"
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Tailored for <span className="text-emerald-600">Growth.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Whether you run a local boutique gym or a national distribution network, 
            Nutfullo provides the premium edge your business deserves.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Decorative Corner Element */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-[3] transition-transform duration-700 -z-0" />

              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {item.icon}
                </div>
                
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                  {item.tag}
                </span>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <span className="w-8 h-[2px] bg-emerald-600" />
                  Explore Partnership
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stat/Trust Line */}
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-medium italic">
            "Nutfullo has transformed how we source premium snacks."
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${n+10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-800 underline">Join 200+ partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}