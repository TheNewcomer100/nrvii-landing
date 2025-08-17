
const Testimonials = () => {
  const testimonials = [
    {
      quote: "For the first time, I don't feel guilty about having multiple creative projects. Nrvii helps me balance everything without the constant anxiety.",
      name: "Sarah Chen",
      role: "Photographer & Course Creator",
      avatar: "S",
      projects: "Photography, Online Courses, Art Prints"
    },
    {
      quote: "My ADHD brain finally found a productivity system that works WITH me, not against me. The energy tracking is a game-changer.",
      name: "Marcus Rodriguez",
      role: "Music Producer & Developer",
      avatar: "M",
      projects: "Music Production, App Development, YouTube"
    },
    {
      quote: "I was burning out every 3 months trying to juggle my business, writing, and learning new skills. Nrvii taught me sustainable productivity.",
      name: "Emma Thompson",
      role: "Entrepreneur & Writer",
      avatar: "E",
      projects: "E-commerce, Novel Writing, Language Learning"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-6">
            Real Stories from Multi-Passionate Creators
          </h2>
          <p className="text-xl text-gray-600">
            See how Nrvii is helping creative minds thrive without overwhelm
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#635DFF]/5 to-[#6FFFCB]/5 rounded-2xl p-8">
              <div className="text-4xl text-[#6FFFCB] mb-6">"</div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#23263A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-[#635DFF] mt-1">{testimonial.projects}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E5E9FF] rounded-2xl flex items-center justify-center mb-4 text-2xl">
              👥
            </div>
            <p className="font-bold text-2xl text-[#23263A]">500+</p>
            <p className="text-gray-600">Early Adopters</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E5E9FF] rounded-2xl flex items-center justify-center mb-4 text-2xl">
              ⭐
            </div>
            <p className="font-bold text-2xl text-[#23263A]">4.8/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E5E9FF] rounded-2xl flex items-center justify-center mb-4 text-2xl">
              🧠
            </div>
            <p className="font-bold text-2xl text-[#23263A]">73%</p>
            <p className="text-gray-600">Are Neurodivergent</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E5E9FF] rounded-2xl flex items-center justify-center mb-4 text-2xl">
              📈
            </div>
            <p className="font-bold text-2xl text-[#23263A]">89%</p>
            <p className="text-gray-600">Report Less Burnout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
