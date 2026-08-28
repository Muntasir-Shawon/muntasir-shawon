import { useState, useMemo } from "react";
import { Camera, Instagram, Maximize2, X, Sparkles, ExternalLink, Filter, Image as ImageIcon } from "lucide-react";
import { BatInsignia } from "./BatInsignia";

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  story: string;
  tag: string;
  fileName: string;
}

// Dynamically import all images from the gallery directory
const photoModules = import.meta.glob<{ default: string }>("@/assets/gallery/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
});

const defaultMetadata: Record<string, { title: string; category: string; story: string; tag: string }> = {
  "photo-1": {
    title: "Atmosphere & Mood",
    category: "Mood & Atmosphere",
    story: "Exploring subtle tonal gradients, shadow depth, and ambient environmental lighting.",
    tag: "Noir Lighting",
  },
  "photo-2": {
    title: "Portraits & Human Expression",
    category: "Portraits",
    story: "Focusing on authentic character, deep gaze, and atmospheric depth of field.",
    tag: "Portraiture",
  },
  "photo-3": {
    title: "Street Narratives & Life",
    category: "Street & Urban",
    story: "Capturing fleeting candid moments, shadows, and architectural geometry in urban life.",
    tag: "Gotham Streets",
  },
  "photo-4": {
    title: "Light & Shadow Dynamics",
    category: "Light & Composition",
    story: "Playing with chiaroscuro contrast, golden hour highlights, and deliberate framing balance.",
    tag: "Composition",
  },
};

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Build dynamic photos array
  const photos: PhotoItem[] = useMemo(() => {
    return Object.entries(photoModules).map(([path, module], index) => {
      const fileNameWithExt = path.split("/").pop() || `photo-${index + 1}`;
      const fileNameWithoutExt = fileNameWithExt.replace(/\.[^/.]+$/, "");
      
      const meta = defaultMetadata[fileNameWithoutExt] || {
        title: `Capture #${index + 1}`,
        category: index % 2 === 0 ? "Portraits" : "Street & Urban",
        story: "Photographic composition capturing depth, shadow, and visual aesthetic.",
        tag: "Photography",
      };

      return {
        id: `photo-${index}`,
        src: module.default,
        title: meta.title,
        category: meta.category,
        story: meta.story,
        tag: meta.tag,
        fileName: fileNameWithExt,
      };
    });
  }, []);

  // Unique categories
  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    photos.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [photos]);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") return photos;
    return photos.filter((p) => p.category === activeCategory);
  }, [photos, activeCategory]);

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bat-gold/10 border border-bat-gold/30 text-xs font-mono font-bold text-bat-gold">
            <Camera className="w-3.5 h-3.5 text-bat-gold" />
            <span>NOIR & LIGHT ARCHIVES // 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            Through The <span className="text-gradient">Photographer&apos;s Lens</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            A curated photographic exhibition capturing high-contrast light, moody atmospheres, and raw human expressions in the spirit of Gotham noir.
          </p>
        </div>

        {/* Category Filter Pills */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-bat-gold text-[#06070a] border border-bat-gold shadow-md shadow-bat-gold/25 font-bold"
                    : "bg-[#0A0C13]/90 text-slate-400 hover:text-slate-200 border border-bat-border hover:bg-[#121622]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#090B12] border border-bat-border shadow-xl hover:border-bat-gold/60 transition-all duration-500 hover:-translate-y-2 tactical-border"
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-[#06070a]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* View Icon Badge on Hover */}
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-[#080A10]/90 backdrop-blur-md border border-bat-gold/50 text-bat-gold opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#080A10]/90 backdrop-blur-md border border-bat-border text-[10px] font-mono font-bold text-bat-gold">
                  {photo.tag}
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-bat-gold uppercase tracking-wider block">
                    {photo.category}
                  </span>
                  <h3 className="text-sm font-orbitron font-bold text-white leading-tight">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 pt-0.5 font-sans">
                    {photo.story}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile & Connect Hub */}
        <div className="mt-14 p-8 rounded-3xl hud-panel border border-bat-border flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left relative z-10">
            <h3 className="text-xl font-orbitron font-bold text-slate-100 flex items-center justify-center sm:justify-start gap-2.5">
              <BatInsignia size={18} className="text-bat-gold" />
              <span>Explore My Full Photography Series</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-xl font-sans">
              I publish new photo series, street narratives, and visual stories regularly on Instagram at <b className="text-bat-gold font-mono">@muntasir_shawon</b>.
            </p>
          </div>

          <a
            href="https://www.instagram.com/muntasir_shawon"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-[#06070a] bg-gradient-to-r from-bat-gold via-amber-400 to-bat-yellow hover:brightness-110 shadow-lg shadow-bat-gold/25 transition-all hover:scale-105 active:scale-95 shrink-0 relative z-10"
          >
            <Instagram className="w-4 h-4 text-[#06070a]" />
            <span>VISIT @MUNTASIR_SHAWON</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#06070a]/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0B0D14] border border-bat-gold/40 rounded-3xl overflow-hidden shadow-2xl space-y-0 tactical-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#080A10]/90 border border-bat-border text-slate-300 hover:text-bat-gold hover:border-bat-gold/60 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="relative max-h-[68vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[68vh] object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-6 bg-[#090B12] border-t border-bat-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-bat-gold/20 text-bat-gold border border-bat-gold/30">
                    {selectedPhoto.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedPhoto.category}
                  </span>
                </div>
                <h3 className="text-lg font-orbitron font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-slate-400 max-w-md font-sans">
                  {selectedPhoto.story}
                </p>
              </div>

              <a
                href="https://www.instagram.com/muntasir_shawon"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#121624] hover:bg-[#181D30] border border-bat-border hover:border-bat-gold/50 text-xs font-mono font-bold text-slate-200 transition-all hover:scale-105"
              >
                <Instagram className="w-3.5 h-3.5 text-bat-gold" />
                <span>VIEW ON INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
