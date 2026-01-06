import { ArrowRight, ShieldCheck, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Models",
    description: "Explore our cutting-edge certified models backed by a track record of exceptional performance.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solution",
    description: "Our team's creative thinking and expertise drive us to develop strategies that deliver.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our experienced professionals bring a wealth of knowledge, refined skills, and proven strategies.",
    color: "bg-blue-100 text-blue-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <svg
        className="absolute right-0 top-20 w-1/2 h-full pointer-events-none opacity-5"
        viewBox="0 0 500 800"
        fill="none"
      >
        <path
          d="M0,100 C150,100 200,300 300,500 S500,600 500,800"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Images */}
          <div className="relative animate-enter delay-100">
            <div className="grid grid-cols-2 gap-4 items-end">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                alt="Team meeting discussing plumbing solutions"
              />
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-52 lg:h-64 object-cover rounded-2xl shadow-lg mb-8"
                alt="Professional plumber working"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground py-6 px-3 rounded-xl shadow-xl flex flex-col items-center gap-1 z-20">
              <span
                className="text-xs uppercase tracking-widest opacity-80"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Experience
              </span>
              <span
                className="text-3xl font-bold"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                25+ Years
              </span>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Content */}
          <div className="animate-enter delay-300">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              About Company
            </h4>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6 tracking-tight">
              Our <span className="text-accent">Plumbing Journey:</span> From Humble Beginnings
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to Quality: Crafting Tailored Plumbing Solutions for Every Customer. We're Always Just a Call Away to Rescue Your Plumbing Emergencies.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 animate-enter" style={{ animationDelay: `${400 + index * 100}ms` }}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-semibold shadow-accent transition-all group"
                asChild
              >
                <a href="#services" className="flex items-center gap-2">
                  Know More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
