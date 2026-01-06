import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  MapPin, 
  Camera, 
  MessageCircle,
  Trophy,
  Star,
  ArrowRight
} from "lucide-react";

const badges = [
  { name: "Solo Rider", icon: "🏍️", color: "bg-primary/10 text-primary" },
  { name: "Explorer", icon: "🧭", color: "bg-accent/10 text-accent" },
  { name: "Woman Rider", icon: "👩‍🦰", color: "bg-pink-100 text-pink-600" },
  { name: "Hill Master", icon: "⛰️", color: "bg-secondary/10 text-secondary" },
  { name: "Night Owl", icon: "🦉", color: "bg-violet-100 text-violet-600" },
  { name: "Desert Fox", icon: "🦊", color: "bg-amber-100 text-amber-600" },
];

const topRiders = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    trips: 47,
    km: "25,000+",
    avatar: "RS",
    badge: "Explorer",
  },
  {
    name: "Priya Verma",
    location: "Delhi",
    trips: 32,
    km: "18,000+",
    avatar: "PV",
    badge: "Woman Rider",
  },
  {
    name: "Arjun Nair",
    location: "Bangalore",
    trips: 28,
    km: "15,000+",
    avatar: "AN",
    badge: "Hill Master",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Rider Community
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Join 50,000+
              <span className="text-gradient-primary"> Riders</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Connect with passionate riders across India. Share your journeys, 
              earn badges, discover hidden routes, and help fellow travelers 
              with tips and reviews.
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Users, value: "50K+", label: "Riders" },
                { icon: MapPin, value: "10K+", label: "Routes" },
                { icon: Camera, value: "100K+", label: "Photos" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card shadow-soft"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Earn Rider Badges
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badge.color} text-sm font-medium`}
                >
                  <span>{badge.icon}</span>
                  {badge.name}
                </span>
              ))}
            </div>

            <Button variant="hero" size="lg">
              <Users className="w-5 h-5" />
              Join Community
            </Button>
          </div>

          {/* Right Content - Top Riders */}
          <div>
            <div className="bg-card rounded-3xl p-8 shadow-elevated">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl text-foreground flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  Top Riders
                </h3>
                <span className="text-sm text-muted-foreground">This Month</span>
              </div>

              <div className="space-y-4">
                {topRiders.map((rider, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    {/* Rank */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0 
                        ? "bg-gradient-to-br from-amber-400 to-amber-600 text-primary-foreground" 
                        : index === 1 
                        ? "bg-gradient-to-br from-gray-300 to-gray-500 text-primary-foreground"
                        : "bg-gradient-to-br from-amber-600 to-amber-800 text-primary-foreground"
                    }`}>
                      {index + 1}
                    </div>

                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                      {rider.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">
                          {rider.name}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {rider.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {rider.location}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="text-right">
                      <div className="font-semibold text-foreground">
                        {rider.trips} trips
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {rider.km} km
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="w-full mt-6">
                View Leaderboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Community Activity */}
            <div className="mt-6 p-6 bg-card rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">
                  <strong className="text-foreground">234 riders</strong> are sharing tips right now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
