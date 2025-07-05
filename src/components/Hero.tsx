
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MailerLiteModal from "./MailerLiteModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSignupClick = () => {
    setShowModal(true);
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#635DFF]/5 via-transparent to-[#6FFFCB]/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#E5E9FF] rounded-full blur-xl opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#6FFFCB] rounded-full blur-lg opacity-40 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#FF6F61] rounded-full blur-md opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#635DFF] rounded-full blur-lg opacity-25 animate-bounce delay-500"></div>
      
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

        {/* Single CTA */}
        <div className="flex justify-center mb-16">
          <Button 
            onClick={handleSignupClick}
            className="bg-[#635DFF] hover:bg-[#635DFF]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Notified - $5 Beta Access
          </Button>
        </div>

        {/* Hero Visual with Enhanced Animation */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-2xl transform rotate-12 animate-pulse"></div>
            <div className="w-12 h-12 bg-[#FF6F61] rounded-full transform -rotate-6 animate-bounce delay-200"></div>
            <div className="w-20 h-20 bg-gradient-to-tr from-[#E5E9FF] to-[#6FFFCB] rounded-3xl transform rotate-6 animate-pulse delay-700"></div>
            <div className="w-14 h-14 bg-[#635DFF] rounded-2xl transform -rotate-12 animate-bounce delay-300"></div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-2 h-2 bg-[#6FFFCB] rounded-full mx-1 animate-bounce"></div>
            <div className="w-2 h-2 bg-[#635DFF] rounded-full mx-1 animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-[#FF6F61] rounded-full mx-1 animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      <MailerLiteModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </section>
  );
};

export default Hero;
