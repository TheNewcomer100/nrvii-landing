
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Hero />
      <ProblemStatement />
      <SocialProof />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
