
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showMailerLite, setShowMailerLite] = useState(false);

  useEffect(() => {
    // Load MailerLite script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '1628235');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSignupClick = () => {
    setShowMailerLite(true);
    // Trigger MailerLite popup
    if (window.ml) {
      window.ml('show', 'form', '1628235');
    }
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
            Start Your Journey - $5 Early Access
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

      {/* Custom MailerLite styling */}
      <style jsx>{`
        .ml-form-embed {
          background: white !important;
          border-radius: 1rem !important;
          border: none !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
        .ml-form-embed .ml-form-embedBody {
          padding: 2rem !important;
        }
        .ml-form-embed .ml-form-embedSubmit .ml-form-embedSubmitContent {
          background-color: #635DFF !important;
          border-radius: 9999px !important;
          padding: 1rem 2rem !important;
          font-size: 1.125rem !important;
        }
        .ml-form-embed .ml-form-embedSubmit .ml-form-embedSubmitContent:hover {
          background-color: rgba(99, 93, 255, 0.9) !important;
        }
        .ml-form-embed input[type="text"], .ml-form-embed input[type="email"] {
          border-radius: 9999px !important;
          border: 2px solid #e5e7eb !important;
          padding: 0.75rem 1rem !important;
          font-size: 1rem !important;
        }
        .ml-form-embed input[type="text"]:focus, .ml-form-embed input[type="email"]:focus {
          border-color: #635DFF !important;
          box-shadow: 0 0 0 3px rgba(99, 93, 255, 0.1) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
