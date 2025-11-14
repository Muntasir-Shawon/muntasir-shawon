import { ArrowRight, Sparkles, Camera, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center pt-20 px-4 bg-gradient-to-br from-yellow-light via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in relative z-10">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight" style={{
              fontFamily: 'Georgia, serif'
            }}>
                A.K.M. Muntasir Uddin Shawon
              </h1>
              <p className="text-2xl md:text-3xl text-coral font-semibold" style={{
              fontFamily: 'Georgia, serif'
            }}>
                Blending Technology and Art
              </p>
            </div>
            
            <p className="text-lg text-foreground max-w-lg leading-relaxed">
              Building Intelligent Systems and Capturing Timeless Moments. AI/ML Developer & Creative Photographer crafting solutions that merge innovation with artistry.
            </p>
            
            {/* View Portfolio Badge */}
            <div className="flex items-center gap-6 pt-4">
              <button onClick={() => scrollToSection("projects")} className="group relative">
                <div className="relative flex items-center justify-center w-40 h-40 rounded-full border-4 border-primary hover:border-accent transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                      <path id="circlePath" d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />
                      <text className="text-xs fill-primary font-semibold tracking-wider">
                        <textPath href="#circlePath" startOffset="0%">
                          VIEW PORTFOLIO • VIEW PORTFOLIO •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <ArrowRight className="h-8 w-8 text-primary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </button>

              <button onClick={() => scrollToSection("contact")} className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold transition-all hover:scale-105">
                <Sparkles className="h-5 w-5" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            {/* Decorative yellow blob */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10" />
            
            {/* Main image container - Profile Photo */}
            <div className="relative">
              <div className="w-full h-[600px] rounded-3xl shadow-2xl relative z-10 overflow-hidden">
                <img src={profilePhoto} alt="A.K.M. Muntasir Uddin Shawon - Profile Photo" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -right-6 top-20 bg-coral p-4 rounded-2xl shadow-lg animate-float">
                <Brain className="h-8 w-8 text-white" />
                <p className="text-xs text-white font-semibold mt-2">AI/ML<br />Developer</p>
              </div>
              
              <div className="absolute -left-6 top-1/2 bg-accent p-4 rounded-2xl shadow-lg animate-float" style={{
              animationDelay: '0.5s'
            }}>
                <div className="flex flex-col items-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <p className="text-xs text-primary font-semibold mt-2">CSE
Student<br />Student</p>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-20 bg-primary p-4 rounded-2xl shadow-lg animate-float" style={{
              animationDelay: '1s'
            }}>
                <Camera className="h-6 w-6 text-white" />
                <p className="text-xs text-white font-semibold mt-2">Creative<br />Photographer</p>
              </div>
            </div>

            {/* Decorative sparkle */}
            <div className="absolute top-10 right-20">
              <Sparkles className="h-8 w-8 text-accent animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>;
};
export default Hero;