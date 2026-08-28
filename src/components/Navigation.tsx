import { useState, useEffect } from "react";
import { Menu, X, Terminal, ExternalLink, Shield, Radio } from "lucide-react";
import { BatInsignia } from "./BatInsignia";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "gallery", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dossier", href: "#about", code: "01" },
    { name: "Arsenal", href: "#skills", code: "02" },
    { name: "Tactical Systems", href: "#projects", code: "03" },
    { name: "Visual Archives", href: "#gallery", code: "04" },
    { name: "Secure Uplink", href: "#contact", code: "05" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06070a]/90 backdrop-blur-md border-b border-bat-border shadow-xl shadow-black/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Batman / WayneTech Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-bat-gold/20 via-bat-dark to-bat-black p-0.5 border border-bat-gold/40 shadow-lg shadow-bat-gold/10 group-hover:scale-105 group-hover:border-bat-gold transition-all">
            <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <BatInsignia size={22} className="text-bat-gold group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(245,197,24,0.6)]" />
            </div>
          </div>
          
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-extrabold text-slate-100 text-sm tracking-wider group-hover:text-bat-gold transition-colors">
                MUNTASIR SHAWON
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-semibold bg-[#0D1018] text-bat-gold border border-bat-gold/30 rounded-md">
                CSE @ NSU
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <span className="text-bat-gold font-semibold">BATCOMPUTER</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0a0c13]/80 p-1.5 rounded-full border border-bat-border backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-bat-gold text-[#06070a] shadow-md shadow-bat-gold/30 font-bold"
                    : "text-slate-300 hover:text-bat-gold hover:bg-slate-800/40"
                }`}
              >
                <span className={isActive ? "text-[#06070a]/70 text-[10px]" : "text-bat-gold/60 text-[10px]"}>
                  {link.code}.
                </span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Muntasir-Shawon"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold text-slate-300 bg-[#0E1119] hover:bg-[#161B28] border border-bat-border hover:border-bat-gold/50 rounded-xl transition-all hover:scale-105"
          >
            <Terminal className="w-3.5 h-3.5 text-bat-gold" />
            <span>WAYNETECH INTEL</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold text-[#06070a] bg-gradient-to-r from-bat-gold via-amber-400 to-bat-yellow hover:brightness-110 rounded-xl shadow-lg shadow-bat-gold/20 transition-all hover:scale-105 active:scale-95"
          >
            <Radio className="w-3.5 h-3.5 text-[#06070a]" />
            <span>ESTABLISH UPLINK</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-xl bg-bat-dark border border-bat-border text-slate-300 hover:text-bat-gold focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07080d]/98 border-b border-bat-border px-4 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-mono text-slate-200 hover:bg-[#121520] hover:text-bat-gold transition-colors flex items-center justify-between border border-transparent hover:border-bat-border"
              >
                <span>{link.name}</span>
                <span className="text-bat-gold/70 text-xs">{link.code} //</span>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-bat-border flex flex-col gap-3">
              <a
                href="https://github.com/Muntasir-Shawon"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#0D1018] border border-bat-border text-slate-200"
              >
                WAYNETECH REPOSITORY // GITHUB
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-xs font-mono font-bold bg-bat-gold text-[#06070a]"
              >
                TRANSMIT ENCRYPTED MESSAGE
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
