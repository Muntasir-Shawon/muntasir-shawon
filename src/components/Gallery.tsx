import { ArrowRight, Camera } from "lucide-react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        {/* Featured Work Title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Photography<br />Portfolio
          </h2>
          <p className="text-lg text-foreground max-w-2xl leading-relaxed mb-6">
            Capturing timeless moments through a creative lens. A collection of my photographic work that tells stories and preserves memories with artistic vision and technical precision.
          </p>
          
          {/* View Portfolio Badge */}
          <button className="group relative inline-block">
            <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary hover:border-accent transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                  <path
                    id="circlePathGallery"
                    d="M 64, 64 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                    fill="none"
                  />
                  <text className="text-[10px] fill-primary font-semibold tracking-wider">
                    <textPath href="#circlePathGallery" startOffset="0%">
                      SEE FEATURED • SEE FEATURED •
                    </textPath>
                  </text>
                </svg>
              </div>
              <ArrowRight className="h-6 w-6 text-primary group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>

        {/* Photo Grid with Tilted Frames - Placeholder Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Photo 1 - Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-coral rounded-3xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-background p-4 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Upload Your Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 2 - Placeholder */}
          <div className="relative group mt-12">
            <div className="absolute -inset-4 bg-accent rounded-3xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-background p-4 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Upload Your Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 3 - Placeholder */}
          <div className="relative group -mt-8">
            <div className="absolute -inset-4 bg-accent rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-background p-4 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Upload Your Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 4 - Placeholder */}
          <div className="relative group mt-4">
            <div className="absolute -inset-4 bg-coral rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-background p-4 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Upload Your Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
