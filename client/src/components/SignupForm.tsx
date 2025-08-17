
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SignupFormProps {
  onClose: () => void;
}

const SignupForm = ({ onClose }: SignupFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Welcome to Nrvii! 🎉",
      description: "You're in! Check your email for next steps.",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-scale-in">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
        >
          <X className="h-4 w-4" />
        </Button>

        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-bold text-[#23263A] mb-2">Join Nrvii Early Access</h3>
            <p className="text-gray-600 mb-6">Your $5 gets you exclusive access and lifetime benefits.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-full"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full"
              />
              <Button
                type="submit"
                className="w-full bg-[#635DFF] hover:bg-[#635DFF]/90 text-white py-3 rounded-full"
              >
                Claim Your Spot - $5
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam. Your data is safe. Your journey matters.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-[#6FFFCB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-[#23263A] mb-2">Welcome to the journey!</h3>
            <p className="text-gray-600 mb-6">
              You're now part of the Nrvii family. Check your email for payment details and next steps.
            </p>
            <Button onClick={onClose} className="bg-[#635DFF] hover:bg-[#635DFF]/90 text-white rounded-full">
              Continue Exploring
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
