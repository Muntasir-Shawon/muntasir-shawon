import { GraduationCap, MapPin, Code2 } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-primary" style={{
            fontFamily: 'Georgia, serif'
          }}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent" />
            
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                I'm A.K.M. Muntasir Uddin Shawon, a Computer Science & Engineering student at North South University with a passion for both cutting-edge technology and creative photography. <span className="font-bold text-primary">A.K.M. Muntasir Uddin Shawon</span>, 
                a Computer Science & Engineering student at North South University (expected 2026) with a passion for both 
                cutting-edge technology and creative photography.
              </p>

              <p>
                I specialize in developing intelligent systems using AI/ML, LLMs, and computer vision while 
                capturing timeless moments through my lens. My unique perspective comes from blending technical 
                precision with artistic vision.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">CSE Student, NSU</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-coral/10 rounded-full">
                  <MapPin className="h-5 w-5 text-coral" />
                  <span className="text-sm font-medium">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                  <Code2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">AI/ML Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent p-6 rounded-2xl text-center transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">2026</div>
              <div className="text-sm text-accent-foreground font-medium">Expected Graduation</div>
            </div>
            <div className="bg-coral p-6 rounded-2xl text-center transform hover:scale-105 transition-all mt-8">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-sm text-white font-medium">AI/ML Projects</div>
            </div>
            <div className="bg-primary p-6 rounded-2xl text-center transform hover:scale-105 transition-all -mt-4">
              <div className="text-4xl font-bold text-accent mb-2">LLMs</div>
              <div className="text-sm text-white font-medium">Specialist</div>
            </div>
            <div className="bg-muted p-6 rounded-2xl text-center transform hover:scale-105 transition-all mt-4">
              <div className="text-4xl font-bold text-primary mb-2">NSU</div>
              <div className="text-sm text-foreground font-medium">CSE Student</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;