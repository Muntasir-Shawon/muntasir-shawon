import { GraduationCap, Brain, Code, Camera, Sparkles, Award, BookOpen, Compass, Shield, Terminal } from "lucide-react";
import { BatInsignia, WayneTechSeal } from "./BatInsignia";

const About = () => {
  const pillars = [
    {
      icon: <Brain className="w-6 h-6 text-bat-gold" />,
      title: "AI, ML & Explainable AI",
      description:
        "Developing predictive intelligence models, LLM integrations with Gemini AI & FastAPI, and applying Explainable AI (XAI / SHAP / LIME) to make complex black-box algorithms transparent and accountable.",
      tag: "Tactical Intelligence",
      code: "AI_MOD_01",
    },
    {
      icon: <Code className="w-6 h-6 text-bat-blue" />,
      title: "Full-Stack Architecture",
      description:
        "Building mission-critical web applications with React, TypeScript, Vite, and Tailwind CSS, coupled with high-concurrency RESTful APIs in Python (FastAPI) and Node.js.",
      tag: "Defense Systems",
      code: "SYS_ENG_02",
    },
    {
      icon: <Camera className="w-6 h-6 text-bat-crimson" />,
      title: "Noir Photography & Storytelling",
      description:
        "Mastering high-contrast shadows, ambient illumination, and raw human expressions. Bringing an engineer's meticulous precision to evocative visual art.",
      tag: "Gotham Visuals",
      code: "VIS_ART_03",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bat-gold/10 border border-bat-gold/30 text-xs font-mono font-bold text-bat-gold">
            <BatInsignia size={14} className="text-bat-gold" />
            <span>WAYNETECH DOSSIER // 01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            Academic Foundation & <span className="text-gradient">Tactical Vision</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            A CSE undergraduate at North South University forging synergy between analytical computer science, machine learning, and cinematic visual expression.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="hud-card rounded-2xl p-6 relative flex flex-col justify-between group hover:border-bat-gold/50 transition-all duration-300 tactical-border"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#080A10] border border-bat-border group-hover:border-bat-gold/40 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono font-bold text-bat-gold px-2.5 py-1 rounded bg-[#080A10] border border-bat-border">
                      {pillar.tag}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 mt-1">{pillar.code}</span>
                  </div>
                </div>
                <h3 className="text-lg font-orbitron font-bold text-slate-100 group-hover:text-bat-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Foundation Card & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hud-panel rounded-3xl p-8 sm:p-10 border border-bat-border relative overflow-hidden">
          
          {/* Subtle Background Bat Watermark */}
          <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
            <BatInsignia size={300} className="text-bat-gold" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-bat-gold/10 text-bat-gold border border-bat-gold/30">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-orbitron font-bold text-slate-100">
                    North South University
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                    ACCREDITED
                  </span>
                </div>
                <p className="text-sm font-mono text-slate-400">
                  Bachelor of Science in Computer Science & Engineering (CSE)
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              My engineering discipline is forged through rigorous computer science theory—from algorithmic time complexity and data structures to neural network inference and explainable AI. I believe robust software systems demand the precision of a tactician and the intuition of a creator.
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase font-mono tracking-wider text-bat-gold font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-bat-gold" />
                <span>CORE ACADEMIC & RESEARCH MODULES</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Data Structures & Algorithms",
                  "Explainable AI (XAI)",
                  "Database Management Systems",
                  "Artificial Intelligence",
                  "Object-Oriented Programming (C++/Python)",
                  "Web Technologies",
                ].map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#080A10] border border-bat-border text-xs font-mono font-medium text-slate-300 hover:text-bat-gold hover:border-bat-gold/40 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative z-10">
            <div className="p-5 rounded-2xl bg-[#080A10] border border-bat-border hover:border-bat-gold/40 text-center space-y-1 transition-all">
              <div className="text-3xl font-orbitron font-black text-bat-gold drop-shadow-[0_0_12px_rgba(245,197,24,0.3)]">
                10+
              </div>
              <div className="text-xs font-mono font-bold text-slate-200">Public Repositories</div>
              <div className="text-[11px] font-mono text-slate-500">AI, ML, Web & C++</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080A10] border border-bat-border hover:border-bat-gold/40 text-center space-y-1 transition-all">
              <div className="text-3xl font-orbitron font-black text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                100%
              </div>
              <div className="text-xs font-mono font-bold text-slate-200">Code Precision</div>
              <div className="text-[11px] font-mono text-slate-500">Clean Architecture</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080A10] border border-bat-border hover:border-bat-gold/40 text-center space-y-1 transition-all">
              <div className="text-3xl font-orbitron font-black text-bat-blue drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                CSE
              </div>
              <div className="text-xs font-mono font-bold text-slate-200">Degree Candidate</div>
              <div className="text-[11px] font-mono text-slate-500">North South University</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#080A10] border border-bat-border hover:border-bat-gold/40 text-center space-y-1 transition-all">
              <div className="text-3xl font-orbitron font-black text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]">
                Noir
              </div>
              <div className="text-xs font-mono font-bold text-slate-200">Visual Artist</div>
              <div className="text-[11px] font-mono text-slate-500">Portraiture & Light</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
