import { Brain, TrendingUp, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "AI Fitness Tracker",
      description:
        "Interactive chatbot for fitness and nutrition tracking using ML, LLMs, and Streamlit.",
      tech: ["Python", "LangChain", "ML", "Streamlit"],
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "Life Satisfaction ML",
      description:
        "Predictive analytics for life satisfaction using Explainable AI and data visualization.",
      tech: ["Python", "ML", "XAI", "Data Viz"],
      color: "coral",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            AI/ML Projects
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining machine learning with real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const bgColor = project.color === "accent" ? "bg-accent/10" : "bg-coral/10";
            const iconColor = project.color === "accent" ? "text-accent" : "text-coral";
            const borderColor = project.color === "accent" ? "border-accent" : "border-coral";
            
            return (
              <div
                key={index}
                className={`${bgColor} border-2 ${borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-background rounded-xl ${iconColor}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${project.color === "accent" ? "bg-accent" : "bg-coral"} ${project.color === "accent" ? "text-accent-foreground" : "text-white"} rounded-full text-xs font-semibold`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2 group">
                    View Project Details
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
