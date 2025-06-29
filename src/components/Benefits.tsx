
const Benefits = () => {
  const benefits = [
    {
      icon: "🌟",
      title: "Multi-Passion Friendly",
      description: "Track multiple projects without guilt or scattered focus"
    },
    {
      icon: "🧠",
      title: "Mental Health First",
      description: "Built-in energy tracking and burnout prevention"
    },
    {
      icon: "⚡",
      title: "Smart Energy Management",
      description: "Match tasks to your natural rhythms and capacity"
    },
    {
      icon: "💫",
      title: "Neurodivergent-Designed",
      description: "ADHD-friendly interface with gentle reminders"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white/50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#6FFFCB]/10 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#635DFF]/10 rounded-full blur-xl animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#FF6F61]/10 rounded-full blur-lg animate-pulse delay-700"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-4">
            Finally, An App That Gets You
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#635DFF] to-[#6FFFCB] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-4xl mb-4 animate-bounce delay-100">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[#23263A] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
