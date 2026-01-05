import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop",
    title: "Bathroom Renovation",
    category: "Residential",
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
    title: "Kitchen Plumbing",
    category: "Residential",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop",
    title: "Commercial Installation",
    category: "Commercial",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    title: "Pipe Replacement",
    category: "Repair",
  },
  {
    image: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?q=80&w=600&auto=format&fit=crop",
    title: "Water Heater Setup",
    category: "Installation",
  },
  {
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=600&auto=format&fit=crop",
    title: "Emergency Repair",
    category: "Repair",
  }
];

const categories = ["All", "Residential", "Commercial", "Repair", "Installation"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16 animate-enter">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Our Work
          </h4>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight tracking-tight max-w-3xl mx-auto">
            Recent <span className="text-accent">Projects</span> & Transformations
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer animate-enter"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setLightboxImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-primary-foreground">
                  <p className="text-sm opacity-80 mb-1">{project.category}</p>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-primary-foreground/20 p-2 rounded-full">
                  <ZoomIn className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Project"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
