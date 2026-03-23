import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
                N
              </div>
              <h2 className="text-2xl font-black tracking-tighter">
                Nutfullo<span className="text-emerald-600">.</span>
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              India's leading provider of premium Grade-A+ dry fruits. We empower 
              businesses with high-margin, health-focused products.
            </p>
            <div className="flex gap-4">
              {["Instagram", "LinkedIn", "WhatsApp"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 hover:border-emerald-500 hover:text-emerald-500 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-tighter">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-emerald-500 transition-colors">Our Products</Link></li>
              <li><Link to="/business" className="hover:text-emerald-500 transition-colors">Business Model</Link></li>
              <li><Link to="/partner" className="hover:text-emerald-500 transition-colors">Become a Partner</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800">
            <h4 className="font-bold text-lg mb-4 text-emerald-500">Stay Updated</h4>
            <p className="text-xs text-slate-400 mb-6">Get notified about new seasonal arrivals and bulk pricing drops.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs focus:border-emerald-500 outline-none transition-all"
              />
              <button className="w-full bg-emerald-600 py-3 rounded-xl text-xs font-bold hover:bg-emerald-500 transition-all">
                Join Network
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} <span className="text-white font-medium">Nutrace Food Pvt Ltd</span> All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Logistics Status: Normal
            </p>
            <p>Made in Pune, India</p>
          </div>
        </div>

      </div>
    </footer>
  );
}