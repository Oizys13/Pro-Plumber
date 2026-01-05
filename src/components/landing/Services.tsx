import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Flame, Droplets, Bath, Wrench, Thermometer, PenTool } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Gas Plumbing Services",
    description: "Safe and efficient gas line installation and repairs for your home and business needs.",
    color: "bg-red-50 text-red-500",
    borderColor: "border-red-400",
  },
  {
    icon: Droplets,
    title: "Water Supply Services",
    description: "Ensuring clean and consistent water flow with our expert supply line solutions.",
    color: "bg-blue-50 text-blue-500",
    borderColor: "border-blue-400",
  },
  {
    icon: Bath,
    title: "Sanitary Plumbing Service",
    description: "Comprehensive sanitary solutions to maintain hygiene and system integrity.",
    color: "bg-purple-50 text-purple-500",
    borderColor: "border-purple-400",
  },
  {
    icon: Wrench,
    title: "Pipe Repair & Installation",
    description: "Expert pipe repairs and new installations with quality materials and lasting results.",
    color: "bg-green-50 text-green-500",
    borderColor: "border-green-400",
  },
  {
    icon: Thermometer,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance of all types of water heating systems.",
    color: "bg-orange-50 text-orange-500",
    borderColor: "border-orange-400",
  },
  {
    icon: PenTool,
    title: "Drain Cleaning",
    description: "Professional drain cleaning to keep your plumbing system flowing smoothly.",
    color: "bg-teal-50 text-teal-500",
    borderColor: "border-teal-400",
  },
];

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-cd8119604f89?q=80&w=2073&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-20"
          alt="Background"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-enter">
          <h4 className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm mb-3">
            Our Services
          </h4>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary-foreground leading-tight tracking-tight">
            Meeting All Your <span className="text-accent">Plumbing Needs:</span>
            <br className="hidden lg:block" />
            Services Designed for Your Comfort
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-2 lg:-left-12 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full p-3 backdrop-blur-sm border border-primary-foreground/20 transition-all"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-2 lg:-right-12 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full p-3 backdrop-blur-sm border border-primary-foreground/20 transition-all"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden py-4">
            <div
              className="flex gap-6 lg:gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-22px)] bg-card rounded-xl p-6 lg:p-8 border-b-4 ${service.borderColor} card-hover group`}
                >
                  <div
                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-center text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground text-center leading-normal">
                    {service.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="#contact"
                      className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-primary-foreground/20 hover:bg-primary-foreground/40"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
