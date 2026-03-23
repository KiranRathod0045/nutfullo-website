// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#faf9f6]">
//       {/* Background Decorative Elements (2026 Mesh Gradient Style) */}
//       <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-amber-100/50 to-transparent rounded-l-full blur-3xl" />
//       <div className="absolute -bottom-24 -left-24 -z-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 py-12 lg:py-24">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
          
//           {/* Text Content */}
//           <div className="w-full lg:w-1/2 text-left space-y-8">
//             <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold tracking-wide uppercase">
//               ✨ Premium Grade A+ Cashews
//             </div>
            
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
//               Fuel Your Business <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
//                 With Nutfullo.
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
//               Wholesale premium dry fruits designed for high-growth businesses. 
//               Boost your margins with products that sell themselves.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
//               <button className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 hover:shadow-[0_20px_50px_rgba(5,150,105,0.3)] transition-all duration-300">
//                 Bulk Order Now
//               </button>
//               <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-bold border-2 border-slate-100 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300">
//                 Partner with Us
//               </button>
//             </div>

//             {/* Trust Badges */}
//             <div className="flex items-center gap-6 pt-8 border-t border-slate-200">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-slate-800">150+</p>
//                 <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Partners</p>
//               </div>
//               <div className="h-8 w-[1px] bg-slate-200" />
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-slate-800">Pan India</p>
//                 <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Delivery</p>
//               </div>
//             </div>
//           </div>

//           {/* Image Content with Floating Glass Effect */}
//           <div className="w-full lg:w-1/2 relative">
//             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
//               <img 
//                 src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1200" 
//                 alt="Premium Cashews" 
//                 className="w-full h-[400px] md:h-[550px] object-cover"
//               />
//             </div>
            
//             {/* Floating Info Card */}
//             <div className="absolute -bottom-6 -left-6 z-20 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white max-w-[200px] hidden md:block">
//               <p className="text-emerald-600 font-bold text-sm">✓ High Profit</p>
//               <p className="text-slate-700 text-xs mt-1">Direct from source to your retail shelf.</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#faf9f6] pt-10">
      {/* Background Decorative - pointer-events-none is key here */}
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