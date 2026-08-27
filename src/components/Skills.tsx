import { useState } from "react";
import { Code2, Brain, Layout, Database, Wrench, Layers, Terminal, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: { name: string; level: string; description: string; badge: string }[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      skills: [
        { name: "Python", level: "Advanced", description: "Data Analysis, ML Models, Scripting, FastAPI", badge: "Primary" },
        { name: "TypeScript", level: "Proficient", description: "Type-safe Frontends, React Components", badge: "Modern" },
        { name: "JavaScript (ES6+)", level: "Proficient", description: "Asynchronous programming, DOM, Web APIs", badge: "Core" },
        { name: "C++", level: "Intermediate", description: "Data Structures, Algorithms, OOP", badge: "Academic" },
        { name: "C", level: "Intermediate", description: "Memory Management, Low-level concepts", badge: "Academic" },
        { name: "SQL (MySQL)", level: "Proficient", description: "Schema Design, Complex Queries, Joins", badge: "Database" },
        { name: "HTML5 & CSS3", level: "Advanced", description: "Semantic Markup, Responsive layouts", badge: "Frontend" },
      ],
    },
    {
      title: "AI, ML & Data Science",
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: "FastAPI", level: "Proficient", description: "High-performance Python backend APIs", badge: "Backend AI" },
        { name: "Gemini AI & LLMs", level: "Proficient", description: "Prompt engineering, Multimodal APIs", badge: "Generative AI" },
        { name: "Explainable AI (XAI)", level: "Proficient", description: "SHAP, LIME, Feature Importance", badge: "Research" },
        { name: "Scikit-Learn", level: "Proficient", description: "Classification, Regression, Pipelines", badge: "ML Core" },
        { name: "Pandas & NumPy", level: "Advanced", description: "Data Manipulation, Matrix Ops, Cleaning", badge: "Data Science" },
        { name: "Matplotlib & Seaborn", level: "Proficient", description: "Statistical data visualization", badge: "Analytics" },
      ],
    },
    {
      title: "Web & Frameworks",
      icon: <Layout className="w-5 h-5 text-rose-400" />,
      skills: [
        { name: "React 18", level: "Proficient", description: "Hooks, Component Architecture, State", badge: "Frontend" },
        { name: "Tailwind CSS", level: "Advanced", description: "Utility-first, Glassmorphism, Dark mode", badge: "Styling" },
        { name: "Vite", level: "Advanced", description: "Fast bundling, Modern dev ecosystem", badge: "Build Tool" },
        { name: "Node.js & Express", level: "Intermediate", description: "REST APIs, Middleware, Auth flows", badge: "Backend" },
        { name: "Radix UI / Shadcn", level: "Proficient", description: "Accessible UI components & tokens", badge: "UI Library" },
      ],
    },
    {
      title: "Tools, Databases & DevOps",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: "MySQL", level: "Proficient", description: "Relational modeling, indexing, relations", badge: "RDBMS" },
        { name: "Git & GitHub", level: "Advanced", description: "Version control, branching, Actions CI/CD", badge: "VCS" },
        { name: "VS Code", level: "Advanced", description: "Custom extensions, debugging workflows", badge: "Editor" },
        { name: "Postman", level: "Proficient", description: "API testing, endpoint documentation", badge: "Testing" },
        { name: "Linux / Bash", level: "Intermediate", description: "Command-line scripting, env management", badge: "Environment" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Tools & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive suite of modern programming languages, AI/ML tools, and frameworks I leverage to engineer high-impact solutions.
          </p>
        </div>

        {/* Tab Buttons for Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === idx
                  ? "bg-slate-800 text-sky-400 border border-sky-500/40 shadow-lg shadow-sky-500/10"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800/50"
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-sky-500/40 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-100 text-lg group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-md bg-slate-900 text-sky-400 border border-slate-800 text-[10px] font-semibold">
                    {skill.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-500">Proficiency</span>
                <span className="text-slate-300 font-semibold">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Visual Palette Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-center space-y-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Unified Technology Ecosystem
          </div>
          <div className="flex justify-center">
            <a href="https://github.com/Muntasir-Shawon" target="_blank" rel="noreferrer">
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
