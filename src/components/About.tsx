import { GraduationCap, Brain, Code, Camera, Sparkles, Award, BookOpen, Compass } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: <Brain className="w-6 h-6 text-sky-400" />,
      title: "AI, ML & Explainable AI",
      description:
        "Building predictive algorithms, LLM integrations with Gemini AI/FastAPI, and applying Explainable AI (XAI / SHAP / LIME) to make complex machine learning systems interpretable.",
      tag: "Intelligent Systems",
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      title: "Full-Stack Development",
      description:
        "Developing end-to-end modern web applications with React, TypeScript, Vite, Tailwind CSS, and RESTful APIs with Python and Node.js.",
      tag: "Software Engineering",
    },
    {
      icon: <Camera className="w-6 h-6 text-rose-400" />,
      title: "Photography & Visual Storytelling",
      description:
        "Capturing human emotion, street narratives, and lighting aesthetics. Blending an artist's eye for detail with an engineer's passion for precision.",
      tag: "Creative Direction",
    },
  ];

  const milestones = [
    {
      year: "Academic Focus",
      title: "B.Sc. in Computer Science and Engineering",
      institution: "North South University (NSU), Dhaka",
      details: "Core Coursework: Data Structures, Algorithms, AI, Database Management Systems, Machine Learning, Web Technologies.",
    },
    {
      year: "Engineering Work",
      title: "AI & Full-Stack Projects Development",
      institution: "InterviewMate-AI & Life Satisfaction XAI",
      details: "Engineered AI-driven ATS analyzers, predictive ML models, and interactive web platforms.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Academic Foundation & <span className="text-gradient">Creative Philosophy</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A CSE undergraduate exploring the synergy between analytical engineering and artistic visual storytelling.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 relative flex flex-col justify-between group hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Foundation Card & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800/80">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100">
                  North South University
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Bachelor of Science in Computer Science & Engineering (CSE)
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My engineering journey is rooted in rigorous computer science principles—ranging from data structures and algorithmic complexity to machine learning architectures and modern full-stack web applications. I believe software engineering is at its best when paired with empathy, user-centric design, and clear problem definition.
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Core Academic Areas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Explainable AI (XAI)",
                  "Artificial Intelligence",
                  "Object-Oriented Programming (C++/Python)",
                  "Web Technologies",
                ].map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                10+
              </div>
              <div className="text-xs font-semibold text-slate-300">Public Repositories</div>
              <div className="text-[11px] text-slate-500">AI, ML, Web & C++</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
                100%
              </div>
              <div className="text-xs font-semibold text-slate-300">Dedication</div>
              <div className="text-[11px] text-slate-500">To Clean Code & Art</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                CSE
              </div>
              <div className="text-xs font-semibold text-slate-300">Degree Candidate</div>
              <div className="text-[11px] text-slate-500">North South University</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Visual
              </div>
              <div className="text-xs font-semibold text-slate-300">Storyteller</div>
              <div className="text-[11px] text-slate-500">Portrait & Light Artist</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
