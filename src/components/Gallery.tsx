import { useState, useMemo } from "react";
import { Camera, Instagram, Maximize2, X, Sparkles, ExternalLink, Filter, Image as ImageIcon } from "lucide-react";

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
    story: "Exploring subtle tonal gradients and ambient environmental lighting.",
    tag: "Natural Light",
  },
  "photo-2": {
    title: "Portraits & Human Expression",
    category: "Portraits",
    story: "Focusing on authentic character, gaze, and depth of field.",
    tag: "Portraiture",
  },
  "photo-3": {
    title: "Street Narratives & Life",
    category: "Street & Urban",
    story: "Capturing fleeting candid moments and architectural geometry.",
    tag: "Street Life",
  },
  "photo-4": {
    title: "Light & Shadow Dynamics",
    category: "Light & Composition",
    story: "Playing with golden hour highlights and deliberate framing balance.",
    tag: "Composition",
  },
};

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Build the dynamic photos array from imported files
  const photos: PhotoItem[] = useMemo(() => {
    return Object.entries(photoModules).map(([path, module], index) => {
      const fileNameWithExt = path.split("/").pop() || `photo-${index + 1}`;
      const fileNameWithoutExt = fileNameWithExt.replace(/\.[^/.]+$/, "");
      
      const meta = defaultMetadata[fileNameWithoutExt] || {
        title: `Capture #${index + 1}`,
        category: index % 2 === 0 ? "Portraits" : "Street & Urban",
        story: "Photographic composition capturing depth, light, and visual aesthetic.",
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

  // Extract unique categories
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL EXHIBITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Through The <span className="text-gradient-rose">Photographer&apos;s Lens</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A curated photographic exhibition capturing light, mood, human expression, and street narratives. 
            All visual works are synced directly from my creative portfolio and Instagram.
          </p>
        </div>

        {/* Category Filter Pills */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm shadow-rose-500/20"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800/50"
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
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 shadow-xl hover:border-rose-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
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

        {/* Instagram Profile & Connect Hub */}
        <div className="mt-14 p-8 rounded-3xl glass-panel border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-100 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span>Explore My Full Photography Series</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              I regularly publish new photography sets, street series, and visual stories on Instagram at <b>@muntasir_shawon</b>.
            </p>
          </div>

          <a
            href="https://www.instagram.com/muntasir_shawon"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:opacity-95 shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Visit @muntasir_shawon on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
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
            <div className="relative max-h-[68vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[68vh] object-contain"
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
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all hover:scale-105"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-400" />
                <span>View Instagram Post</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
