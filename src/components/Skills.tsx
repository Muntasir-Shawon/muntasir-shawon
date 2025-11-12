import { Code2, Cpu, Camera, Users, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "C/C++", "Java", "JavaScript", "SQL"],
      bgColor: "bg-accent",
      textColor: "text-accent-foreground"
    },
    {
      icon: Cpu,
      title: "AI/ML Tools",
      skills: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API"],
      bgColor: "bg-coral",
      textColor: "text-white"
    },
    {
      icon: Camera,
      title: "Creative",
      skills: ["Lightroom", "Photoshop", "Photography"],
      bgColor: "bg-primary",
      textColor: "text-white"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem-Solving", "Creativity", "Collaboration"],
      bgColor: "bg-muted",
      textColor: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-yellow-light/30 to-background relative">
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="h-20 w-20 text-accent" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const rotation = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
            
            return (
              <div
                key={index}
                className={`${category.bgColor} ${category.textColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transform ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="h-12 w-12 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-sm font-medium opacity-90"
                      >
                        {skill}
                      </div>
                    ))}
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

export default Skills;
