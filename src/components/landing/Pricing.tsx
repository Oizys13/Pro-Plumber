import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "99",
    description: "Perfect for minor repairs and quick fixes",
    features: [
      "Single service visit",
      "Basic leak repairs",
      "Faucet replacements",
      "90-day warranty",
      "Standard response time",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "249",
    description: "Ideal for common plumbing issues",
    features: [
      "Up to 3 service visits",
      "Drain cleaning included",
      "Pipe repairs",
      "1-year warranty",
      "Priority scheduling",
      "Free inspection",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "499",
    description: "Comprehensive plumbing solutions",
    features: [
      "Unlimited service visits",
      "All repairs included",
      "Water heater service",
      "2-year warranty",
      "24/7 priority support",
      "Annual maintenance",
      "10% off parts",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-enter">
          <h4 className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm mb-3">
            Pricing Plans
          </h4>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary-foreground leading-tight tracking-tight max-w-3xl mx-auto">
            Transparent <span className="text-accent">Pricing</span> for Every Budget
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 lg:p-8 animate-enter ${
                plan.popular ? "ring-2 ring-accent scale-105 shadow-2xl" : "shadow-xl"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-card-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">/service</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-card-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full py-6 font-semibold group ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                asChild
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
