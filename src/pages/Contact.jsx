const contactInfo = [
  { icon: "📍", label: "Corporate Office", value: "Nutfullo HQ, Business Bay, Yerwada, Pune, Maharashtra 411006" },
  { icon: "📞", label: "Business Enquiries", value: "+91 98765 43210" },
  { icon: "📧", label: "Official Support", value: "partners@nutfullo.com" },
  { icon: "⏰", label: "Working Hours", value: "Mon - Sat: 10:00 AM - 7:00 PM" },
];

const faqs = [
  { q: "What is the Minimum Order Quantity (MOQ)?", a: "For wholesale pricing, we start at 10kg. For retail partners, custom starter kits are available." },
  { q: "How do I get the 40% profit margin?", a: "Margins vary by volume. High-volume distributors and exclusive regional partners qualify for our Tier-1 pricing." },
  { q: "Do you provide white-labeling?", a: "Yes, for bulk orders above 500kg, we offer custom branding and packaging services." },
];

export default function Contact() {
  return (
    <section className="py-24 bg-[#faf9f6] min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="w-full lg:w-5/12 space-y-12">
            <div>
              <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                Let’s Build Your <br />
                <span className="text-emerald-600">Empire.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed">
                Ready to dominate the premium dry fruit market? Our team is standing by to help you choose the right partner model.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-white shadow-sm rounded-2xl flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-slate-900 font-semibold leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Premium Form Card */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Full Name</label>
                    <input className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Rohit Kalambate" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Phone Number</label>
                    <input className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-2">Business Type</label>
                  <select className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none">
                    <option>Gym / Fitness Center</option>
                    <option>Retail / Grocery Shop</option>
                    <option>Wholesale / Distribution</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-2">Your Message</label>
                  <textarea rows="4" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Tell us about your requirements..." />
                </div>

                <button className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-300 transform active:scale-[0.98]">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section - Clean Accordion Style */}
        <div className="mt-32 pt-20 border-t border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-colors">
                <h4 className="font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}