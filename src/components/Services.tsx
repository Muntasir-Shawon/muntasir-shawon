import { Brain, Camera } from "lucide-react";
import aiProjectBg from "@/assets/ai-project-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Model Development",
      description:
        "Designing and building ML and LLM-based solutions for prediction, automation, and intelligent data analysis. Specialized in computer vision projects including image segmentation and object detection.",
      features: [
        "Machine Learning Models",
        "Large Language Models (LLMs)",
        "Computer Vision Systems",
        "Predictive Analytics",
        "Intelligent Automation",
      ],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Camera,
      title: "Photography Services",
      description:
        "Creative photography capturing meaningful moments and visual stories with an artistic and professional touch. Specializing in natural landscapes, portraits, and artistic compositions.",
      features: [
        "Nature & Landscape Photography",
        "Portrait Photography",
        "Artistic Composition",
        "Professional Editing",
        "Visual Storytelling",
      ],
      gradient: "from-coral/20 to-coral/5",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <img src={aiProjectBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Services I Provide</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border bg-gradient-to-br ${service.gradient}`}
              >
                <div className="mb-6">
                  <div className="inline-block p-4 bg-background rounded-xl shadow-sm mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary mb-3">Key Offerings:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
