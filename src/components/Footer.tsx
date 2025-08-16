
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
        <p className="text-gray-300 mb-6">
          Contact: <a href="mailto:Nrvii.HQ@gmail.com" className="hover:text-nrvii-mint transition-colors">Nrvii.HQ@gmail.com</a>
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 Nrvii. All rights reserved. Your complexity is your superpower.
            </p>
            <a 
              href="https://docs.google.com/document/d/1DuhLKKtD2k41l2TF3EVn1jsRTPHC5EVYtRowwd48jxc/edit?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-nrvii-mint transition-colors text-sm underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
