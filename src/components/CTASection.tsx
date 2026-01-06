import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Download, Smartphone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-sunset relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 mb-8">
            <Smartphone className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Coming Soon on iOS & Android
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Start Your Next
            <br />
            Adventure Today
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of riders exploring India. Plan routes, find safe stays, 
            connect with the community, and ride with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="glass" size="xl" className="min-w-[200px] border-primary-foreground/30">
              <MapPin className="w-5 h-5" />
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]">
              <Download className="w-5 h-5" />
              Get the App
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              100% Free to Use
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-foreground" />
              Join 50K+ Riders
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
