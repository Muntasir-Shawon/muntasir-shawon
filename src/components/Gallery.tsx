import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { id: 1, src: photo1, alt: "Photography 1", rotation: -6, bgColor: "bg-coral" },
    { id: 2, src: photo2, alt: "Photography 2", rotation: 6, bgColor: "bg-accent", marginTop: "mt-12" },
    { id: 3, src: photo3, alt: "Photography 3", rotation: -3, bgColor: "bg-accent", marginTop: "-mt-8" },
    { id: 4, src: photo4, alt: "Photography 4", rotation: 3, bgColor: "bg-coral", marginTop: "mt-4" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        {/* Photography Title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Photography
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

        {/* Photo Grid with Tilted Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {photos.map((photo) => (
            <div key={photo.id} className={`relative group ${photo.marginTop || ''}`}>
              <div className={`absolute -inset-4 ${photo.bgColor} rounded-3xl transform rotate-${photo.rotation} group-hover:rotate-0 transition-transform duration-500`} />
              <div 
                className="relative bg-background p-4 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 p-2 rounded-full bg-background border-2 border-border hover:bg-muted transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
