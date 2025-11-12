import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="space-y-6 text-lg text-foreground">
          <p className="leading-relaxed">
            I'm <span className="font-semibold text-primary">AKM Muntasir Uddin Shawon</span>, 
            a passionate Computer Science & Engineering student at North South University with a 
            deep interest in Artificial Intelligence, Machine Learning, and Large Language Models.
          </p>

          <p className="leading-relaxed">
            My journey combines technical expertise with creative expression. Through AI/ML, I build 
            intelligent systems that solve real-world problems, while photography allows me to capture 
            meaningful moments and visual stories that resonate with people.
          </p>

          <p className="leading-relaxed">
            What drives me is the intersection of technology and creativity—using cutting-edge AI to 
            automate and enhance processes, while maintaining the human touch through thoughtful design 
            and artistic vision.
          </p>

          <div className="flex flex-wrap gap-6 pt-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="h-5 w-5 text-accent" />
              <span>BSc in CSE, North South University (Expected 2026)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
