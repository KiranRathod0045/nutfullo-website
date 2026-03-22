import Hero from "../components/Hero";
import SignatureCollection from "../components/SignatureCollection";
import WhoWeServe from "../components/WhoWeServe";

const whyFeatures = [
  { title: "High Profit Margin", desc: "Earn 25%–40% on every premium pack sold.", icon: "💰" },
  { title: "Premium Quality", desc: "Handpicked, jumbo-sized Grade A+ cashews.", icon: "💎" },
  { title: "Fast Selling", desc: "High demand across all retail and gym segments.", icon: "⚡" },
  { title: "Bulk Supply", desc: "Reliable inventory management for large orders.", icon: "📦" },
  { title: "Pan India", desc: "Seamless distribution network across all states.", icon: "🇮🇳" },
];

const products = [
  { name: "Plain Royale", img: "https://images.unsplash.com/photo-1536628218485-db204a439c77?q=80&w=800" },
  { name: "Roasted Gold", img: "https://images.unsplash.com/photo-1623114112815-56543b355866?q=80&w=800" },
  { name: "Exotic Flavors", img: "https://images.unsplash.com/photo-1590502593457-4632a6778f65?q=80&w=800" },
  { name: "Elite Combos", img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=800" },
];

export default function Home() {
  return (
    <div className="bg-[#fcfcfc] text-slate-900 overflow-x-hidden">
      <Hero />

      {/* --- Why Section --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Why <span className="text-amber-600">Nutfullo?</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyFeatures.map((item, i) => (
            <div
              key={i}
              className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Products Section --- */}
      <SignatureCollection/>

      {/* --- Who We Serve Section --- */}
      <WhoWeServe/>
    </div>
  );
}