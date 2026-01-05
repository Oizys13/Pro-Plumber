import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header id="home" className="relative bg-primary pt-32 pb-48 lg:pt-40 lg:pb-64 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Noodle Beam Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1440 800"
        fill="none"
      >
        <path
          d="M-100,400 C200,300 400,600 800,400 S1200,200 1600,500"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="8 8"
          className="opacity-20"
        />
        <path
          d="M-100,400 C200,300 400,600 800,400 S1200,200 1600,500"
          stroke="url(#gradient-beam)"
          strokeWidth="3"
          className="beam-path"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient-beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-enter">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.1] tracking-tight mb-6">
            Your <span className="text-accent">Trusted Plumbing</span> Experts: We Fix It Right!
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl font-normal">
            Our commitment to quality extends beyond our workmanship. We prioritize customer satisfaction, offering transparent pricing, 24/7 emergency services, and a satisfaction guarantee.
          </p>
          <Button
            className="bg-accent text-accent-foreground hover:bg-background hover:text-primary rounded-full px-8 py-6 text-base font-semibold group shadow-accent transition-all"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Right Image Area */}
        <div className="relative flex justify-center lg:justify-end animate-enter delay-200">
          {/* Yellow Circle Blob */}
          <div className="absolute top-10 right-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-accent rounded-full z-0" />

          {/* Plumber Image */}
          <div className="relative z-10 w-[250px] sm:w-[300px] lg:w-[400px]">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="Professional plumber at work"
              className="w-full h-auto object-cover rounded-b-full"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />

            {/* Tool Box Overlay */}
            <div className="absolute bottom-0 -left-8 lg:-left-20 bg-muted p-2 rounded-lg shadow-xl w-36 lg:w-48 rotate-[-5deg] animate-float">
              <div className="h-20 lg:h-24 bg-destructive rounded flex items-center justify-center text-destructive-foreground border-b-8 border-destructive/80">
                <Briefcase className="w-10 h-10 lg:w-12 lg:h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="wave-separator">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-background"
          />
        </svg>
      </div>
    </header>
  );
}
