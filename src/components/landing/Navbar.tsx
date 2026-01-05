import { useState } from "react";
import { Wrench, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact Us" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-primary-foreground">
            Pro-Plumber
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-base font-medium text-primary-foreground/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="hidden lg:flex bg-background text-primary hover:bg-accent hover:text-accent-foreground rounded-full px-6 font-semibold transition-colors"
          asChild
        >
          <a href="#contact">Request Quote</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10 animate-fade-in">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/90 hover:text-accent py-2 transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold mt-4"
              asChild
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Request Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
