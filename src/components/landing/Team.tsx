import { Facebook, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Michael Johnson",
    role: "Master Plumber & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "25+ years of experience in residential and commercial plumbing.",
  },
  {
    name: "Sarah Williams",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Ensuring smooth operations and exceptional customer experiences.",
  },
  {
    name: "David Martinez",
    role: "Senior Technician",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "Specialist in gas plumbing and water heater installations.",
  },
  {
    name: "Emily Chen",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    bio: "Your first point of contact for all service inquiries.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16 animate-enter">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Our Team
          </h4>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight tracking-tight max-w-3xl mx-auto">
            Meet the <span className="text-accent">Experts</span> Behind Every Fix
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg card-hover group animate-enter"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
