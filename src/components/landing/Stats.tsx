import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "K+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
];

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, isVisible);
            return (
              <div
                key={index}
                className="text-center animate-enter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground mb-2">
                  {count}
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-base lg:text-lg font-medium text-accent-foreground/80">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
