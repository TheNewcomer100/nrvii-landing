
const FAQ = () => {
  const faqs = [
    {
      question: "Is this another productivity app trying to optimize my life?",
      answer: "Nope. We're here to help you work WITH your natural rhythms, not against them."
    },
    {
      question: "What if I have ADHD or other neurodivergent traits?",
      answer: "Nrvii was designed by and for neurodivergent minds. We celebrate how your brain works."
    },
    {
      question: "I've tried everything. How is this different?",
      answer: "We focus on sustainable success, not hustle culture. Your wellbeing comes first, always."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-4">
            Questions? We've Got You
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#635DFF] to-[#6FFFCB] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#23263A] mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
