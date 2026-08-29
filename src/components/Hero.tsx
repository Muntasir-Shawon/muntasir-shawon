import { useState, useEffect } from "react";
import { ArrowRight, Terminal, Camera, Brain, Code2, Database, Github, Instagram, Mail, ChevronDown, ShieldCheck, Zap, Crosshair } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { BatInsignia } from "./BatInsignia";

const Hero = () => {
  const titles = [
    "IEEE Published AI & ML Researcher",
    "AI & Machine Learning Specialist",
    "Dark Knight of Explainable AI (XAI)",
    "Full-Stack Intelligence Architect",
    "Gotham Visual Storyteller & Photographer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(90);
        } else {
          setTypingSpeed(50);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(140);
        } else {
          setTypingSpeed(30);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed, titles]);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden"
    >
      {/* Bat-Signal Atmospheric Spotlight & Glowing Skyline Beam */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-bat-gold/15 via-amber-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      
      {/* Bat-Signal Silhouette Watermark in the Clouds */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-[0.07] pointer-events-none select-none animate-bat-pulse">
        <BatInsignia size={380} className="text-bat-gold drop-shadow-[0_0_80px_rgba(245,197,24,0.4)]" />
      </div>

      {/* Cyber/Tactical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: "linear-gradient(to right, #F5C518 1px, transparent 1px), linear-gradient(to bottom, #F5C518 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Batcomputer HUD Console */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tactical Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1119] border border-bat-gold/30 text-xs font-mono text-slate-300 shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-bat-gold animate-pulse"></span>
              <span className="text-bat-gold font-bold">GOTHAM PROTOCOL</span>
              <span className="text-slate-600">|</span>
              <span>CSE @ North South University</span>
            </div>

            {/* Main Name & Dynamic Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black text-slate-100 tracking-tight leading-[1.12]">
                I AM <br />
                <span className="text-gradient drop-shadow-[0_0_25px_rgba(245,197,24,0.3)]">
                  MUNTASIR SHAWON
                </span>
              </h1>
              
              <div className="h-12 sm:h-14 flex items-center">
                <div className="px-3.5 py-1.5 rounded-lg bg-[#0C0E15] border border-bat-border inline-flex items-center w-full max-w-xl">
                  <span className="text-bat-gold font-mono text-sm sm:text-base font-bold mr-2">
                    [SYS://&gt;]
                  </span>
                  <span className="text-base sm:text-xl md:text-2xl font-mono font-semibold text-slate-200 truncate">
                    {displayedText}
                  </span>
                  <span className="inline-block w-2.5 h-5 ml-1 bg-bat-gold animate-pulse" />
                </div>
              </div>
            </div>

            {/* Core Philosophy Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-sans">
              Computer Science & Engineering student at <strong className="text-slate-200">North South University</strong>. 
              Engineering intelligent systems with <span className="text-bat-gold font-medium">FastAPI, Machine Learning, Gemini AI & LLMs</span>, 
              while capturing the stark atmosphere of human emotion through the lens of <span className="text-slate-200 font-medium">Noir Photography</span>.
            </p>

            {/* Interactive Tactical CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-[#06070a] bg-gradient-to-r from-bat-gold via-amber-400 to-bat-yellow hover:brightness-110 shadow-lg shadow-bat-gold/25 transition-all hover:scale-105 active:scale-95 border border-bat-gold"
              >
                <BatInsignia size={18} className="text-[#06070a]" />
                <span>DEPLOY TACTICAL PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#gallery"
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-mono font-semibold text-xs sm:text-sm text-slate-200 bg-[#0F121B] hover:bg-[#161B28] border border-bat-border hover:border-bat-gold/50 transition-all hover:scale-105"
              >
                <Camera className="w-4 h-4 text-bat-gold" />
                <span>VISUAL VAULT // ARCHIVES</span>
              </a>
            </div>

            {/* Social Links & WayneTech Terminal Connect */}
            <div className="flex items-center gap-3 pt-4 border-t border-bat-border">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                SECURE FREQUENCIES:
              </span>
              <a
                href="https://github.com/Muntasir-Shawon"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-[#0D1018] border border-bat-border text-slate-400 hover:text-bat-gold hover:border-bat-gold/50 hover:bg-[#131722] transition-all"
                title="GitHub Dossier"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/muntasir_shawon"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Photography"
                className="p-2.5 rounded-xl bg-[#0D1018] border border-bat-border text-slate-400 hover:text-bat-gold hover:border-bat-gold/50 hover:bg-[#131722] transition-all"
                title="Visual Instagram Feed"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:muntasir.shawon78@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-[#0D1018] border border-bat-border text-slate-400 hover:text-bat-gold hover:border-bat-gold/50 hover:bg-[#131722] transition-all"
                title="Encrypted Email Channel"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Batman Tactical HUD Photo Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Glowing Bat Armor Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-bat-gold/30 via-amber-500/10 to-bat-gold/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative rounded-2xl bg-[#0B0D14] border border-bat-gold/30 p-5 shadow-2xl backdrop-blur-xl space-y-4 tactical-border">
                
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-bat-border">
                  <div className="flex items-center gap-1.5 text-bat-gold font-bold">
                    <Crosshair className="w-3.5 h-3.5 text-bat-gold" />
                    <span>TARGET LOCK // WAYNETECH</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#141824] border border-bat-border text-slate-300 text-[10px]">
                    CLEARANCE: LVL 9
                  </span>
                </div>

                {/* Photo Frame Container with Corner Crosshairs */}
                <div className="relative overflow-hidden rounded-xl bg-black aspect-[4/3.7] border border-bat-border flex items-center justify-center group">
                  <img
                    src={profilePhoto}
                    alt="A.K.M. Muntasir Uddin Shawon"
                    className="w-full h-full object-cover object-[center_30%] grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-[#06070a]/30 opacity-80" />
                  
                  {/* Watermark Bat Insignia Badge */}
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-[#080A10]/80 border border-bat-gold/40 text-bat-gold backdrop-blur-md shadow-lg shadow-black/80">
                    <BatInsignia size={18} className="text-bat-gold" />
                  </div>

                  {/* Photo Overlay Caption & Telemetry */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <div className="flex flex-col text-left">
                      <span className="font-orbitron font-bold text-white text-xs tracking-wider">
                        MUNTASIR SHAWON
                      </span>
                      <span className="text-[10px] font-mono text-bat-gold">
                        CODENAME: DARK KNIGHT
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#0D1019]/90 border border-bat-gold/40 text-[10px] font-mono font-semibold text-bat-gold">
                      NSU • CSE
                    </span>
                  </div>
                </div>

                {/* Floating Highlight Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-[#080A10] border border-bat-border flex items-center gap-2.5 hover:border-bat-gold/40 transition-colors">
                    <div className="p-2 rounded-lg bg-bat-gold/10 text-bat-gold border border-bat-gold/20">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div className="text-left font-mono">
                      <div className="text-xs font-bold text-slate-200">AI / ML & XAI</div>
                      <div className="text-[10px] text-bat-gold/80">Neural Intelligence</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#080A10] border border-bat-border flex items-center gap-2.5 hover:border-bat-gold/40 transition-colors">
                    <div className="p-2 rounded-lg bg-bat-gold/10 text-bat-gold border border-bat-gold/20">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div className="text-left font-mono">
                      <div className="text-xs font-bold text-slate-200">Photography</div>
                      <div className="text-[10px] text-slate-400">Noir & Light Art</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to Dossier Section"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-bat-gold transition-colors"
          >
            <span>ACCESS DOSSIER</span>
            <ChevronDown className="w-4 h-4 text-bat-gold animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
