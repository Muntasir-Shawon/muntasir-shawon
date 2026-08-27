import { ArrowUp, Github, Instagram, Mail, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-slate-100 text-lg">
                A.K.M. Muntasir Uddin Shawon
              </span>
              <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-semibold border border-sky-500/20">
                CSE @ NSU
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Engineering intelligence through code • Capturing emotion through light.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Muntasir-Shawon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/muntasir_shawon"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:muntasir.shawon78@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all hover:scale-105 active:scale-95"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Muntasir Shawon. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with</span>
            <span className="text-sky-400 font-semibold">React</span>
            <span>&</span>
            <span className="text-rose-400 font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
