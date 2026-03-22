const businessPillars = [
  { 
    title: "Marketing Support", 
    desc: "We provide high-quality digital assets, brochures, and store branding to help you sell faster.",
    icon: "📣"
  },
  { 
    title: "Supply Chain", 
    desc: "Reliable, year-round inventory. Never worry about stock-outs during peak festival seasons.",
    icon: "⛓️"
  },
  { 
    title: "Logistics", 
    desc: "Pan-India delivery network ensuring your products arrive fresh and on time, every time.",
    icon: "🚛"
  }
];

export default function Business() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Main Stats Hero */}
        <div className="relative bg-emerald-600 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden mb-20">
          {/* Background Decorative Rings */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                High Margin. <br /> Low Risk.
              </h1>
              <p className="text-emerald-100 text-lg md:text-xl leading-relaxed">
                Nutfullo isn't just a supplier; we are your growth engine. 
                Our model is built to ensure every partner maximizes their ROI.
              </p>
            </div>

            {/* Profit Badge */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] text-center min-w-[280px]">
              <p className="text-emerald-200 text-sm font-bold uppercase tracking-widest mb-2">Net Profit Margin</p>
              <h2 className="text-6xl md:text-7xl font-black">20-40%</h2>
              <p className="mt-4 text-emerald-100/80 text-sm italic">Industry-leading returns</p>
            </div>
          </div>
        </div>

        {/* Support Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessPillars.map((pillar, i) => (
            <div key={i} className="group p-10 bg-[#faf9f6] rounded-[2.5rem] border border-transparent hover:border-emerald-100 transition-all duration-300">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Step-by-Step Flow */}
        <div className="mt-24 pt-20 border-t border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", label: "Enquire", text: "Submit your business details." },
              { step: "02", label: "Sample", text: "Test our premium quality." },
              { step: "03", label: "Onboard", text: "Receive marketing & pricing." },
              { step: "04", label: "Scale", text: "Start selling and earning." }
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <span className="text-8xl font-black text-slate-100 absolute -top-10 left-1/2 -translate-x-1/2 -z-0">
                  {step.step}
                </span>
                <div className="relative z-10 pt-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{step.label}</h4>
                  <p className="text-slate-500 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}