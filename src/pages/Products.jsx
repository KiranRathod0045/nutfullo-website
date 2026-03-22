// import img from "../../public/cnuts.png"
const products = [
  // { name: "Jumbo Cashews", weight: "500g / 1kg", tag: "Signature", img: "https://images.unsplash.com/photo-1536628218485-db204a439c77?q=80&w=800" },
  { name: "Jumbo Cashews", weight: "500g / 1kg", tag: "Signature", img: "../../public/cs.jpg" },
  { name: "California Almonds", weight: "500g / 1kg", tag: "Premium", img: "../../public/al.png" },
  { name: "Chilean Walnuts", weight: "250g / 500g", tag: "Brain Food", img: "../../public/wl.png" },
  { name: "Dried Afghani Figs", weight: "200g Pouch", tag: "Iron Rich", img: "../../public/fg.png" },
  { name: "Green Raisins", weight: "500g Pack", tag: "Natural", img: "../../public/g.webp" },
  { name: "Roasted Pistachios", weight: "250g / 500g", tag: "Salted", img: "../../public/p.webp" },
  { name: "Mixed Nuts Mix", weight: "1kg Bulk", tag: "Party Pack", img: "../../public/mx.jpg" },
  { name: "Wholesale Cashews", weight: "10kg+ Carton", tag: "B2B Only", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=800" },
];

export default function Products() {
  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Our Premium Catalog
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Wholesale <span className="text-emerald-600">Dry Fruits.</span>
          </h2>
          <p className="text-slate-500 mt-6 text-lg leading-relaxed">
            Hand-selected, double-sorted, and vacuum-sealed to preserve the crunch and nutrition 
            of every single nut.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((item, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-[2.5rem] p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-3 border border-transparent hover:border-emerald-100"
            >
              {/* Image Container with Zoom */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-square bg-slate-50 mb-6">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-4 pb-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{item.weight}</p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing</p>
                    <p className="text-emerald-600 font-extrabold">Request Quote</p>
                  </div>
                  <button className="h-12 w-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-all shadow-lg group-hover:shadow-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card Glow Background (Invisible until hover) */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/0 to-amber-50/0 group-hover:from-emerald-50/50 group-hover:to-amber-50/50 rounded-[2.5rem] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}