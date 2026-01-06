import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/ExploreSection";
import FeaturedRoutes from "@/components/FeaturedRoutes";
import SafetyFeatures from "@/components/SafetyFeatures";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ExploreSection />
        <FeaturedRoutes />
        <SafetyFeatures />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
