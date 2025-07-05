
const Solution = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-6">
            What Makes Nrvii Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike generic productivity apps that force you into rigid systems, 
            Nrvii adapts to your natural rhythms and celebrates your complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Comparison */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#23263A] mb-8">
              Traditional Apps vs. Nrvii
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-red-500 text-xl">❌</div>
                <div>
                  <p className="font-medium text-gray-800">"Focus on one thing at a time"</p>
                  <p className="text-sm text-gray-600">Forces you to abandon interests</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-[#6FFFCB] text-xl">✅</div>
                <div>
                  <p className="font-medium text-gray-800">"Juggle multiple passions guilt-free"</p>
                  <p className="text-sm text-gray-600">Celebrates your multi-passionate nature</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-red-500 text-xl">❌</div>
                <div>
                  <p className="font-medium text-gray-800">"Push through at all costs"</p>
                  <p className="text-sm text-gray-600">Leads to burnout and crashes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-[#6FFFCB] text-xl">✅</div>
                <div>
                  <p className="font-medium text-gray-800">"Work with your energy, not against it"</p>
                  <p className="text-sm text-gray-600">Prevents burnout through smart energy tracking</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-red-500 text-xl">❌</div>
                <div>
                  <p className="font-medium text-gray-800">"One-size-fits-all approach"</p>
                  <p className="text-sm text-gray-600">Ignores neurodivergent needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-[#6FFFCB] text-xl">✅</div>
                <div>
                  <p className="font-medium text-gray-800">"Built for ADHD and neurodivergent minds"</p>
                  <p className="text-sm text-gray-600">Gentle reminders, flexible structure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#635DFF]/10 to-[#6FFFCB]/10 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-[#23263A] mb-6">The Nrvii Approach</h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-[#635DFF]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#635DFF] font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Track Your Energy First</p>
                    <p className="text-sm text-gray-600">Understand your natural rhythms</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-[#6FFFCB]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#6FFFCB] font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Match Tasks to Energy</p>
                    <p className="text-sm text-gray-600">High energy = creative work, Low energy = admin</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-[#FF6F61]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#FF6F61] font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Celebrate Progress</p>
                    <p className="text-sm text-gray-600">Small wins across all your projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
