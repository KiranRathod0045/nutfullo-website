// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Handle scroll effect for glassmorphism
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/products" },
//     { name: "Partner", path: "/partner" },
//     { name: "Business", path: "/business" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav 
//       className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
//         scrolled 
//           ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" 
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform">
//             N
//           </div>
//           <h1 className="text-2xl font-black tracking-tighter text-slate-900">
//             Nutfullo<span className="text-emerald-600">.</span>
//           </h1>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center bg-slate-100/50 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-white/50">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
//                 location.pathname === link.path
//                   ? "bg-white text-emerald-600 shadow-sm"
//                   : "text-slate-600 hover:text-emerald-600"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden md:block">
//           <Link 
//             to="/contact" 
//             className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200 transition-all"
//           >
//             Get Quote
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-2 text-slate-900 focus:outline-none"
//           onClick={() => setOpen(!open)}
//         >
//           <div className="w-6 space-y-1.5">
//             <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}></span>
//             <span className={`block h-0.5 w-4 bg-slate-900 transition-opacity ${open ? "opacity-0" : ""}`}></span>
//             <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div className={`fixed inset-0 bg-white z-[-1] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${
//         open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10"
//       }`}>
//         {navLinks.map((link) => (
//           <Link
//             key={link.path}
//             to={link.path}
//             onClick={() => setOpen(false)}
//             className="text-3xl font-bold text-slate-900 hover:text-emerald-600"
//           >
//             {link.name}
//           </Link>
//         ))}
//         <Link 
//           to="/contact"
//           onClick={() => setOpen(false)}
//           className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-2xl"
//         >
//           Get Free Sample
//         </Link>
//       </div>
//     </nav>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close menu on route change
  useEffect(() => setOpen(false), [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Partner", path: "/partner" },
    { name: "Business", path: "/business" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-md py-3" : "bg-transparent"
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 relative z-[110]">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-200">N</div>
            <h1 className="text-2xl font-black tracking-tighter text-slate-900">
              Nutfullo<span className="text-emerald-600">.</span>
            </h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center bg-slate-100/50 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-white/50">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  location.pathname === link.path 
                    ? "bg-white text-emerald-600 shadow-sm" 
                    : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden relative z-[110] p-2" onClick={() => setOpen(!open)}>
            <div className="w-6 space-y-1.5">
              <span className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay */}
      <div className={`fixed inset-0 bg-white z-[95] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
        open ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
      }`}>
        <div className="flex flex-col items-center w-full px-10 space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`w-full text-center py-4 rounded-3xl text-3xl font-black transition-all duration-300 ${
                  isActive 
                    ? "bg-emerald-50 text-emerald-600 scale-105" 
                    : "text-slate-900 hover:text-emerald-600"
                }`}
              >
                {link.name}
                {isActive && <span className="ml-3 text-emerald-400 text-xl">•</span>}
              </Link>
            );
          })}
          
          <Link 
            to="/contact" 
            className="mt-10 w-full text-center py-5 bg-slate-900 text-white font-bold rounded-[2rem] shadow-xl shadow-slate-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}