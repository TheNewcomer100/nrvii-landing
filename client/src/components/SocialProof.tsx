
const SocialProof = () => {
  return (
    <section className="py-24 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-16">
          Join The Movement
        </h2>

        {/* Testimonial */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="text-6xl text-[#6FFFCB] mb-6">"</div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
            Finally, someone who understands that I can be productive AND protect my mental health. 
            Nrvii doesn't make me choose.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>
            <div>
              <p className="font-semibold text-[#23263A]">Sarah M.</p>
              <p className="text-gray-600">Creative Entrepreneur</p>
            </div>
          </div>
        </div>

        {/* Research Stat */}
        <div className="bg-nrvii-lilac/30 rounded-2xl p-8 text-center">
          <p className="text-lg text-nrvii-slate font-medium mb-2">
            Research shows 73% of creative professionals have 3+ active passion projects, yet 89% of productivity tools are built for single-focus users.
          </p>
          <cite className="text-sm text-gray-600">Creative Professional Survey, 2024</cite>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
