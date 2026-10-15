import { useState } from "react";
import { Github, ExternalLink, Sparkles, Brain, Code2, Database, ArrowUpRight, Dumbbell, ShieldAlert, Cpu, Layers, Activity, PenTool, GraduationCap, BarChart3 } from "lucide-react";
import { BatInsignia } from "./BatInsignia";

interface Project {
  id: string;
  title: string;
  category: "ai-ml" | "full-stack" | "data-cpp";
  codeName: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  badgeText?: string;
  icon: JSX.Element;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "satellite-building-segmentation",
      title: "Satellite Building Segmentation (IEEE IS 2026)",
      category: "ai-ml",
      codeName: "RESEARCH // IEEE-IS2026",
      description:
        "Accepted at the 2026 13th IEEE International Conference on Intelligent Systems. An automated GIS-integrated deep learning framework evaluating 7 semantic segmentation architectures (U-Net++, DeepLabV3+, ResNet50 U-Net, etc.) across 4,193 GeoTIFF tiles, achieving 0.823 mIoU and 0.903 Dice score for urban monitoring and CDA no-development zones.",
      tags: ["PyTorch", "U-Net++", "DeepLabV3+", "QGIS", "GDAL", "GeoTIFF", "IEEE IS 2026", "Remote Sensing"],
      githubUrl: "https://github.com/Muntasir-Shawon",
      featured: true,
      badgeText: "IEEE ACCEPTED '26",
      icon: <Layers className="w-5 h-5 text-bat-gold" />,
    },
    {
      id: "dhakasafe-ai",
      title: "DhakaSafe AI — Street Theft Risk & Safer Route Engine",
      category: "ai-ml",
      codeName: "URBAN-DEFENSE // DHAKASAFE",
      description:
        "AI-powered urban street theft risk prediction and risk-weighted Dijkstra safer route recommendation engine tailored for Dhaka. Integrates tree ensemble models (XGBoost, LightGBM, Random Forest), TreeSHAP explainability, spatial graph routing via NetworkX, FastAPI backend, and interactive React 19 UI.",
      tags: ["FastAPI", "React 19", "TypeScript", "XGBoost", "LightGBM", "TreeSHAP", "NetworkX", "Dijkstra"],
      githubUrl: "https://github.com/Muntasir-Shawon/DhakaSafe-AI",
      liveUrl: "https://dhakasafe-ai-teal.vercel.app",
      featured: true,
      badgeText: "LIVE SYSTEM",
      icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: "nexus-urban-nervous-system",
      title: "NEXUS — AI Urban Nervous System (Flood & Mobility)",
      category: "ai-ml",
      codeName: "MISSION-CRITICAL // NEXUS-URBAN",
      description:
        "Real-time multimodal AI decision-support platform for urban flood intelligence, disaster response, and mobility resilience across Dhaka Metropole. Models flood cascade predictions, network graph routing, emergency dispatching, and ethical AI governance compliance (UNESCO & ITU).",
      tags: ["React", "FastAPI", "NetworkX", "TypeScript", "Tailwind CSS", "Graph Algorithms", "Urban AI"],
      githubUrl: "https://github.com/Muntasir-Shawon/nexus-urban-nervous-system",
      liveUrl: "https://muntasir-shawon.github.io/nexus-urban-nervous-system/",
      featured: true,
      badgeText: "OPERATIONAL",
      icon: <Activity className="w-5 h-5 text-bat-blue" />,
    },
    {
      id: "handwrite-ai",
      title: "HandWrite AI — Bilingual Handwriting Generation (PyTorch)",
      category: "ai-ml",
      codeName: "DEEP-LEARNING // HANDWRITE-AI",
      description:
        "Research-grade deep learning architecture converting typed English & Bangla text into natural, continuous, and personalized handwritten document trajectories. Features ResNet style encoder, BiLSTM text encoder, Gaussian window attention, and Mixture Density Networks (MDN), achieving 95.88% recognition accuracy on IAM and 93.15% on BanglaWriting.",
      tags: ["PyTorch", "Deep Learning", "FastAPI", "React", "BiLSTM", "MDN", "Attention", "English & Bangla"],
      githubUrl: "https://github.com/Muntasir-Shawon/handwrite-ai",
      featured: true,
      badgeText: "RESEARCH ML",
      icon: <PenTool className="w-5 h-5 text-amber-400" />,
    },
    {
      id: "ielts-ai-coach",
      title: "IELTS AI Coach — Full-Stack AI Preparation Platform",
      category: "full-stack",
      codeName: "SYSTEM // IELTS-AI-COACH",
      description:
        "Production-grade, full-stack AI platform designed for students preparing for IELTS Academic and General Training examinations. Integrates ML predictive band scoring algorithms, interactive test modules, simulated practice exams, and real-time performance analytics built with FastAPI, React 18, and Scikit-Learn.",
      tags: ["FastAPI", "React 18", "TypeScript", "Scikit-Learn", "Tailwind CSS", "Python", "Vite"],
      githubUrl: "https://github.com/Muntasir-Shawon/ielts-ai-coach",
      liveUrl: "https://muntasir-shawon.github.io/ielts-ai-coach/",
      featured: true,
      badgeText: "DEPLOYED",
      icon: <GraduationCap className="w-5 h-5 text-bat-gold" />,
    },
    {
      id: "bangladesh-ecommerce-intelligence",
      title: "Bangladesh E-Commerce Customer Intelligence Platform",
      category: "data-cpp",
      codeName: "ENTERPRISE // BD-ECOMMERCE",
      description:
        "Enterprise-grade customer intelligence and analytics platform modeled for Bangladesh e-commerce across all 8 divisions (70,936 orders, ৳436.66M GMV). Powered by PostgreSQL, DuckDB, RFM segmentation, Customer Lifetime Value (CLV), churn prediction models (XGBoost, Random Forest), SHAP explainability, and Power BI dashboards.",
      tags: ["Python", "PostgreSQL", "DuckDB", "XGBoost", "SHAP (XAI)", "Power BI", "RFM / CLV", "Scikit-Learn"],
      githubUrl: "https://github.com/Muntasir-Shawon/bangladesh-ecommerce-customer-intelligence",
      featured: true,
      badgeText: "ENTERPRISE BI",
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: "fitnut-system",
      title: "FitNut — Fitness & Nutrition Ecosystem",
      category: "full-stack",
      codeName: "PROJECT // FITNUT-AI",
      description:
        "Cross-platform fitness and nutrition management ecosystem featuring a LangChain-powered AI Assistant for dynamic meal planning, macro calculation, personalized workout scheduling, and real-time metric tracking.",
      tags: ["React Native", "Expo", "Node.js", "Express", "MySQL", "LangChain", "AI Chatbot"],
      githubUrl: "https://github.com/Muntasir-Shawon/FitNut-Fitness-Nutrition-System",
      featured: true,
      icon: <Dumbbell className="w-5 h-5 text-bat-gold" />,
    },
    {
      id: "interviewmate-ai",
      title: "InterviewMate-AI",
      category: "ai-ml",
      codeName: "PROJECT // INTERVIEWMATE",
      description:
        "AI-powered interview simulation and candidate evaluation platform featuring automated CV parsing, ATS scoring algorithm, and real-time behavioral/technical question generation via FastAPI and Google Gemini AI.",
      tags: ["FastAPI", "Gemini AI", "TypeScript", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/Muntasir-Shawon/InterviewMate-AI",
      featured: true,
      icon: <Brain className="w-5 h-5 text-bat-blue" />,
    },
    {
      id: "life-satisfaction-xai",
      title: "Life Satisfaction Prediction (XAI)",
      category: "ai-ml",
      codeName: "RESEARCH // XAI-MODELS",
      description:
        "Machine learning predictive pipeline estimating multidimensional life satisfaction indices, paired with Explainable AI (XAI / SHAP / LIME) techniques to interpret model inferences and feature importance transparently.",
      tags: ["Python", "Machine Learning", "Explainable AI", "Scikit-Learn", "Pandas"],
      githubUrl:
        "https://github.com/Muntasir-Shawon/Life-Satisfaction-prediction-using-Machine-Learning-and-Explainable-AI",
      featured: true,
      icon: <Brain className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: "creative-portfolio",
      title: "Gotham / Batman Themed Portfolio",
      category: "full-stack",
      codeName: "DEPLOYMENT // PORTFOLIO-V2",
      description:
        "Cutting-edge personal engineering and photography portal engineered with Batman/WayneTech design language, dynamic typing, responsive interactive lightboxes, and glassmorphism HUD cards.",
      tags: ["TypeScript", "React 18", "Tailwind CSS", "Vite", "WayneTech HUD"],
      githubUrl: "https://github.com/Muntasir-Shawon/muntasir-shawon",
      liveUrl: "https://muntasir-shawon.github.io/muntasir-shawon/",
      featured: true,
      icon: <Code2 className="w-5 h-5 text-bat-gold" />,
    },
    {
      id: "covid-19-analytics",
      title: "COVID-19 Data Analytics & EDA",
      category: "data-cpp",
      codeName: "ANALYTICS // PANDEMIC-EDA",
      description:
        "Exploratory Data Analysis (EDA) uncovering epidemiological patterns, geographical infection curves, and statistical distributions using Python, Pandas, and Matplotlib.",
      tags: ["Python", "EDA", "Pandas", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/Muntasir-Shawon/Covid-19-data-analysis",
      featured: false,
      icon: <Database className="w-5 h-5 text-amber-400" />,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bat-gold/10 border border-bat-gold/30 text-xs font-mono font-bold text-bat-gold">
            <BatInsignia size={14} className="text-bat-gold" />
            <span>TACTICAL DEFENSE SYSTEMS // 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-gradient">Projects & Research</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            A curated selection of intelligent systems, machine learning architectures, and full-stack software applications I have architected and deployed.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: "all", label: "All Systems" },
            { id: "full-stack", label: "Full-Stack & Mobile" },
            { id: "ai-ml", label: "AI & Machine Learning" },
            { id: "data-cpp", label: "Data Science & Analytics" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
                filter === tab.id
                  ? "bg-bat-gold text-[#06070a] border border-bat-gold shadow-md shadow-bat-gold/25 font-bold"
                  : "bg-[#0A0C13]/90 text-slate-400 hover:text-slate-200 border border-bat-border hover:bg-[#121622]"
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
              className="hud-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden tactical-border"
            >
              {/* Featured Badge Glow */}
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-bat-gold/20 to-transparent px-4 py-1.5 rounded-bl-2xl text-[10px] font-mono font-bold text-bat-gold uppercase tracking-wider border-b border-l border-bat-gold/30">
                    {project.badgeText || "OPERATIONAL"}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Code Name & Icon Header */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#080A10] border border-bat-border group-hover:border-bat-gold/50 group-hover:scale-105 transition-all">
                    {project.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-bat-gold">
                      {project.codeName}
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-slate-100 group-hover:text-bat-gold transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-[#080A10] border border-bat-border text-[11px] font-mono font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-bat-border flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-bat-gold transition-colors"
                >
                  <Github className="w-4 h-4 text-bat-gold" />
                  <span>SOURCE CODE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-bat-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-bat-gold text-[#06070a] font-mono text-xs font-bold transition-all hover:scale-105 shadow-md shadow-bat-gold/20"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3 h-3 text-[#06070a]" />
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
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#090B12] hover:bg-[#121624] border border-bat-border hover:border-bat-gold/50 text-xs sm:text-sm font-mono font-semibold text-slate-200 transition-all hover:scale-105"
          >
            <BatInsignia size={16} className="text-bat-gold" />
            <span>EXPLORE ALL 18+ REPOSITORIES ON GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
