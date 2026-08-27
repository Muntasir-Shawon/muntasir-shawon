import { useState } from "react";
import { Github, ExternalLink, Sparkles, Brain, Code2, Database, ArrowUpRight, FolderGit2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "ai-ml" | "full-stack" | "data-cpp";
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  icon: JSX.Element;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "interviewmate-ai",
      title: "InterviewMate-AI",
      category: "ai-ml",
      description:
        "AI-powered interview preparation platform with automated CV parsing, ATS scoring algorithm, and dynamic interview question generation using FastAPI and Google Gemini AI.",
      tags: ["FastAPI", "Gemini AI", "TypeScript", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/Muntasir-Shawon/InterviewMate-AI",
      featured: true,
      icon: <Brain className="w-5 h-5 text-sky-400" />,
    },
    {
      id: "life-satisfaction-xai",
      title: "Life Satisfaction Prediction (XAI)",
      category: "ai-ml",
      description:
        "Predictive machine learning pipeline estimating life satisfaction indices, paired with Explainable AI (XAI) techniques to interpret model predictions and feature importance transparently.",
      tags: ["Python", "Machine Learning", "Explainable AI", "Scikit-Learn", "Pandas"],
      githubUrl:
        "https://github.com/Muntasir-Shawon/Life-Satisfaction-prediction-using-Machine-Learning-and-Explainable-AI",
      featured: true,
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
    },
    {
      id: "creative-portfolio",
      title: "Creative Portfolio & Visual Gallery",
      category: "full-stack",
      description:
        "Modern, responsive personal portfolio blending software engineering showcase with artistic photography curation and interactive lightboxes.",
      tags: ["TypeScript", "React 18", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/Muntasir-Shawon/muntasir-shawon",
      liveUrl: "https://muntasir-shawon.lovable.app",
      featured: true,
      icon: <Code2 className="w-5 h-5 text-rose-400" />,
    },
    {
      id: "covid-19-analytics",
      title: "COVID-19 Data Analytics & EDA",
      category: "data-cpp",
      description:
        "Exploratory Data Analysis (EDA) uncovering epidemiological patterns, geographical infection curves, and statistical distributions using Python.",
      tags: ["Python", "EDA", "Pandas", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/Muntasir-Shawon/Covid-19-data-analysis",
      featured: false,
      icon: <Database className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: "cpp-algorithms",
      title: "C/C++ Algorithmic Suite",
      category: "data-cpp",
      description:
        "Core computer science problem-solving repository featuring data structures, algorithmic complexity optimization, and academic programming implementations.",
      tags: ["C++", "C", "Data Structures", "Algorithms", "OOP"],
      githubUrl: "https://github.com/Muntasir-Shawon/c-cpp-practice-programs",
      featured: false,
      icon: <FolderGit2 className="w-5 h-5 text-amber-400" />,
    },
    {
      id: "responsive-web",
      title: "Responsive Web Architectures",
      category: "full-stack",
      description:
        "Modern cross-platform responsive layouts focusing on mobile-first design, semantic HTML5, CSS animations, and UI/UX best practices.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Muntasir-Shawon/responsive-website-project",
      featured: false,
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Featured <span className="text-gradient">Projects & Research</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A curated selection of intelligent systems, machine learning pipelines, and full-stack software applications I have built.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai-ml", label: "AI & Machine Learning" },
            { id: "full-stack", label: "Full-Stack Web" },
            { id: "data-cpp", label: "Data Science & C++" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === tab.id
                  ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Featured Badge Glow */}
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-sky-500/20 to-transparent px-4 py-1.5 rounded-bl-2xl text-[10px] font-bold text-sky-400 uppercase tracking-wider border-b border-l border-sky-500/30">
                    Featured
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-sky-500/40 group-hover:scale-110 transition-all">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-800/80 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold transition-all hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Footer Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Muntasir-Shawon?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-sm font-medium text-slate-200 transition-all hover:scale-105"
          >
            <Github className="w-4 h-4 text-sky-400" />
            <span>Explore All 10+ Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
