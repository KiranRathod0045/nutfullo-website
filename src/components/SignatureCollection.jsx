const products = [
  {
    name: "Plain Royale",
    tag: "Grade A+",
    img: "https://images.unsplash.com/photo-1536628218485-db204a439c77?q=80&w=800",
  },
  {
    name: "Roasted Gold",
    tag: "Crunchy",
    img: "https://images.unsplash.com/photo-1623114112815-56543b355866?q=80&w=800",
  },
  {
    name: "Exotic Flavors",
    tag: "Spiced",
    img: "https://images.unsplash.com/photo-1590502593457-4632a6778f65?q=80&w=800",
  },
  {
    name: "Elite Combos",
    tag: "Gift Pack",
    img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=800",
  },
];
import { Link } from "react-router-dom";

export default function SignatureCollection() {
  return (
    <section className="py-24 bg-[#faf9f6]">
      {" "}
      {/* Matches Hero Background */}
      <div className="container mx-auto px-6">
        {/* Header - Matches Hero Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-widest">
              Our Bestsellers
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              The <span className="text-emerald-600">Signature</span> Collection
            </h2>
            <p className="text-slate-500 max-w-md text-lg">
              Precision roasted and perfectly seasoned for the elite palate.
            </p>
          </div>
          <Link to="/products">
            <button className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300">
              Explore All Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-emerald-600 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Product Grid - Floating Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, i) => (
            <div key={i} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-white shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
                  {item.tag}
                </div>

                {/* Bottom Gradient Overlay (Subtle) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text - Clean and Premium */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-sm font-medium mt-1">
                  Wholesale & Retail Packs
                </p>
                <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-emerald-500 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
