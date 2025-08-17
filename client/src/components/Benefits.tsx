
const Benefits = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Multi-Project Dashboard", 
      description: "See all your passions in one place without feeling scattered or overwhelmed by traditional single-focus tools"
    },
    {
      icon: "⚡",
      title: "Smart Energy Tracking",
      description: "Work with your natural rhythms instead of against them—never burn out from pushing through low-energy periods again"
    },
    {
      icon: "🧠", 
      title: "ADHD-Friendly Design",
      description: "Gentle reminders and dopamine-friendly progress tracking built specifically for neurodivergent minds"
    },
    {
      icon: "🛡️",
      title: "Burnout Prevention",
      description: "Sustainable productivity that celebrates rest and recovery as essential parts of creative success"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-6">
            Finally, An App That Gets Your Multi-Passionate Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop trying to fit into productivity systems built for single-focus people. 
            Nrvii celebrates your complexity and helps you thrive with multiple interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
