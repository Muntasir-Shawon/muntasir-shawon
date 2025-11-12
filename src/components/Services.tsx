import { Camera } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Travel",
      description: "Let's take your photograph to the wonderful and beautiful moment",
      icon: "M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12"
    },
    {
      title: "Personal",
      description: "Let's take your photograph to the wonderful and beautiful moment",
      icon: "M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12"
    },
    {
      title: "Wedding",
      description: "Let's take your photograph to the wonderful and beautiful moment",
      icon: "M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Service I Provide
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's use the services I am providing for your beautiful moment<br/>
            services I am providing for your beautiful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              {/* Camera Icon Illustration */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-32 h-32">
                  <Camera className="w-full h-full text-foreground group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {service.title}
              </h3>
              
              <p className="text-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
