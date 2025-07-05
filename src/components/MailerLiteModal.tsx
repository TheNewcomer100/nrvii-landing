
import { useEffect } from 'react';

interface MailerLiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailerLiteModal = ({ isOpen, onClose }: MailerLiteModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <span className="text-gray-600 text-xl leading-none">×</span>
          </button>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#635DFF] to-[#6FFFCB] p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Join the Beta Waitlist</h3>
            <p className="text-white/90">Be first to experience Nrvii - just $5 for beta access</p>
          </div>
          
          {/* MailerLite Form */}
          <div className="p-6">
            <div className="ml-embedded" data-form="2ZYZaB"></div>
          </div>
        </div>
      </div>
      
      {/* Custom MailerLite styling */}
      <style>{`
        .ml-embedded .ml-form-embed {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .ml-embedded .ml-form-embedBody {
          padding: 0 !important;
        }
        .ml-embedded .ml-form-embedSubmit .ml-form-embedSubmitContent {
          background-color: #635DFF !important;
          border-radius: 9999px !important;
          padding: 0.75rem 2rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          width: 100% !important;
          margin-top: 1rem !important;
        }
        .ml-embedded .ml-form-embedSubmit .ml-form-embedSubmitContent:hover {
          background-color: rgba(99, 93, 255, 0.9) !important;
        }
        .ml-embedded input[type="text"], 
        .ml-embedded input[type="email"] {
          border-radius: 0.5rem !important;
          border: 2px solid #e5e7eb !important;
          padding: 0.75rem 1rem !important;
          font-size: 1rem !important;
          width: 100% !important;
          margin-bottom: 1rem !important;
        }
        .ml-embedded input[type="text"]:focus, 
        .ml-embedded input[type="email"]:focus {
          border-color: #635DFF !important;
          box-shadow: 0 0 0 3px rgba(99, 93, 255, 0.1) !important;
          outline: none !important;
        }
        .ml-embedded .ml-form-embedBodyDefault {
          margin: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default MailerLiteModal;
