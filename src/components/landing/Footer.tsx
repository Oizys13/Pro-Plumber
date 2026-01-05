import { Wrench, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Gas Plumbing",
  "Water Supply",
  "Drain Cleaning",
  "Pipe Repair",
  "Water Heaters",
  "Emergency Service",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary pt-16 lg:pt-20 pb-8 relative overflow-hidden">
      {/* Wave separator at top */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[80px]"
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-primary-foreground">
                Pro-Plumber
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner for all plumbing needs. Professional, reliable, and always on time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Plumbing Lane, City, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@pro-plumber.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  info@pro-plumber.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center lg:text-left">
              © {new Date().getFullYear()} Pro-Plumber. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
