
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is this another productivity app trying to optimize my life?",
      answer: "Absolutely not. We're anti-optimization. Nrvii is designed to work WITH your natural rhythms and multiple interests, not force you into a rigid system that makes you feel broken when you can't stick to it."
    },
    {
      question: "What if I have ADHD or other neurodivergent traits?",
      answer: "Nrvii was designed BY neurodivergent founders FOR neurodivergent minds. We understand executive function challenges, hyperfocus cycles, and the need for dopamine-friendly progress tracking. Every feature is built with ADHD, autism, and other neurodivergent experiences in mind."
    },
    {
      question: "I've tried everything. How is this different?",
      answer: "Most productivity apps are built for neurotypical, single-focus users. Nrvii celebrates your complexity instead of trying to fix it. We focus on sustainable success through energy management, not hustle culture productivity hacks."
    },
    {
      question: "What happens after I pay the $5?",
      answer: "You'll get immediate access to our beta community and regular updates on development progress. When the app launches, you'll be among the first to get access, plus you'll lock in a lifetime 50% discount on the monthly subscription."
    },
    {
      question: "Can I get a refund if it's not for me?",
      answer: "Yes! We offer a 30-day money-back guarantee. If Nrvii doesn't feel right for your brain, just email us and we'll refund your $5 immediately, no questions asked."
    },
    {
      question: "When will the full app be ready?",
      answer: "We're aiming for early 2025. Beta testers will get regular updates and early access to new features as we build them. Your feedback directly shapes what we prioritize."
    },
    {
      question: "Will this work if I'm not 'multi-passionate'?",
      answer: "If you have more than one interest, hobby, or project (even if it's work + one side thing), Nrvii can help. You don't need to identify as 'multi-passionate' – you just need to feel overwhelmed by traditional productivity advice."
    },
    {
      question: "What about my data and privacy?",
      answer: "Your data is yours. We'll never sell your information or use it for advertising. All data is encrypted and stored securely. You can export or delete your data anytime."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-6">
            Questions? We've Got You
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Nrvii and why it's different
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#23263A] pr-4">
                    {faq.question}
                  </h3>
                  <div className={`text-[#635DFF] text-2xl transition-transform duration-200 ${
                    openItems.includes(index) ? 'transform rotate-45' : ''
                  }`}>
                    +
                  </div>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:hello@nrvii.com" 
            className="text-[#635DFF] hover:text-[#635DFF]/80 font-medium underline"
          >
            Email us directly - we actually respond!
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
