import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Adams",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Pro-Plumber saved the day when our water heater broke down in the middle of winter. They arrived within an hour and had everything fixed by evening. Exceptional service!",
  },
  {
    name: "Robert Thompson",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "As a restaurant owner, I can't afford plumbing issues. Pro-Plumber has been our go-to service for 5 years. Reliable, professional, and always on time.",
  },
  {
    name: "Maria Garcia",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Managing multiple properties means lots of plumbing calls. Pro-Plumber handles them all efficiently with transparent pricing. Highly recommended!",
  },
  {
    name: "James Wilson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The team was incredibly professional and cleaned up everything after the job. It's rare to find service this good. Will definitely call again!",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-enter">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Testimonials
          </h4>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight tracking-tight max-w-3xl mx-auto">
            What Our <span className="text-accent">Customers</span> Say About Us
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-2 lg:-left-16 -translate-y-1/2 z-20 bg-card hover:bg-muted text-foreground rounded-full p-3 shadow-lg border border-border transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-2 lg:-right-16 -translate-y-1/2 z-20 bg-card hover:bg-muted text-foreground rounded-full p-3 shadow-lg border border-border transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/20" />

            <div className="flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-accent mb-4"
              />
              <h4 className="text-lg font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
