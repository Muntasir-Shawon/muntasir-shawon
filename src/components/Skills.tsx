import { Code2, Cpu, Camera, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "SQL"],
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Cpu,
      title: "Frameworks & Tools",
      skills: ["TensorFlow", "PyTorch", "LangChain", "Streamlit", "Flask", "OpenAI API", "MySQL", "Git", "Jupyter", "VS Code"],
      bgColor: "bg-coral/10",
      iconColor: "text-coral"
    },
    {
      icon: Camera,
      title: "Creative Tools",
      skills: ["Adobe Lightroom", "Photoshop", "Canva"],
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem-Solving", "Creativity", "Team Collaboration", "Communication", "Adaptability", "Time Management"],
      bgColor: "bg-coral/10",
      iconColor: "text-coral"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set combining technical proficiency with creative capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <Icon className={`h-6 w-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
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

export default Skills;
