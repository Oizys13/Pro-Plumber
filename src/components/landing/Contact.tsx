import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@pro-plumber.com",
    href: "mailto:info@pro-plumber.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Plumbing Lane, City, ST 12345",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Sat: 7AM - 8PM",
    href: null,
  },
];

const serviceOptions = [
  "General Inquiry",
  "Emergency Repair",
  "Water Heater Service",
  "Drain Cleaning",
  "Pipe Installation",
  "Gas Plumbing",
  "Other",
];

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-enter">
          <h4 className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm mb-3">
            Contact Us
          </h4>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary-foreground leading-tight tracking-tight max-w-3xl mx-auto">
            Get In <span className="text-accent">Touch</span> With Our Team
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-enter delay-100">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-6">
              We're Here to Help
            </h3>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Have a plumbing emergency? Need a quote? Or just want to ask a question? Reach out to us and we'll respond as quickly as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-primary-foreground font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="mt-10 bg-accent rounded-xl p-6 animate-pulse-glow">
              <p className="text-accent-foreground font-bold text-lg mb-1">
                🚨 24/7 Emergency Line
              </p>
              <a
                href="tel:+15559876543"
                className="text-2xl font-bold text-accent-foreground hover:underline"
              >
                (555) 987-6543
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-xl animate-enter delay-200">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Your Message *
                </label>
                <Textarea
                  placeholder="Tell us about your plumbing needs..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-6 font-semibold group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
