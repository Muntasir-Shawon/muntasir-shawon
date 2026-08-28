import { ArrowUp, Github, Instagram, Mail } from "lucide-react";
import { BatInsignia } from "./BatInsignia";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-bat-border bg-[#050609] py-12 px-4 relative overflow-hidden">
      {/* Background Bat Silhouette Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 opacity-[0.03] pointer-events-none">
        <BatInsignia size={260} className="text-bat-gold" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <BatInsignia size={18} className="text-bat-gold" />
              <span className="font-orbitron font-extrabold text-slate-100 text-base">
                A.K.M. MUNTASIR UDDIN SHAWON
              </span>
              <span className="px-2 py-0.5 rounded-full bg-bat-gold/10 text-bat-gold text-[10px] font-mono font-bold border border-bat-gold/30">
                CSE @ NSU
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Architecting intelligent defense systems through code • Capturing emotion through light.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Muntasir-Shawon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-[#0B0D14] border border-bat-border text-slate-400 hover:text-bat-gold hover:border-bat-gold/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/muntasir_shawon"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-[#0B0D14] border border-bat-border text-slate-400 hover:text-bat-gold hover:border-bat-gold/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:muntasir.shawon78@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-[#0B0D14] border border-bat-border text-slate-400 hover:text-bat-gold hover:border-bat-gold/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Return to Batcave Summit"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B0D14] border border-bat-border text-xs font-mono font-bold text-slate-300 hover:text-bat-gold hover:border-bat-gold/50 transition-all hover:scale-105 active:scale-95"
            >
              <span>RETURN TO SUMMIT</span>
              <ArrowUp className="w-3.5 h-3.5 text-bat-gold" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-bat-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Muntasir Shawon. Gotham Protocol // All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Engineered with</span>
            <span className="text-bat-gold font-bold">React & TypeScript</span>
            <span>•</span>
            <span className="text-slate-200 font-bold">WayneTech HUD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
