import { Button } from "@/components/ui/button";
import { MapPin, Play, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bike.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Motorcycle rider on Himalayan mountain road at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Your Ultimate Riding Companion Across India
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-slide-up leading-tight">
            Ride Free.
            <br />
            <span className="text-gradient-primary bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Explore India.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover hidden gems, find safe stays, locate mechanics, and connect 
            with fellow riders. From the Himalayas to coastal roads — we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="min-w-[200px]">
              <MapPin className="w-5 h-5" />
              Start Exploring
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]">
              <Play className="w-5 h-5" />
              Watch Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "50K+", label: "Active Riders" },
              { value: "10K+", label: "Routes Mapped" },
              { value: "500+", label: "Hidden Gems" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-5xl text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#explore" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
