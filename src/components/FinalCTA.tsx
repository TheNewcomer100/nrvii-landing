
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MailerLiteModal from "./MailerLiteModal";

const FinalCTA = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSignupClick = () => {
    setShowModal(true);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-br from-[#23263A] to-[#635DFF] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Multi-Passionate Journey Starts Here
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ creative minds who've found a productivity system that actually works 
              for complex, neurodivergent brains. Lock in your beta access for just $5.
            </p>
            
            <div className="space-y-6">
              <Button 
                onClick={handleSignupClick}
                className="bg-[#6FFFCB] text-[#23263A] hover:bg-[#6FFFCB]/90 px-8 py-4 text-lg rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Secure Your Spot - $5 Beta Access
              </Button>
              
              <div className="flex items-center justify-center gap-6 text-sm text-white/80">
                <span>✅ 30-day guarantee</span>
                <span>✅ Lifetime discount</span>
                <span>✅ Cancel anytime</span>
              </div>
            </div>
            
            <p className="text-white/70 mt-8">
              Don't let another productivity system make you feel broken. 
              <br />
              <strong className="text-white">You're not scattered. You're multi-passionate.</strong>
            </p>
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

export default FinalCTA;
