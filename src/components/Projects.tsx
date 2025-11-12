import { ExternalLink, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiProjectBg from "@/assets/ai-project-bg.jpg";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "AI Fitness & Nutrition Tracking System",
      description:
        "An interactive chatbot system designed for comprehensive fitness and nutritional tracking. Leverages machine learning and large language models to provide personalized health recommendations and insights.",
      technologies: [
        "Python",
        "LangChain",
        "deepseek API",
        "Streamlit",
        "Machine Learning",
        "LLMs",
      ],
      features: [
        "Interactive AI chatbot interface",
        "Personalized fitness tracking",
        "Nutritional analysis and recommendations",
        "Real-time data visualization",
      ],
      gradient: "from-accent/10 to-transparent",
    },
    {
      icon: TrendingUp,
      title: "Life Satisfaction Prediction using ML & XAI",
      description:
        "A predictive analytics system that estimates life satisfaction scores based on socioeconomic and lifestyle data. Incorporates Explainable AI techniques to provide transparent insights into prediction factors.",
      technologies: [
        "Python",
        "Machine Learning",
        "Explainable AI (XAI)",
        "Data Visualization",
        "Predictive Analytics",
      ],
      features: [
        "Socioeconomic data analysis",
        "Life satisfaction prediction",
        "Explainable AI insights",
        "Interactive data visualizations",
      ],
      gradient: "from-coral/10 to-transparent",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions solving real-world problems
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div
                    className={`lg:col-span-1 p-8 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-5">
                      <img src={aiProjectBg} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="inline-block p-6 bg-background rounded-2xl shadow-lg mb-4">
                        <Icon className="h-12 w-12 text-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-foreground leading-relaxed mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="group">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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
