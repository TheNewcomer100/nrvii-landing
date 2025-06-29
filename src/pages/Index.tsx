
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FounderStory from "@/components/FounderStory";
import SocialProof from "@/components/SocialProof";
import EarlyAccess from "@/components/EarlyAccess";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Hero />
      <Benefits />
      <FounderStory />
      <SocialProof />
      <EarlyAccess />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
