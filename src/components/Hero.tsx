
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MailerLiteModal from "./MailerLiteModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSignupClick = () => {
    setShowModal(true);
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#635DFF]/5 via-transparent to-[#6FFFCB]/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/4f1954dd-3c6f-47b3-bb36-505f1b02891d.png" 
                alt="Nrvii Logo" 
                className="h-12"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nrvii-slate mb-6 leading-tight">
              Finally, A Productivity System That{" "}
              <span className="text-nrvii-indigo">Celebrates Your Multiple Passions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop feeling scattered. Nrvii helps multi-passionate creators track energy, 
              manage multiple projects, and prevent burnout—without forcing you into a 
              one-size-fits-all productivity box.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-nrvii-indigo to-nrvii-mint rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-nrvii-coral to-nrvii-lilac rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-nrvii-mint to-nrvii-indigo rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">Built by neurodivergent founders</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <Button 
                onClick={handleSignupClick}
                className="bg-nrvii-indigo hover:bg-nrvii-indigo/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join the Waitlist - Early Access
              </Button>
              
              {/* Email Signup Form */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nrvii-indigo/50 focus:border-nrvii-indigo"
                  />
                  <button
                    onClick={handleSignupClick}
                    className="bg-nrvii-indigo hover:bg-nrvii-indigo/90 text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
                  >
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Preview */}
          <div className="relative">
            {/* Main Product Screenshot Mockup */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Mock Browser Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">nrvii.app</div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">Today's Energy: 75%</h3>
                  <div className="w-16 h-2 bg-[#6FFFCB] rounded-full"></div>
                </div>
                
                {/* Projects */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-[#635DFF]/10 rounded-lg">
                    <div className="w-3 h-3 bg-[#635DFF] rounded-full"></div>
                    <span className="text-sm font-medium">Photography Course</span>
                    <div className="ml-auto text-xs text-gray-500">2h today</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#6FFFCB]/10 rounded-lg">
                    <div className="w-3 h-3 bg-[#6FFFCB] rounded-full"></div>
                    <span className="text-sm font-medium">Music Production</span>
                    <div className="ml-auto text-xs text-gray-500">1h today</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FF6F61]/10 rounded-lg">
                    <div className="w-3 h-3 bg-[#FF6F61] rounded-full"></div>
                    <span className="text-sm font-medium">Side Business</span>
                    <div className="ml-auto text-xs text-gray-500">30m today</div>
                  </div>
                </div>
                
                {/* Energy Chart */}
                <div className="mt-6">
                  <div className="text-xs text-gray-500 mb-2">Weekly Energy Patterns</div>
                  <div className="flex items-end gap-1 h-12">
                    <div className="w-4 bg-[#635DFF]/30 h-8 rounded-sm"></div>
                    <div className="w-4 bg-[#635DFF]/60 h-10 rounded-sm"></div>
                    <div className="w-4 bg-[#635DFF] h-12 rounded-sm"></div>
                    <div className="w-4 bg-[#635DFF]/80 h-9 rounded-sm"></div>
                    <div className="w-4 bg-[#635DFF]/40 h-6 rounded-sm"></div>
                    <div className="w-4 bg-[#635DFF]/70 h-11 rounded-sm"></div>
                    <div className="w-4 bg-[#635DFF]/90 h-10 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Callouts */}
            <div className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-lg p-3 transform -rotate-6 animate-pulse">
              <div className="text-xs font-medium text-[#635DFF]">✨ Multi-project tracking</div>
            </div>
            <div className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-lg p-3 transform rotate-6 animate-pulse delay-500">
              <div className="text-xs font-medium text-[#6FFFCB]">🧠 Energy management</div>
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

export default Hero;
