
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
      question: "When will Nrvii be available?",
      answer: "Nrvii is launching soon—join the waitlist to shape the product and get first access."
    },
    {
      question: "How is this different from other productivity apps?",
      answer: "Most apps force you to pick one focus. Nrvii celebrates your multiple interests and helps you make progress without burnout."
    },
    {
      question: "Is there a free version?",
      answer: "Yes! We'll have a free tier for basic project tracking, with premium features for advanced energy management and AI suggestions."
    },
    {
      question: "Who is this for?",
      answer: "Multi-passionate creators, neurodivergent individuals, and anyone juggling multiple projects who's tired of feeling 'broken' for not having one singular focus."
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
      </div>
    </section>
  );
};

export default FAQ;
