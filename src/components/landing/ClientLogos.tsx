const logos = [
  { name: "HomeServe", icon: "🏠" },
  { name: "BuildRight", icon: "🔧" },
  { name: "CityWorks", icon: "🏗️" },
  { name: "AquaFlow", icon: "💧" },
  { name: "PipeMaster", icon: "🔩" },
  { name: "SafeHome", icon: "🏡" },
];

export function ClientLogos() {
  return (
    <div className="bg-background py-12 overflow-hidden relative border-b border-border">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* First set */}
        <div className="flex gap-16 lg:gap-24 px-8 lg:px-12 items-center">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-xl font-semibold text-foreground/70">{logo.name}</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-16 lg:gap-24 px-8 lg:px-12 items-center">
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-xl font-semibold text-foreground/70">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
