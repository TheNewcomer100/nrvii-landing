
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MailerLiteModal from "./MailerLiteModal";

const EarlyAccess = () => {
  const [showModal, setShowModal] = useState(false);

  const benefits = [
    "Exclusive beta access to Nrvii when ready",
    "Weekly founder updates and progress",
    "Input on features that matter to you",
    "Lifetime discount when we launch"
  ];

  const handleSignupClick = () => {
    setShowModal(true);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-10 right-10 w-36 h-36 bg-[#E5E9FF]/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-[#6FFFCB]/20 rounded-full blur-xl animate-bounce delay-500"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-[#FF6F61]/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Inner animated elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-bounce delay-300"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your $5 Beta Gets You:
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-sm">✅</span>
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={handleSignupClick}
                className="bg-white text-[#635DFF] hover:bg-white/90 px-8 py-4 text-lg rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Join Beta Waitlist - $5
              </Button>
              <p className="mt-4 text-white/80">
                No spam. Your data is safe. Your journey matters.
              </p>
            </div>
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

export default EarlyAccess;
