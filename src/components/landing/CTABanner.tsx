import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-foreground rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-3">
              🚨 Plumbing Emergency? Don't Wait!
            </h2>
            <p className="text-lg text-accent-foreground/80">
              Our emergency team is available 24/7. Fast response, reliable service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+15559876543"
              className="flex items-center gap-3 text-2xl lg:text-3xl font-bold text-accent-foreground hover:underline"
            >
              <Phone className="w-8 h-8" />
              (555) 987-6543
            </a>
            <Button
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-full px-8 py-6 font-semibold group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
