
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
    },
    {
      icon: "🤝",
      title: "Supportive Community",
      description: "Connect with fellow multi-passionate creators"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-4">
            Finally, An App That Gets You
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#635DFF] to-[#6FFFCB] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
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
