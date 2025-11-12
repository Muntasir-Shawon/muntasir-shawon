import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-lg">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                AKM Muntasir Uddin Shawon
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground">
              AI Developer & Photographer
            </p>
            
            <p className="text-lg text-foreground max-w-xl">
              Building intelligent systems with AI/ML and capturing visual stories through the lens. 
              Computer Science student passionate about combining technology and creativity.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={heroImage}
                alt="AKM Muntasir Uddin Shawon - AI Developer and Photographer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-coral/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
