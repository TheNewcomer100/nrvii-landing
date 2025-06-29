
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SignupForm from "./SignupForm";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#635DFF]/5 via-transparent to-[#6FFFCB]/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#E5E9FF] rounded-full blur-xl opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#6FFFCB] rounded-full blur-lg opacity-40"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/ec798f06-750b-4966-89d8-37640072fb5a.png" 
            alt="Nrvii Logo" 
            className="h-16 mx-auto"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#23263A] mb-6 leading-tight">
          Turn Your Many Passions Into{" "}
          <span className="text-[#635DFF]">Sustainable Success</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The first productivity app that celebrates your complexity. Track goals, manage energy, 
          and thrive—without the overwhelm.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-[#635DFF] hover:bg-[#635DFF]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey - $5 Early Access
          </Button>
          <Button 
            variant="outline" 
            className="border-[#635DFF] text-[#635DFF] hover:bg-[#635DFF]/5 px-8 py-4 text-lg rounded-full"
          >
            See How It Works
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-2xl transform rotate-12 animate-pulse"></div>
            <div className="w-12 h-12 bg-[#FF6F61] rounded-full transform -rotate-6"></div>
            <div className="w-20 h-20 bg-gradient-to-tr from-[#E5E9FF] to-[#6FFFCB] rounded-3xl transform rotate-6"></div>
            <div className="w-14 h-14 bg-[#635DFF] rounded-2xl transform -rotate-12 animate-pulse delay-300"></div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-2 h-2 bg-[#6FFFCB] rounded-full mx-1 animate-bounce"></div>
            <div className="w-2 h-2 bg-[#635DFF] rounded-full mx-1 animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-[#FF6F61] rounded-full mx-1 animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Hero;
