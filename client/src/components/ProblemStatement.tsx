
const ProblemStatement = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-nrvii-slate mb-8">
          You're Not Broken, You're Just <span className="text-nrvii-indigo">Multi-Passionate</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">😵‍💫</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Scattered & Overwhelmed</h3>
            <p className="text-gray-600">Traditional productivity apps make you feel guilty for having multiple interests</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Constant Burnout</h3>
            <p className="text-gray-600">Pushing through low energy leads to crashes and abandoned projects</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Misunderstood Minds</h3>
            <p className="text-gray-600">ADHD and neurodivergent brains need different tools, not more optimization</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-xl text-gray-700 italic leading-relaxed">
            "Research shows 73% of creative professionals have 3+ active passion projects, 
            yet 89% of productivity tools are built for single-focus users."
          </p>
          <p className="text-sm text-gray-500 mt-4">Creative Professional Survey, 2024</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
