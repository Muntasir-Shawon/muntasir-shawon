import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";

const Gallery = () => {
  const photos = [
    {
      src: photo1,
      alt: "Tea by the sea at sunset - Golden hour photography",
      title: "Tea by the Sea",
      category: "Lifestyle",
    },
    {
      src: photo2,
      alt: "Lush greenery with sunlight - Nature photography",
      title: "Nature's Embrace",
      category: "Nature",
    },
    {
      src: photo3,
      alt: "Sparkling ocean at golden hour - Seascape photography",
      title: "Sea Sunshine",
      category: "Seascape",
    },
    {
      src: photo4,
      alt: "Urban street at dusk - Street photography",
      title: "Urban Dusk",
      category: "Urban",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Photography Gallery</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing meaningful moments and beautiful stories through the lens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[3/4]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-accent mb-1">{photo.category}</p>
                  <h3 className="text-xl font-bold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More photos available on{" "}
            <a
              href="https://www.instagram.com/muntasir_shawon?igsh=MTEwODQyNWNuc216Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
