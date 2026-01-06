import { Button } from "@/components/ui/button";
import { 
  Coffee, 
  Utensils, 
  Camera, 
  Tent, 
  Building, 
  Sparkles,
  ChevronRight,
  Star
} from "lucide-react";

const categories = [
  {
    icon: Coffee,
    title: "Chai Stops",
    count: "2,500+",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Utensils,
    title: "Dhabas",
    count: "5,000+",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Camera,
    title: "Viewpoints",
    count: "1,200+",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Tent,
    title: "Camps",
    count: "800+",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building,
    title: "Stays",
    count: "3,500+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Hidden Gems",
    count: "500+",
    color: "from-pink-500 to-rose-500",
  },
];

const hiddenGems = [
  {
    name: "Mawlynnong",
    location: "Meghalaya",
    rating: 4.9,
    tag: "Cleanest Village",
  },
  {
    name: "Chitkul",
    location: "Himachal Pradesh",
    rating: 4.8,
    tag: "Last Village",
  },
  {
    name: "Gandikota",
    location: "Andhra Pradesh",
    rating: 4.7,
    tag: "Grand Canyon of India",
  },
];

const ExploreSection = () => {
  return (
    <section id="explore" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Discover India
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Explore Every Corner
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the best chai stops to unexplored viewpoints, discover places 
            that even Google doesn't know about — all curated by fellow riders.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count}
              </p>
            </button>
          ))}
        </div>

        {/* Hidden Gems Section */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Ghumne Layak
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-foreground">
                Hidden Gems to Explore
              </h3>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hiddenGems.map((gem, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-all cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {gem.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {gem.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{gem.rating}</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {gem.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
