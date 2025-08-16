
const Footer = () => {
  return (
    <footer className="bg-nrvii-slate text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src="/lovable-uploads/4f1954dd-3c6f-47b3-bb36-505f1b02891d.png" 
          alt="Nrvii Logo" 
          className="h-12 mx-auto mb-6 brightness-0 invert"
        />
        <p className="text-gray-300 mb-6">
          Built with ❤️ for the multi-passionate community
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://x.com/NrviiHq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-nrvii-mint transition-colors"
          >
            X
          </a>
          <a 
            href="https://www.youtube.com/@Just_Nrvii" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-nrvii-mint transition-colors"
          >
            YouTube
          </a>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © 2024 Nrvii. All rights reserved. Your complexity is your superpower.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
