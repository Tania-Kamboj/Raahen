import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, ArrowRight, Mountain, Waves, TreePine } from "lucide-react";
import routeCoastal from "@/assets/route-coastal.jpg";
import routeDesert from "@/assets/route-desert.jpg";
import routeMountain from "@/assets/route-mountain.jpg";

const routes = [
  {
    id: 1,
    title: "Coastal Paradise",
    subtitle: "Goa to Kerala",
    image: routeCoastal,
    distance: "650 km",
    duration: "3-4 days",
    rating: 4.9,
    difficulty: "Easy",
    icon: Waves,
    highlights: ["Beach views", "Seafood stops", "Backwaters"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Desert Safari",
    subtitle: "Jaisalmer Circuit",
    image: routeDesert,
    distance: "480 km",
    duration: "2-3 days",
    rating: 4.8,
    difficulty: "Moderate",
    icon: Mountain,
    highlights: ["Sand dunes", "Desert camps", "Fort visits"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    title: "Himalayan Heights",
    subtitle: "Leh-Ladakh Adventure",
    image: routeMountain,
    distance: "1200 km",
    duration: "7-10 days",
    rating: 5.0,
    difficulty: "Challenging",
    icon: TreePine,
    highlights: ["High passes", "Monasteries", "Lakes"],
    color: "from-emerald-500 to-teal-600",
  },
];

const FeaturedRoutes = () => {
  return (
    <section id="routes" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Popular Routes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Epic Routes Await
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hand-picked routes curated by experienced riders. From coastal 
            highways to mountain passes, find your next adventure.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {routes.map((route, index) => (
            <div
              key={route.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                
                {/* Difficulty Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${route.color} text-primary-foreground`}>
                  {route.difficulty}
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-background/20 backdrop-blur-md flex items-center justify-center">
                  <route.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {route.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {route.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold text-sm">{route.rating}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {route.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {route.duration}
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {route.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn">
                  View Route
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Routes
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoutes;
