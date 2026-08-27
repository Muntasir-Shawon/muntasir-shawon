import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Camera, Brain, Code2, Database, Github, Instagram, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const titles = [
    "AI & Machine Learning Developer",
    "Explainable AI (XAI) Enthusiast",
    "Full-Stack Web Engineer",
    "Photographer & Visual Storyteller",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(60);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(150);
        } else {
          setTypingSpeed(35);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed, titles]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Interactive Headlines */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for CSE & AI/ML Opportunities</span>
            </div>

            {/* Main Name & Dynamic Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                Hi, I&apos;m <br />
                <span className="text-gradient font-black">
                  Muntasir Shawon
                </span>
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 font-mono flex items-center">
                  <span className="text-sky-400 mr-2">&gt;</span>
                  {displayedText}
                  <span className="inline-block w-2.5 h-6 ml-1 bg-sky-400 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Core Philosophy Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Computer Science & Engineering student at <strong className="text-slate-200">North South University</strong>. 
              Engineering intelligent systems with <span className="text-sky-300">FastAPI, Machine Learning & LLMs</span>, while 
              capturing human moments through the lens of <span className="text-rose-300">photography</span>.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-300 hover:opacity-95 shadow-lg shadow-sky-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#gallery"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              >
                <Camera className="w-4 h-4 text-rose-400" />
                <span>Photography Exhibition</span>
              </a>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Socials:</span>
              <a
                href="https://github.com/Muntasir-Shawon"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-slate-800 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/muntasir_shawon"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Photography"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/50 hover:bg-slate-800 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:muntasir.shawon78@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Photo & Interactive Badges Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Glowing Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500 via-indigo-500 to-rose-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity" />
              
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800/80 p-5 shadow-2xl backdrop-blur-xl space-y-4">
                
                {/* Photo Header */}
                <div className="relative overflow-hidden rounded-xl bg-slate-950 aspect-[4/4.2] border border-slate-800 flex items-center justify-center">
                  <img
                    src={profilePhoto}
                    alt="A.K.M. Muntasir Uddin Shawon"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  {/* Photo Overlay Caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-white">A.K.M. Muntasir Uddin Shawon</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700 text-[10px] text-sky-400">
                      NSU • CSE
                    </span>
                  </div>
                </div>

                {/* Floating Highlight Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-slate-200">AI / ML & XAI</div>
                      <div className="text-[10px] text-slate-400">FastAPI & Gemini</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-slate-200">Photography</div>
                      <div className="text-[10px] text-slate-400">Light & Portraiture</div>
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
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-sky-400 transition-colors"
          >
            <span>DISCOVER MORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
