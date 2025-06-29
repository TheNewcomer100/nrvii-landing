
const Footer = () => {
  return (
    <footer className="bg-[#23263A] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/ec798f06-750b-4966-89d8-37640072fb5a.png" 
              alt="Nrvii Logo" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Made with ❤️ for multi-passionate humans
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#6FFFCB] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6FFFCB] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://x.com/NrviiHq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#6FFFCB] transition-colors"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@Just_Nrvii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#6FFFCB] transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a href="mailto:hello@nrvii.com" className="hover:text-[#6FFFCB] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Nrvii. All rights reserved. Your complexity is your superpower.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
