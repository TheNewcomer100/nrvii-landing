
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MailerLiteModal from "./MailerLiteModal";

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSignupClick = () => {
    setShowModal(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#635DFF]/5 to-[#6FFFCB]/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-6">
          Early Adopter Pricing
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Join now and lock in special beta pricing before we launch to the public
        </p>

        {/* Main Pricing Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto mb-12">
          <div className="bg-gradient-to-r from-[#635DFF] to-[#6FFFCB] p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Beta Access</h3>
            <p className="text-white/90">Get in early and help shape Nrvii</p>
          </div>
          
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-[#23263A] mb-2">$5</div>
              <p className="text-gray-600">One-time beta access fee</p>
              <p className="text-sm text-[#635DFF] font-medium">Then $15/month when we launch</p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#6FFFCB] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Full access to all beta features</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#6FFFCB] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Direct input on new features</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#6FFFCB] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Lifetime 50% discount ($7.50/month)</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#6FFFCB] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Weekly founder updates</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#6FFFCB] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Cancel anytime, keep beta access</span>
              </div>
            </div>

            <Button 
              onClick={handleSignupClick}
              className="w-full bg-[#635DFF] hover:bg-[#635DFF]/90 text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300"
            >
              Secure Your Beta Spot - $5
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              Less than a coffee • 30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Value Comparison */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-[#23263A] mb-6">Why This Is a No-Brainer</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">☕</div>
              <p className="font-semibold">One Coffee</p>
              <p className="text-gray-600">$5 for 30 minutes of energy</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <p className="font-semibold">One App Download</p>
              <p className="text-gray-600">$5 for a game you'll delete</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <p className="font-semibold text-[#635DFF]">Nrvii Beta</p>
              <p className="text-gray-600">$5 for sustainable productivity</p>
            </div>
          </div>
        </div>

        <MailerLiteModal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
        />
      </div>
    </section>
  );
};

export default Pricing;
