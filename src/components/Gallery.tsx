import { useState } from "react";
import { Camera, Instagram, Maximize2, X, Sparkles, ExternalLink, Eye } from "lucide-react";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  category: string;
  story: string;
  tag: string;
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 1,
      src: photo1,
      title: "Atmosphere & Mood",
      category: "Cinematic Atmosphere",
      story: "Exploring subtle tonal gradients and ambient environmental lighting.",
      tag: "Natural Light",
    },
    {
      id: 2,
      src: photo2,
      title: "Portraits & Expression",
      category: "Human Emotion",
      story: "Focusing on authentic character, gaze, and depth of field.",
      tag: "Portraiture",
    },
    {
      id: 3,
      src: photo3,
      title: "Street & Perspective",
      category: "Urban Narratives",
      story: "Capturing fleeting candid moments and architectural geometry.",
      tag: "Street Life",
    },
    {
      id: 4,
      src: photo4,
      title: "Light & Composition",
      category: "Visual Aesthetics",
      story: "Playing with golden hour highlights and deliberate framing balance.",
      tag: "Composition",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL STORYTELLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Through The <span className="text-gradient-rose">Photographer&apos;s Lens</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Photography is my creative sanctuary. A visual exploration of light, human presence, street narratives, and timeless atmosphere.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 shadow-xl hover:border-rose-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* View Icon Badge on Hover */}
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-rose-400 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-semibold text-slate-300">
                  {photo.tag}
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <span className="text-[10px] font-semibold text-rose-400 uppercase tracking-wider block">
                    {photo.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 pt-0.5">
                    {photo.story}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Callout & Instagram Connection */}
        <div className="mt-14 p-8 rounded-3xl glass-panel border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-100 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span>Explore My Full Photographic Portfolio</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Follow along on Instagram for frequent photo sets, behind-the-scenes compositions, and visual storytelling series.
            </p>
          </div>

          <a
            href="https://www.instagram.com/muntasir_shawon"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-95 shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @muntasir_shawon</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="relative max-h-[65vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    {selectedPhoto.tag}
                  </span>
                  <span className="text-xs text-slate-400">
                    {selectedPhoto.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-slate-400 max-w-md">
                  {selectedPhoto.story}
                </p>
              </div>

              <a
                href="https://www.instagram.com/muntasir_shawon"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all hover:scale-105"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-400" />
                <span>View on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
