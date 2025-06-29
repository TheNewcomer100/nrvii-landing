
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SignupForm from "./SignupForm";

const EarlyAccess = () => {
  const [showForm, setShowForm] = useState(false);

  const benefits = [
    "Exclusive early access to Nrvii",
    "Weekly founder updates and progress",
    "Private community of like-minded creators",
    "Input on features that matter to you",
    "Lifetime discount when we launch"
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your $5 Gets You:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">✅</span>
                </div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-white text-[#635DFF] hover:bg-white/90 px-8 py-4 text-lg rounded-full font-semibold"
            >
              Join Early Access - $5
            </Button>
            <p className="mt-4 text-white/80">
              No spam. Your data is safe. Your journey matters.
            </p>
          </div>
        </div>
      </div>

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default EarlyAccess;
