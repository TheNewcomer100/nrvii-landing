
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nrvii-indigo/5 via-white to-nrvii-mint/10">
      <Hero />
      <div className="bg-gradient-to-r from-nrvii-lilac/5 to-nrvii-coral/5">
        <ProblemStatement />
      </div>
      <div className="bg-gradient-to-br from-nrvii-mint/5 via-white to-nrvii-indigo/5">
        <SocialProof />
      </div>
      <div className="bg-gradient-to-r from-nrvii-indigo/5 to-nrvii-lilac/10">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
