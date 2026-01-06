import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Wrench, 
  Fuel, 
  Hospital, 
  Phone, 
  MapPin, 
  AlertTriangle,
  CheckCircle,
  Users
} from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Nearby Mechanics",
    description: "Find trusted bike mechanics along your route with real-time availability and rider reviews.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Fuel,
    title: "Fuel Stations",
    description: "Never run dry. Get alerts about fuel stations, especially on long stretches.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Hospital,
    title: "Emergency Services",
    description: "Quick access to hospitals, police stations, and emergency contacts.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: MapPin,
    title: "Safe Stays",
    description: "Women-safe, budget-friendly accommodations verified by the rider community.",
    color: "bg-secondary/10 text-secondary",
  },
];

const safetyBadges = [
  { icon: CheckCircle, label: "Women Safe" },
  { icon: Shield, label: "Verified Stay" },
  { icon: Users, label: "Rider Recommended" },
];

const SafetyFeatures = () => {
  return (
    <section id="safety" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Safety First
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Ride With
              <span className="text-gradient-forest"> Confidence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your safety is our priority. Get real-time alerts about mechanics, 
              fuel stations, and emergency services. Find verified safe stays 
              especially curated for solo and women riders.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mb-3`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="forest" size="lg">
              <Shield className="w-5 h-5" />
              Explore Safety Features
            </Button>
          </div>

          {/* Right Content - SOS Card */}
          <div className="relative">
            {/* Main SOS Card */}
            <div className="bg-card rounded-3xl p-8 shadow-elevated relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-destructive/5 to-transparent rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-3xl text-foreground">
                    Emergency SOS
                  </h3>
                  <AlertTriangle className="w-8 h-8 text-destructive animate-pulse" />
                </div>

                <p className="text-muted-foreground mb-6">
                  One tap to alert emergency contacts with your live location. 
                  Quick access to nearby hospitals and police stations.
                </p>

                <Button variant="sos" size="xl" className="w-full mb-8">
                  <Phone className="w-6 h-6" />
                  Emergency SOS
                </Button>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Hospital, label: "Hospital" },
                    { icon: Shield, label: "Police" },
                    { icon: Wrench, label: "Mechanic" },
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <action.icon className="w-6 h-6 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety Badges */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {safetyBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft"
                >
                  <badge.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;
