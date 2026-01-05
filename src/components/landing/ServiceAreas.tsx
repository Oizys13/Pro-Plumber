import { MapPin, Check } from "lucide-react";

const areas = [
  { name: "Downtown", highlighted: true },
  { name: "North District", highlighted: false },
  { name: "South Valley", highlighted: true },
  { name: "East Side", highlighted: false },
  { name: "West End", highlighted: true },
  { name: "Harbor Area", highlighted: false },
  { name: "Industrial Zone", highlighted: true },
  { name: "Suburban Heights", highlighted: false },
];

const cities = [
  "Los Angeles",
  "San Diego",
  "San Francisco",
  "Sacramento",
  "Oakland",
  "Fresno",
];

export function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-enter">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Service Areas
            </h4>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-6">
              Serving Your <span className="text-accent">Community</span> With Pride
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pro-Plumber proudly serves residential and commercial customers across the greater metropolitan area. Our mobile teams are strategically located to ensure fast response times.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 py-2 px-3 rounded-lg ${
                    area.highlighted ? "bg-accent/10 text-accent" : "text-foreground"
                  }`}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">{area.name}</span>
                </div>
              ))}
            </div>

            {/* Cities served */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-card-foreground mb-4">Major Cities We Serve:</h4>
              <div className="flex flex-wrap gap-3">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    <Check className="w-3 h-3" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Map Illustration */}
          <div className="relative animate-enter delay-200">
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="Service area map"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
                <div className="text-primary-foreground">
                  <p className="text-sm font-medium opacity-80 mb-1">Coverage Area</p>
                  <p className="text-2xl font-bold">50+ Mile Radius</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg animate-float">
              <p className="text-sm font-medium opacity-80">Response Time</p>
              <p className="text-2xl font-bold">Under 1 Hour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
