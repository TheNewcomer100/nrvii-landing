
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SignupForm from "./SignupForm";

const FinalCTA = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#23263A] to-[#635DFF] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#6FFFCB]/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF6F61]/20 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Thrive as Your Full Self?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of multi-passionate creators who are turning overwhelm into opportunity.
            </p>
            
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-[#6FFFCB] text-[#23263A] hover:bg-[#6FFFCB]/90 px-8 py-4 text-lg rounded-full font-semibold mb-6"
            >
              Claim Your Spot - $5 Early Access
            </Button>
            
            <p className="text-white/80">
              Be among the first to experience productivity that doesn't sacrifice your soul.
            </p>
          </div>
        </div>
      </div>

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default FinalCTA;
