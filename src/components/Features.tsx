
const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Multi-Project Dashboard",
      benefit: "See all your passions in one place without feeling overwhelmed",
      description: "Track multiple creative projects, side hustles, and learning goals simultaneously"
    },
    {
      icon: "⚡",
      title: "Smart Energy Tracking",
      benefit: "Never burn out again by working with your natural rhythms",
      description: "Log energy levels and get personalized task recommendations based on your capacity"
    },
    {
      icon: "🧠",
      title: "ADHD-Friendly Interface",
      benefit: "Stay focused without fighting your neurodivergent brain",
      description: "Gentle reminders, visual progress tracking, and dopamine-friendly celebrations"
    },
    {
      icon: "📊",
      title: "Progress Without Pressure",
      benefit: "Celebrate small wins and maintain momentum across all projects",
      description: "Flexible goal tracking that adapts to your changing interests and energy"
    },
    {
      icon: "🛡️",
      title: "Burnout Prevention",
      benefit: "Sustainable productivity that protects your mental health",
      description: "Built-in rest reminders and energy recovery tracking to prevent crashes"
    },
    {
      icon: "🌈",
      title: "Passion Project Insights",
      benefit: "Discover patterns and optimize your creative workflow",
      description: "Analytics that help you understand when and how you work best"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#635DFF]/5 to-[#6FFFCB]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-6">
            Features That Actually Help Multi-Passionate Minds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature is designed with one goal: helping you thrive with multiple interests 
            without the guilt, overwhelm, or burnout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
              
              <h3 className="text-xl font-bold text-[#23263A] mb-3">{feature.title}</h3>
              
              <p className="text-[#635DFF] font-semibold mb-3 text-sm uppercase tracking-wide">
                {feature.benefit}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Preview */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-[#23263A] mb-4">
              See Nrvii in Action
            </h3>
            <p className="text-gray-600 mb-6">
              Watch how Sarah manages her photography business, music production, 
              and online course creation—all without burning out.
            </p>
            
            {/* Video Placeholder */}
            <div className="bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-xl p-16 relative group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="relative z-10 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-xl font-semibold">Watch 2-Minute Demo</p>
                <p className="text-white/80">See how multi-passionate productivity actually works</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
