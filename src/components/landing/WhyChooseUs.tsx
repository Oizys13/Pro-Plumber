import { Shield, Clock, DollarSign, Award, Headphones, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Fast response times with same-day service available for urgent plumbing needs.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. Get upfront pricing before any work begins.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "We stand behind our work with a 100% satisfaction guarantee on all services.",
  },
  {
    icon: Headphones,
    title: "24/7 Emergency Support",
    description: "Round-the-clock emergency services because plumbing issues don't wait.",
  },
  {
    icon: CheckCircle,
    title: "Quality Materials",
    description: "We use only premium materials and parts for long-lasting repairs.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-muted/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-enter">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Why Choose Us
          </h4>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight tracking-tight max-w-3xl mx-auto">
            The <span className="text-accent">Pro-Plumber</span> Difference: Quality You Can Trust
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 card-hover group animate-enter"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
