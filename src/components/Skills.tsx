import { useState } from "react";
import { Code2, Brain, Layout, Database, Wrench, Terminal, Cpu, ShieldCheck } from "lucide-react";
import { BatInsignia } from "./BatInsignia";

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  code: string;
  skills: { name: string; level: string; description: string; badge: string }[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const skillCategories: SkillCategory[] = [
    {
      title: "Core Languages",
      icon: <Code2 className="w-5 h-5 text-bat-gold" />,
      code: "LANG_CORE",
      skills: [
        { name: "Python", level: "Advanced", description: "AI/ML Modeling, Data Engineering, FastAPI Services", badge: "Primary" },
        { name: "TypeScript", level: "Proficient", description: "Type-safe Frontends, Scalable Architecture", badge: "Modern" },
        { name: "JavaScript (ES6+)", level: "Proficient", description: "Async Operations, DOM, Modern Web APIs", badge: "Core" },
        { name: "C++", level: "Intermediate", description: "Data Structures, Algorithmic Analysis, OOP", badge: "Academic" },
        { name: "C", level: "Intermediate", description: "Memory Allocation, Pointers, Low-Level Systems", badge: "Academic" },
        { name: "SQL (MySQL)", level: "Proficient", description: "Complex Queries, Indexing, Schema Optimization", badge: "Database" },
        { name: "HTML5 & CSS3", level: "Advanced", description: "Semantic Architecture, Responsive Layouts", badge: "Frontend" },
      ],
    },
    {
      title: "Neural AI & Data Science",
      icon: <Brain className="w-5 h-5 text-bat-blue" />,
      code: "AI_ML_DS",
      skills: [
        { name: "PyTorch & Deep Learning", level: "Advanced", description: "Semantic Segmentation, CNNs, U-Net++, DeepLabV3+, Transfer Learning", badge: "Deep Learning" },
        { name: "Geospatial AI & Remote Sensing", level: "Proficient", description: "QGIS, GDAL, GeoTIFF Pipeline, Spatial Alignment, Tiling", badge: "GIS / Vision" },
        { name: "Explainable AI (XAI)", level: "Proficient", description: "SHAP, LIME, Model Interpretability & Transparency", badge: "Research" },
        { name: "LangChain & LLMs", level: "Proficient", description: "Agentic Workflows, Conversational Memory, RAG", badge: "AI Agents" },
        { name: "FastAPI", level: "Proficient", description: "High-performance Asynchronous Python Microservices", badge: "Backend AI" },
        { name: "Gemini AI & LLMs", level: "Proficient", description: "Multimodal Inference, Prompt Pipelines, Structured JSON", badge: "GenAI" },
        { name: "Scikit-Learn", level: "Proficient", description: "Predictive Models, Classifiers, Evaluation Metrics", badge: "ML Core" },
        { name: "Pandas & NumPy", level: "Advanced", description: "Data Wrangling, High-performance Matrix Ops", badge: "Data Science" },
      ],
    },
    {
      title: "Full-Stack & Mobile Defense",
      icon: <Layout className="w-5 h-5 text-amber-400" />,
      code: "WEB_MOBILE",
      skills: [
        { name: "React & React Native", level: "Proficient", description: "Cross-platform Mobile (Expo) & Modern Web SPAs", badge: "Frontend / Mobile" },
        { name: "Node.js & Express", level: "Proficient", description: "RESTful Endpoints, Auth Security, Middlewares", badge: "Backend" },
        { name: "Tailwind CSS", level: "Advanced", description: "Utility-first Design, Custom HUDs & Themes", badge: "Styling" },
        { name: "Vite", level: "Advanced", description: "High-speed Bundling, HMR, Optimized Production", badge: "Build Tool" },
        { name: "Radix UI / Shadcn", level: "Proficient", description: "Accessible Primitives, Headless Component Tokens", badge: "UI System" },
      ],
    },
    {
      title: "DevOps & Arsenal",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      code: "TOOLS_OPS",
      skills: [
        { name: "MySQL", level: "Proficient", description: "Relational Modeling, Constraints, Query Profiling", badge: "RDBMS" },
        { name: "Git & GitHub", level: "Advanced", description: "Version Control, Feature Branching, Workflows", badge: "VCS" },
        { name: "VS Code", level: "Advanced", description: "Custom Extensions, Remote Dev, Fast Workflows", badge: "IDE" },
        { name: "Postman", level: "Proficient", description: "API Contract Testing, Payload Debugging", badge: "Testing" },
        { name: "Linux / Bash", level: "Intermediate", description: "Shell Automation, Environment Orchestration", badge: "CLI" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bat-gold/10 border border-bat-gold/30 text-xs font-mono font-bold text-bat-gold">
            <BatInsignia size={14} className="text-bat-gold" />
            <span>BATCOMPUTER ARSENAL // 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            WayneTech <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            A comprehensive suite of modern programming languages, AI/ML pipelines, and engineering frameworks leveraged to build mission-critical solutions.
          </p>
        </div>

        {/* Tab Buttons for Categories */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeTab === idx
                  ? "bg-[#101420] text-bat-gold border border-bat-gold shadow-lg shadow-bat-gold/15 scale-105"
                  : "bg-[#0A0C13]/90 text-slate-400 hover:text-slate-200 border border-bat-border hover:bg-[#121622]"
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline-block">[{category.code}]</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className="hud-card rounded-2xl p-5 border border-bat-border hover:border-bat-gold/50 flex flex-col justify-between group tactical-border"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-orbitron font-bold text-slate-100 text-base group-hover:text-bat-gold transition-colors">
                    {skill.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-[#080A10] text-bat-gold border border-bat-gold/30 text-[10px] font-mono font-bold">
                    {skill.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-bat-border flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">CLEARANCE</span>
                <span className="text-bat-gold font-bold">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Technology Ecosystem Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#080A10] border border-bat-border text-center space-y-4 relative overflow-hidden">
          <div className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold flex items-center justify-center gap-2">
            <BatInsignia size={16} className="text-bat-gold" />
            <span>UNIFIED WAYNETECH ECOSYSTEM // DIRECT MATRIX</span>
          </div>
          <div className="flex justify-center">
            <a href="https://github.com/Muntasir-Shawon" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-[#0B0E17] border border-bat-border hover:border-bat-gold/40 transition-all inline-block">
              <img
                src="https://skillicons.dev/icons?i=python,ts,js,cpp,c,mysql,fastapi,react,nodejs,tailwind,vite,html,css,git,github,vscode,postman&perline=9"
                alt="Technology Stack Icons"
                className="hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
